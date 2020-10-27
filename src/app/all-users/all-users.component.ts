import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';
import { UserService } from '../service/userservice';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:User[];

  constructor(private service:UserService) {
    let observable:Observable<User[]>=service.getAllUsers();
    observable.subscribe( userArg=>{
      this.users=userArg;
    });
   }

  ngOnInit(): void {
  }

  deleteUser(userId:Number){
    let observable=this.service.deleteUser(userId);
    observable.subscribe(result=>{this.deleteId(userId);
    });
  }

  deleteId(userId:Number):void{
    for(let i=0;i<this.users.length;i++){
      let user=this.users[i];
      if(user.userId===userId){
        this.users.splice(i,1);
      }
    }
  }

  getDate(millis:number){
    let date=new Date(millis);
    return date;
  }

}
