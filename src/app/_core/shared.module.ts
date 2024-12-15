import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import pt from "@angular/common/locales/pt-PT";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, IConfig, provideNgxMask } from "ngx-mask";
registerLocaleData(pt);

const maskConfig: Partial<IConfig> = { validation: false };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask(maskConfig)
  ]
})
export class SharedModule { }