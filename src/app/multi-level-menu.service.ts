import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class MultiLevelMenuService {
  public state;
  public initialWidth;
  public w;
  public contentLeft;

  constructor() { 
    this.state = [0, 0, 0];
    this.initialWidth = 300;
    this.w = [this.initialWidth];
  }

  calculateContentLeft(){
    this.contentLeft = _.max(this.w);
    console.log('content left:', this.contentLeft);
  }

  calculateLevelSize(){
    this.w = _.reverse(_.map(_.filter(this.state, l => l), (w, i) => this.initialWidth + i * 40));
    console.log('width', this.w);
  }

  reset(){
    this.w = _.map(this.state, l => this.initialWidth);
    this.contentLeft = this.initialWidth;
  }

  toggle(level) {
    if(level){
      this.state[level] = !this.state[level];
      this.calculateLevelSize();
      this.calculateContentLeft();
    }else{
      this.state = _.map(this.state, (l, i) => {
        this.reset()
        return i === 0 ? !l : false;
      });

    }

    console.log(this.state);
    
  }

  back(){

  }
}
