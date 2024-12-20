import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';

export interface Toast { type: 'success' | 'error' | 'warn' | 'info', description: string, time?: number };

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public assetsGlobalUrl: string = location.hostname == 'localhost' ? './../../assets/' : 'https://raw.githubusercontent.com/CleitonDarte/sn-football/master/src/assets/';
  // public apiBaseUrl: string = `${location.hostname == 'localhost' ? 'http://localhost:5000' : 'https://sn-soccer-back-end.onrender.com'}/sn-soccer-rest-api/v1`;
  public apiBaseUrl: string = `https://sn-soccer-back-end.onrender.com/sn-soccer-rest-api/v1`;

  public popup = new BehaviorSubject<{ pop: 'auth' | 'update', extraData?: any } | undefined>(undefined);
  public toast = new BehaviorSubject<Toast | undefined>(undefined);

  public adminMode = new BehaviorSubject<boolean>(!!JSON.parse(localStorage['sd'] || '{}').ut && !!JSON.parse(localStorage['sd'] || '{}').adm);
  public refreshCall = new BehaviorSubject<boolean>(false);

  constructor() { }

  public bodyScroll(open: boolean) {
    open ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
  }

  public generateDeviceId(): string {
    let savedData = JSON.parse(localStorage['sd'] || '{}');

    if (!savedData.d) {
      savedData.d = uuid();
      localStorage['u'] = JSON.stringify(savedData);
    }
    return savedData.d;
  }
}
