import { MultiLevelMenuService } from './../multi-level-menu.service';
import { Component, OnInit, trigger, transition, animate, style, state } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-multi-level-menu',
  templateUrl: './multi-level-menu.component.html',
  styleUrls: ['./multi-level-menu.component.scss'],
  animations: [
    trigger('anim', [
      state('0', style({
        transform: 'translate3d(-300px, 0px, 0px)'
      })),
      state('1',   style({
        transform: 'translate3d(0px, 0px, 0px)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(-300px, 0px, 0px)'}),
        animate("0.5s ease", style({ transform: 'translate3d(0px, 0px, 0px)' }))
      ])
    ])
  ],
})

export class MultiLevelMenuComponent implements OnInit {

  constructor(public _menu: MultiLevelMenuService) {

   }

  ngOnInit() {

  }

}
