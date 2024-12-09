import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public assetsGlobalUrl: string = location.hostname == 'localhost' ? './../../assets/' : 'https://raw.githubusercontent.com/CleitonDarte/sn-football/master/src/assets/';

  constructor() { }
}
