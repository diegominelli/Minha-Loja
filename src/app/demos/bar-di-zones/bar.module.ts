import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      BarComponent
  ],
  exports: [
      BarComponent
  ]
})
export class BarModule { 
  
}