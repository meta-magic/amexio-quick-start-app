import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.scss']
})
export class DepartmentInfoComponent implements OnInit {

  localData: any;
  deptForm: FormGroup;
  constructor(private fb: FormBuilder) { 

    this.localData = {
      "response": {
        "success": true,
          "message": "Fetching  Data  Request Succeeded: Profile",
          "data": [
          {
            "name_official": "CXO",
          },
          {
            "name_official": "Admin",
          },
          {
            "name_official": "HR",
          },
          {
            "name_official": "IT",
          }
        ]
      }
    };  
    this.deptForm = this.fb.group({
      deptName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      mgrName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      });
  }

  ngOnInit() {
  }



}
