import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService} from '../global.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data_arr : any;
  data_temp : any;
  data_jur = '';
  data_penj = '';
  check = '';

  constructor(private route : 
  ActivatedRoute, public data : GlobalService) {
    this.data_arr = data.getData();
  }

  ngOnInit() {
  }
  
  edit() {
    for(var i = 0;i< this.data_arr.length;i++) {
      if(this.data_arr[i].jurusan == this.data_jur) {
        this.data_arr[i].penjelasan = this.data_penj;
        this.check = 'Berhasil edit data';
      }
    }
  }

}