import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiLevelMenuService } from './multi-level-menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiLevelMenuComponent } from './multi-level-menu/multi-level-menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiLevelMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MultiLevelMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
