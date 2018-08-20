import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss']
})

export class GooglemapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let map;
    let marker;
    const DALLAS = {lat: 32.7767, lng: -96.7970};

        map = new google.maps.Map(document.getElementById('map'), {
            center: DALLAS,
            zoom: 7
        });

        marker = new google.maps.Marker({
            position: DALLAS,
            map: map,
            title: 'Google Map'
        });
  }
}

