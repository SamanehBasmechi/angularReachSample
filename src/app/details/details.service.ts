import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient:HttpClient) { }

  getDetail(id){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
