import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiLevelMenuService } from './multi-level-menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiLevelMenuComponent } from './multi-level-menu/multi-level-menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'aygo', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    MultiLevelMenuComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [MultiLevelMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
