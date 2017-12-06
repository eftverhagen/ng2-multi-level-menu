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
  public colorsH;
  private order;

  constructor() { 
    this.order = [];

    this.initialWidth = 200;
    this.offset = 40;
    this.colors = ['#2a4867', '#023d4a', '#024a36'];
    this.colorsH = _.range(0, 300, 20);
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
    let widths = _.reverse(_.map(this.order, i => i * this.offset + this.initialWidth));
    _.map(this.order, (id, i) => {
      this.state = _.map(this.state, (level,idx) => {
        if(level.id === id) {
          level.width = widths[i];
        }
        return level;
      });
    });
  }

  reset(){
    this.contentLeft = this.initialWidth;
    this.order = [0];
  }
  
  toggle(levelId) {
    if(levelId !== 0) {
      this.state = _.map(this.state, (level) => {
        if(level.id === levelId) {
          level.active = 1 - level.active;
          if(level.active === 1){
            this.order.unshift(levelId)
          }else{
            let index = this.order.indexOf(levelId);
            this.order.splice(index, 1);
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
      
      this.reset();
      this.calculateWidth();
      this.calculateContentLeft();
      console.log(levelId);
    }
    
    console.log('state', this.state, 'order', this.order);
  }  
}
