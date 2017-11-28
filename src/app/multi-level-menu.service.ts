import { Injectable } from '@angular/core';

@Injectable()
export class MultiLevelMenuService {
  private state;

  constructor() { 
    this.state = [1, 0, 0];
  }

  toggle(level) {
    let idx = level || 0;
    this.state[idx] = !this.state[idx];
  }

  back(){

  }
}
