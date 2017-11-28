import { MultiLevelMenuService } from './../multi-level-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-level-menu',
  templateUrl: './multi-level-menu.component.html',
  styleUrls: ['./multi-level-menu.component.scss']
})
export class MultiLevelMenuComponent implements OnInit {

  constructor(private _menu: MultiLevelMenuService) {
    
   }

  ngOnInit() {

  }

}
