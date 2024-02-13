import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  list:Array<any>=[];

  constructor(private http:HttpClient,private snackBar:MatSnackBar){}

  ngOnInit(): void {
    this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
    .subscribe((response: any)=>{
      console.log(response);
      this.list=response;
      console.log(this.list);
    });
    
}

  form=new FormGroup({
    id:new FormControl('',Validators.required), 
    userId:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
    body:new FormControl('',Validators.required)
  });
  
  delete(id:any){
      if(confirm('are you sure!'+id)){
        this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
        .subscribe((response: any)=>{
          if(response){
            this.snackBar.open('Deleted','close',{
                horizontalPosition:'end',
                verticalPosition:'bottom',
                duration:5000,
                direction:'ltr'
            })
           }
        });
      }
}
}

