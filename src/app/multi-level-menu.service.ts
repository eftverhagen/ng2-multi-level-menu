import { menuStructure } from './shared/menu-structure';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class MultiLevelMenuService {
  public state;
  public initialWidth;
  public w;
  public contentLeft;
  public colors;
  public menuActive: boolean = false;

  constructor() { 
    this.state = [0, 0, 0];
    this.initialWidth = 300;
    this.w = [this.initialWidth];
    this.colors = ['#2a4867', '#023d4a', '#024a36'];
  }

  getLevelState(level) {
    console.log(this.state[level] ? 'active' : 'inactive');
    return this.state[level] ? 'active' : 'inactive'
  }

  calculateContentLeft(){
    this.contentLeft = _.max(this.w);
  }

  calculateLevelSize(){
    this.w = _.reverse(_.map(_.filter(this.state, l => l), (w, i) => this.initialWidth + i * 40));
  }

  reset(){
    this.w = _.map(this.state, l => this.initialWidth);
    this.contentLeft = this.initialWidth;
  }

  toggle(level) {
    console.log(this.state);
    if(level) {
      this.state[level] = 1 - this.state[level];
      this.calculateLevelSize();
      this.calculateContentLeft();
    }else{
      this.state = _.map(this.state, (l, i) => {
        this.reset()
        return i === 0 ? 1 - l : 0;
      });
    }
    console.log(this.state);   
  }  
}
