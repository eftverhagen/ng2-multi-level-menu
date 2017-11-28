import { MultiLevelMenuService } from './multi-level-menu.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public _menu: MultiLevelMenuService) {

  }
  title = 'app';
}
