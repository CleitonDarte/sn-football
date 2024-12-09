import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import pt from "@angular/common/locales/pt-PT";
registerLocaleData(pt);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
  ],
  providers: []
})
export class SharedModule { }