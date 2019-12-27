import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.scss']
})
export class ActivityPanelComponent implements OnInit {
  localData: any;

  constructor() { 

    this.localData = {
      "response": {
        "success": true,
          "message": "Fetching  Data  Request Succeeded: Profile",
          "data": [
          {
            "name": "Buck Kulkarni",
            "name_official": "John Doe",
            "profile": "buck.jpg",
            "email" : "XYZ@metamagic.in"
          },
          {
            "name": "Araf Karsh Hamid",
            "name_official": "Jack Doe",
            "profile": "karsh.jpg",
            "email" : "XYZ@metamagic.in"
          },
          {
            "name": "ketan Gote",
            "name_official": "Jenny Doe",
            "profile": "ketan.jpg",
            "email" : "XYZ@metamagic.in"
          },
          {
            "name": "vrushabh Kelwalkar",
            "name_official": "Kenny Doe",
            "profile": "sagar.jpg",
            "email" : "XYZ@metamagic.in"
          },
          {
            "name": "Dattaram Gawas",
            "name_official": "Bunny Gawas",
            "profile": "dats.jpg",
            "email" : "XYZ@metamagic.in"
          },
          {
            "name": "Sagar Jadhav",
            "name_official": "Jill Doe",
            "profile": "sagar.jpg",
            "email" : "XYZ@metamagic.in"
          }
        ]
      }
    };  
  }

  ngOnInit() {
  }



}
