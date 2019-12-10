import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './app/company-list/company-list.component';
import { CompanyDetailComponent } from './app/company-detail/company-detail.component';
import { DealListComponent } from './app/deal-list/deal-list.component';
import { DealDetailComponent } from './app/deal-detail/deal-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { UpdateMessage } from './app/deal-detail/deal-detail.component';
import { TestDetailComponent } from './app/test-detail/test-detail.component';
import { DealDetailContainerComponent } from './app/deal-detail-container/deal-detail-container.component';
import { TestListComponent } from './app/test-list/test-list.component';
import { DealListContainerComponent } from './app/deal-list-container/deal-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    DealListComponent,
    DealDetailComponent,
    UpdateMessage,
    TestDetailComponent,
    DealDetailContainerComponent,
    TestListComponent,
    DealListContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [UpdateMessage],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
