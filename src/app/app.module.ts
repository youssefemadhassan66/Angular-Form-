import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdFormsComponent } from './td-forms/td-forms.component';
import {FormsModule} from '@angular/forms';
import { UsingPipesComponent } from './using-pipes/using-pipes.component'
import { NoSpace } from './pipes/no_Space.pipe';
@NgModule({
  declarations: [
    NoSpace,
    AppComponent,
    TdFormsComponent,
    UsingPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
