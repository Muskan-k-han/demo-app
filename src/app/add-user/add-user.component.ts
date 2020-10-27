import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';
import { UserService } from '../service/userservice';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  user:User;

  addUser(form:any){
    let data=form.value;
    let name=data.name;
    let description=data.description;
    let startDateStr=data.startDate;
    let startDate=new Date(startDateStr);
    let startDateMillis=startDate.getTime();
    let endDateStr=data.endDate;
    let endDate=new Date(endDateStr);
    let endDateMillis=endDate.getTime();
    let status=data.status;
    this.user=new User(-1,name,description,startDateMillis,endDateMillis,status);
    let successFun = (userArg: User) => {
      this.user = userArg;
    };

    let errFun = err => {
      console.log("err in addusercomponent " + err.message);
    }

    let observable: Observable<User> = this.service.addUser(this.user);
    observable.subscribe(successFun, errFun);
  }
  
  getDate (arrivalMillis:number ){
    let date = new Date(arrivalMillis);
    return date;
  }

}
