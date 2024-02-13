import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  list:Array<any>=[];

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
      this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
      .subscribe((response: any)=>{
        console.log(response);
        this.list=response;
        console.log(this.list);
      });
      
  }
}
