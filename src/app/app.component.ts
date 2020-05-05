import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService} from './global.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  
})
export class AppComponent  {
  name = 'Angular';
  data = ['Informatika', 'DKV', 'Ilmu Komunikasi'];
  penj = ['abc','abc','abc'];
  constructor(private router: Router) {}
  
  input() {
    this.router.navigate(['input']);
  }
  edit() {
    this.router.navigate(['edit']);
  }
  list() {
    this.router.navigate(['list']);
  }
}