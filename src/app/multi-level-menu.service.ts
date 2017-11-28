import { Injectable } from '@angular/core';

@Injectable()
export class MultiLevelMenuService {
  private v;

  constructor() { 

  }

  toggle(){
    this.v = !this.v;
    console.log(this.v)
  }
}
