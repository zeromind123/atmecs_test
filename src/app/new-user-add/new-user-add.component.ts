import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-user-add',
  templateUrl: './new-user-add.component.html',
  styleUrls: ['./new-user-add.component.scss']
})
export class NewUserAddComponent implements OnInit {
  private baseURL: string = "https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users";
  public formGroup;
  private userToken: any = "key3GnfHvdYoWedr5";
  private snackbarMsg = "New User data saved!";
  private snackbarAction = "Close";

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar) {
    this.formGroup = this.formBuilder.group({
      firstname: '',
      lastname: '',
      gender: '',
      dob: ''
    });
  }

  ngOnInit(): void {
  }

  makePostRequest(postObj): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.userToken });
    return this.http.post(this.baseURL, postObj, { headers });
  }

  onSubmit(formData) {
    var firstname = formData['firstname'];
    var lastname = formData['lastname'];

    if (firstname && lastname) {
      var gender = formData['gender'];
      var dob = formData['dob'];
      let finalDob: any;
      var datePipe = new DatePipe('en-US');

      if (dob) {
        finalDob = datePipe.transform(dob, 'yyyy-MM-dd');
      } else {
        finalDob = datePipe.transform(new Date(), 'yyyy-MM-dd');
      }

      let postObj = {
        fields: {
          "First Name": firstname,
          "Last Name": lastname,
          "Date of Birth": finalDob,
          "Status": "Active",
          "Gender": gender ? gender : 'Male'
        }
      }

      this.makePostRequest(postObj)
        .subscribe(
          (response) => {
            this._snackBar.open(this.snackbarMsg, this.snackbarAction);
          },
          (error) => {
            this._snackBar.open(error, this.snackbarAction);
          })
    }
  }

}
