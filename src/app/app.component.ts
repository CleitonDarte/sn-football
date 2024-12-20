import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './_core/shared.module';
import { CoreService } from './_core/core.service';
import { AuthService } from './_core/auth.service';
import { PopComponent } from './_pop/pop.component';
import { ToastComponent } from './_toast/toast.component';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, PopComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public popUp$: boolean = false;
  public urlPath: string = '';

  public admin$: boolean = false;
  public authed$: boolean = false;
  private openCounter: number = 0;
  private timerCount: any;

  constructor(
    public router: Router,
    private auth: AuthService,
    public core: CoreService
  ) {
    this.checkUrl(this.router.url);
    this.router.events.subscribe(event => { (event instanceof NavigationEnd) && this.checkUrl(event.urlAfterRedirects) });

    this.auth.savedData.subscribe(sd => { this.authed$ = sd });
    this.core.adminMode.subscribe(adm => {
      this.admin$ = adm;
      adm ? document.body.classList.add('admin') : document.body.classList.remove('admin');
      let sd = JSON.parse(localStorage['sd'] || '{}');
      sd.adm = adm;
      localStorage['sd'] = JSON.stringify(sd);
    });

    this.core.popup.subscribe(val => {
      const set = setTimeout(() => { this.popUp$ = !!val; this.core.bodyScroll(this.popUp$) }, 300);
      if (!!val) { this.popUp$ = !!val; this.core.bodyScroll(this.popUp$); clearTimeout(set) } else { set }
    });
  }

  private checkUrl(url: string) {
    this.urlPath = url.split('?')[0].replace('/', '').split('/')[0];
  }

  public openAuth() {
    if (this.openCounter >= 7) {
      clearTimeout(this.timerCount);
      this.openCounter = 0;
      this.core.popup.next({ pop: 'auth' });
    } else {
      !!this.timerCount && clearTimeout(this.timerCount);
      this.openCounter++;
      this.timerCount = setTimeout(() => { this.openCounter = 0 }, 1000);
      this.timerCount;
    }
  }

}
