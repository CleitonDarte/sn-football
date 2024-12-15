import { Component } from '@angular/core';
import { CoreService } from '../_core/core.service';
import { SharedModule } from '../_core/shared.module';

interface ToastSettings {
  xPos: 'left' | 'right' | 'middle',
  yPos: 'top' | 'bottom' | 'center',
  liveTime: number /* seconds */
}

interface Toast {
  type: 'success' | 'error' | 'warn' | 'info',
  description: string,
  utid: number
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  public toastSetts: ToastSettings = {
    xPos: 'middle',
    yPos: 'bottom',
    liveTime: 5
  };

  public toastList: Toast[] = [];

  constructor(
    private core: CoreService
  ) {
    this.core.toast.subscribe(toast => {
      if (!!toast) {
        let createdTime = new Date().getTime();
        this.toastList.push({ ...toast, utid: createdTime });
        setTimeout(() => { this.removeToast(createdTime) }, (toast.time || this.toastSetts.liveTime) * 1000);
      }
    });
  }

  public removeToast(id: number) {
    this.toastList = this.toastList.filter(t => { return t.utid != id });
  }

}
