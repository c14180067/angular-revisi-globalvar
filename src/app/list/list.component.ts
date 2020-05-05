import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService} from '../global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    data_arr : any;

  constructor(private route : ActivatedRoute, public data : GlobalService) { 
    this.data_arr = data.getData();
  }

  ngOnInit() {
    
  }

}