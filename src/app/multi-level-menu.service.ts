import { menuStructure } from './shared/menu-structure';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class MultiLevelMenuService {
  public state;
  public state2;
  public initialWidth;
  public w;
  public contentLeft;
  public colors;
  public structure;

  constructor() { 
    this.state = [0, 0, 0];
    this.state2 = _.map(menuStructure, level => { 
      return {id: level.id, name: level.name, active: 0}; 
    });

    console.log(this.state2);

    this.initialWidth = 300;
    this.w = [this.initialWidth];
    this.colors = ['#2a4867', '#023d4a', '#024a36'];
    
    this.structure = menuStructure;
  }

  calculateContentLeft(){
    this.contentLeft = _.max(this.w);
  }

  calculateLevelSize(){
    this.w = _.reverse(_.map(_.filter(this.state2, level => level.active), (w, i) => this.initialWidth + i * 40));
  }

  reset(){
    this.w = _.map(this.state, l => this.initialWidth);
    this.contentLeft = this.initialWidth;
  }

  toggle(levelId) {
    if(levelId) {
      this.state2 = _.map(this.state2, (level) => {
        if(level.id === levelId) {
          level.active = 1 - level.active;
        }
        return level;
      });
      this.calculateLevelSize();
      this.calculateContentLeft();
      console.log(this.state2);
    }else{
      this.state2 = _.map(this.state2, (level, i) => {
        i === 0 ? level.active = 1 - level.active : level.active = 0;
        return level;
      });
      this.reset()
    }
    console.log(this.state2);   
  }  
}
