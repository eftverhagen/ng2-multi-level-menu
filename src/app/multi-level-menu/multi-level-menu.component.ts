import { MultiLevelMenuService } from './../multi-level-menu.service';
import { Component, OnInit, trigger, transition, animate, style, state } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-multi-level-menu',
  templateUrl: './multi-level-menu.component.html',
  styleUrls: ['./multi-level-menu.component.scss'],
  animations: [
    trigger('anim', [
      state('inactive', style({transform: 'translate3d(-300px, 0px, 0px)'})),
      state('active', style({transform: 'translate3d(0px, 0px, 0px)'})),
      transition(':enter', [
        style({
          opacity: 0,
          backgroundColor:'#333',
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
    ])
  ],
})

export class MultiLevelMenuComponent implements OnInit {

  constructor(public _menu: MultiLevelMenuService) {

   }

  ngOnInit() {

  }

}
