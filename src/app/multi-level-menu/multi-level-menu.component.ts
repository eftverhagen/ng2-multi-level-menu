import { MultiLevelMenuService } from './../multi-level-menu.service';
import { Component, OnInit, trigger, transition, animate, style, state } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-multi-level-menu',
  templateUrl: './multi-level-menu.component.html',
  styleUrls: ['./multi-level-menu.component.scss'],
  animations: [
    trigger('anim', [
      state('0', style({left: '-300px'})),
      state('1', style({left: '0px'})),
    ])
  ],
})

export class MultiLevelMenuComponent implements OnInit {

  constructor(public _menu: MultiLevelMenuService) {

   }

  ngOnInit() {

  }

}
