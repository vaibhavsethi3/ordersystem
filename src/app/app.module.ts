import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiService } from './shared/api.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [HttpClientModule, ApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, HelloComponent, EmployeeDashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
