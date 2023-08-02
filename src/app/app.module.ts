import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CaculatorComponent } from './components/caculator/caculator.component';
import { caculatorReducer } from '../app/reducers/caculator.reducer';
@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({caculator: caculatorReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
