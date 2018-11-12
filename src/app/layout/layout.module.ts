import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ApplicationsCardComponent } from './postulation/applications-card/applications-card.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DashboardModule
  ],
  declarations: [LayoutComponent, MainHeaderComponent, MainContentComponent, ApplicationsCardComponent],
  exports: [
  ]
})
export class LayoutModule {
}
