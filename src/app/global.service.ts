import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  private Arr  = [{
    jurusan : 'Informatika',
    penjelasan : 'abc'
  },
  {
    jurusan : 'Ilmu Komunikasi',
    penjelasan : 'abc'
  }];

  public getData() {
    return this.Arr;
  }

  public setData(data) {
    this.Arr = data;
  }
  
  constructor() { }

}