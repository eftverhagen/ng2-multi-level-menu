import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class MultiLevelMenuService {
  private state;
  private w;
  private contentLeft;

  constructor() { 
    this.state = [0, 0, 0];
    this.w = [340];
  }

  calculateContentLeft(){
    this.contentLeft = _.max(this.w);
    console.log('content left:', this.contentLeft);
  }

  calculateLevelSize(){
    let levelsOpen = _.sumBy(this.state, i => i === true ? 1 : 0);
    console.log('levels open:', levelsOpen);
  }

  toggle(level) {
    let idx = level || 0;
    this.state[idx] = !this.state[idx];
    this.calculateContentLeft();
    this.calculateLevelSize();
    
  }

  back(){

  }
}
