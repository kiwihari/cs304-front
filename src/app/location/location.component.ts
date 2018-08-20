import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface Location{

    location_id:String,
    name:String,
    address:any,
    Contact_no:number
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  location : Location = {
    location_id:'',
    name:'',
    address:{},
    Contact_no:0
  };
  constructor(private dataService: DataService) { }

  register(){
    this.dataService.register(this.location).subscribe(data=>{
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
