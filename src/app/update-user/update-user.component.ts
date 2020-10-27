import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';
import { UserService } from '../service/userservice';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private service:UserService) { }

  user:User;

  updateUser(form:any){
    let data=form.value;
    let userId=data.userId;
    let name=data.name;
    let description=data.description;
    let startDateStr=data.startDate;
    let startDate =new Date(startDateStr);
    let startDateMillis=startDate.getTime();
    let endDateStr=data.endDate;
    let endDate=new Date(endDateStr);
    let endDateMillis=endDate.getTime();
    let status=data.status;
    this.user=new User(userId,name,description,startDateMillis,endDateMillis,status);
    let observable:Observable<User>=this.service.updateUser(this.user);
    observable.subscribe(userArg=>{this.user=userArg;});
  }

  ngOnInit(): void {
  }

  getDate(millis:number){
    let date=new Date(millis);
    return date;
  }

}
