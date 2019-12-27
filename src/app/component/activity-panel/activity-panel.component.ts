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
            "name_official": "John Doe",
          },
          {
            "name_official": "Jack Doe",
          },
          {
            "name_official": "Jenny Doe",
          },
          {
            "name_official": "Kenny Doe",
          },
          {
            "name_official": "Bunny Doe",
          },
          {    
            "name_official": "Jill Doe",
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
