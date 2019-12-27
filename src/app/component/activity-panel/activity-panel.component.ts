import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.scss']
})
export class ActivityPanelComponent implements OnInit {
  localData: any;
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { 

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
    this.employeeForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      Gender: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }



}
