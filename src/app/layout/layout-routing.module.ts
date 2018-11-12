import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ApplicationsCardComponent } from './postulation/applications-card/applications-card.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      { path: 'postulation', component: ApplicationsCardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
