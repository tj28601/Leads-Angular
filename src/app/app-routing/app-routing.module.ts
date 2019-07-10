import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from '../app/company-list/company-list.component';
import { CompanyDetailComponent } from '../app/company-detail/company-detail.component';
import { DealListComponent } from '../app/deal-list/deal-list.component';
import { DealDetailComponent } from '../app/deal-detail/deal-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/deals', pathMatch: 'full' },
  { path: 'deals', component: DealListComponent },
  { path: 'deals/:id', component: DealDetailComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
