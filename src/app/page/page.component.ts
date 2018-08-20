import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

interface User{
  name:string,
  phone: number,
  email: string,
  address:any
}
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
  user: User = {
    name:'',
    phone:0,
    email:'',
    address:{}
  };
  constructor(private dataService: DataService) { 

  }
  register(){
    this.dataService.register(this.user).subscribe(data=>{
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
