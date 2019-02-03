import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ResultsComponent } from './components/results/results.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';

import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ResultsComponent,
    UpdatePageComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
