import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule} from '@angular/router';
import { GlobalService } from './global.service';

const ROUTES: Routes = [
  {path: 'input', component: InputComponent},
  {path: 'edit', component: EditComponent},
  {path: 'list', component: ListComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, InputComponent, EditComponent, ListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalService],
})
export class AppModule { }
