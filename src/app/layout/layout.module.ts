import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {MainContentComponent} from './main-content/main-content.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, MainHeaderComponent, MainContentComponent]
})
export class LayoutModule {
}
