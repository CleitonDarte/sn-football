import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './_core/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public urlPath: string = '';

  constructor(
    public router: Router
  ) {
    this.checkUrl(this.router.url);
    this.router.events.subscribe(event => { (event instanceof NavigationEnd) && this.checkUrl(event.urlAfterRedirects) });
  }

  private checkUrl(url: string) {
    this.urlPath = url.split('?')[0].replace('/', '').split('/')[0];
  }

}
