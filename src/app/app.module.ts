import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiLevelMenuComponent } from './multi-level-menu/multi-level-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiLevelMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
