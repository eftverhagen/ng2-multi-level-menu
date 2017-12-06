import { structure } from './shared/menu-structure';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class MultiLevelMenuService {
  public state;
  public contentLeft;
  public initialWidth;
  private offset;
  public colors;

  private order;

  constructor() { 
    this.order = [];

    this.initialWidth = 200;
    this.offset = 40;
    this.colors = ['#2a4867', '#023d4a', '#024a36'];
    this.init();
  }

  init() {
    this.state = _.map(structure, level => { 
      level.active = 0;
      level.width = this.initialWidth;
      return level;
    });

    console.log(this.state);
  }

  calculateContentLeft(){
    this.contentLeft = _.max(_.map(this.state, level => level.width));
  }

  calculateWidth(){
    this.state = _.map(this.state, (level, idx) => {
      if(level.id === this.order[idx]) {
        level.width = this.initialWidth + (this.offset * idx);
      }
      return level;
    })
  }

  reset(){
    this.contentLeft = this.initialWidth;
    this.order = [];
  }
  
  toggle(levelId) {
    if(levelId !== 0) {
      this.state = _.map(this.state, (level) => {
        if(level.id === levelId) {
          level.active = 1 - level.active;
          if(level.active === 1){
            this.order.unshift(levelId)
          }
        }
        return level;
      });
      this.calculateWidth();
      this.calculateContentLeft();
    }else{
      this.state = _.map(this.state, (level, i) => {
        i === 0 ? level.active = 1 - level.active : level.active = 0;
        return level;
      });
      this.order.push(levelId)
      this.reset()
      console.log(levelId);
    }
    
    console.log('state', this.state, 'order', this.order);
  }  
}
