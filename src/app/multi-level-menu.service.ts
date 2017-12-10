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
  public rgb;
  private order;

  constructor() { 
    this.order = [];

    this.initialWidth = 200;
    this.offset = 40;
    this.init();
  }

  init() {
    this.colors = this.generateColors(true, 0, 400, structure.length)
    this.state = _.map(structure, (level, idx) => { 
      level.active = 0;
      level.width = this.initialWidth;
      level.color = this.colors[idx];
      return level;
    });
  }

  calculateContentLeft() {
    this.contentLeft = _.max(_.map(this.state, level => level.width));
  }

  calculateWidth(){
    let widths = _.map(this.order, (i, index) => this.initialWidth + (index * this.offset));
    this.state = _.map(this.state, level => {
      _.map(this.order, levelId => {
        if(level.id === levelId) {
          level.width = widths[this.order.indexOf(levelId)];
        }
      });
      return level;
    });
  }

  isOverlapped(levelId) {
    let index = this.order.indexOf(levelId);
    return typeof this.order[index -1] !== 'undefined';
  }

  closeUntil(levelId) {
    console.log('hi');
    // this.state = _.map(this.state, (level) => {
    //   if(level.id !== levelId) {
    //     level.active = 1 - level.active;
    //     if(level.active === 1){
    //       this.order.unshift(levelId)
    //     }else{
    //       let index = this.order.indexOf(levelId);
    //       this.order.splice(index, 1);
    //     }
    //   }
    //   return level;
    // });
  }

  toggle($event, levelId) {
    $event.stopPropagation();
    if(this.order.length === 0) {
        this.state = _.map(this.state, (level, i) => {
          i === 0 ? level.active = 1 - level.active : level.active = 0;
          return level;
        });
        this.calculateWidth();
        this.calculateContentLeft();
        this.contentLeft = this.initialWidth;
        this.order = [0];
    }else{
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
    }
    
    console.log('state', this.state, 
                'widths', _.map(this.state, level => {
                  return {id: level.id, width: level.width};
                }),
                'order', this.order);
  }

  generateColors(random, start, end, numOfLevels) {
    let colors = [];
    let r = 125;
    let g = 50;
    let b = 50;
    let step = _.floor(_.difference([end], [start]) / numOfLevels);
    let picks = [..._.range(start, end, step), end];
    
    let seq = [
      {r: 0, b: 0, g: +1},
      {r: -1, b: 0, g: 0},
      {r: 0, b: +1, g: 0},
      {r: 0, b: 0, g: -1},
      {r: +1, b: 0, g: 0},
      {r: 0, b: -1, g: 0},
    ];

    _.map(seq, a => {
      for(let i = 0; i <= 75; i++){
        if(i ===0) {
          colors.push({r,b,g});
        }else{
          r += a.r;
          b += a.b;
          g += a.g;
          colors.push({r,g,b});
        }
      }
    });


    if(random) {
      colors = _.map(picks, pick => colors[pick]);
    }
    return colors;
  }
}
