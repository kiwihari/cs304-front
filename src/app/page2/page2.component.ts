import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  users:any;
  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe(data=>{
      this.users=data;
    })
  }

  ngOnInit() {
  }

}
