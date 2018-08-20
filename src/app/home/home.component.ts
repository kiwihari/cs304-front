import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
    profile: any;
    sample: any;
    constructor(private dataService: DataService) {
      this.dataService.getProfile().subscribe(data => {
        console.log(data);
       this.profile = data;
      })

      this.dataService.getSample().subscribe(data => {
        console.log(data);
       this.sample = data;
      })
   }
  

  ngOnInit() {
  }

}
