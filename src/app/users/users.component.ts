import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

  private baseURL: string = "https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users";
  public userDetailsDataObj: any = [];
  public loading: boolean = true;
  private errorMessage: any;
  private userToken: any = "key3GnfHvdYoWedr5";

  constructor(private http: HttpClient) {
    this.getUserDetails();
  }

  makeGetRequest(): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + this.userToken);
    return this.http.get(this.baseURL, { headers });
  }

  getUserDetails() {
    this.makeGetRequest()
      .subscribe(
        (response) => {
          this.userDetailsDataObj = response.records;
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          this.loading = false;
        })
  }

}

