import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';
import { UserService } from '../service/userservice';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent {

  user:User;

  constructor(private route:ActivatedRoute, private service:UserService) { 
    let observable=route.paramMap;
    observable.subscribe((params:ParamMap)=>{
      let codeVal:string=params.get("userId");
      let idNum:number=Number(codeVal);
        console.log("id available is "+idNum);
        this.getUserById(idNum);
  })
  }

  getUserById(userId:Number){
    let observable:Observable<User>=this.service.getUser(userId);
  observable.subscribe( userArg=>{this.user=userArg});
  }

  findUser(form:any){
    let data=form.value;
    let userId=data.userId;
    this.getUserById(userId);
  }

  getDate(millis:number){
    let date=new Date(millis);
    return date;
  }

}
