import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService} from '../global.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  data_arr : any;
  data_temp : any;
  data_set : any;
  data_jur = '';
  data_penj = '';
  check = '';

  constructor(private route: ActivatedRoute, public data : GlobalService) {
    this.data_arr = data.getData();
    this.data_temp = this.data_arr;
  }

  ngOnInit() {
  }

  addData() {
    this.data_set = {
      jurusan: this.data_jur,
      penjelasan: this.data_penj
    }
    this.data_temp.push(this.data_set);
    this.data.setData(this.data_temp);
    this.check = 'Sukses add data';
  }

}
