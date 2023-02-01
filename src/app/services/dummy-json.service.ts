import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DummyJsonService {
  userUrl = 'https://dummyjson.com/users';
  url = 'https://dummyjson.com/products';
  // addUserApi ='https://dummyjson.com/users/add'
  constructor(private http: HttpClient) {}
  product() {
    return this.http.get(this.url);
  }
  user() {
    return this.http.get(this.userUrl);
  }

  // saveUsers(data: any) {
  //   return this.http.post(this.addUserApi, data);
  // }
}
