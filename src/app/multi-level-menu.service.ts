import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class MultiLevelMenuService {
  private state;
  private initialWidth;
  private w;
  private contentLeft;

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
    let levelsOpen = _.sumBy(this.state, i => i === true ? 1 : 0);
    this.w = _.reverse(_.map(_.filter(this.state, l => l), (w, i) => this.initialWidth + i * 40));
        
    console.log('width', this.w);
    console.log('levels open:', levelsOpen);
  }

  toggle(level) {
    if(level){
      this.state[level] = !this.state[level];
    }else{
      this.state = _.map(this.state, (l, i) => {
        return i === 0 ? !l : 0;
      });

    }
  
    this.calculateLevelSize();
    this.calculateContentLeft();
    console.log(this.state);
    
  }

  back(){

  }
}
