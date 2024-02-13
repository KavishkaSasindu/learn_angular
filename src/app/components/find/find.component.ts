import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {
  searchId: any ='';

  list:Array<any>=[];

  constructor(private http:HttpClient){

  }

  loadData(): void {
      this.http.get<any>(`https://jsonplaceholder.typicode.com/posts?id=${this.searchId}`)
      .subscribe((response: any)=>{
        console.log(response);
        this.list=response;
        console.log(this.list);
      });
      
  }
}
