import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { CatColorPipe } from './pipes/cat-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    CatColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
