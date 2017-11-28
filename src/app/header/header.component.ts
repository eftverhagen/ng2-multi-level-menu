import { MultiLevelMenuService } from './../multi-level-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _menu: MultiLevelMenuService) { }

  ngOnInit() {

  }
}
