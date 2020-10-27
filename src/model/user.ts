export class User{
    userId:number;
    name:string;
    description:string;
    startDate;
    endDate;
    status:string;

    constructor(userId:number, name:string, description:string, startDate, endDate, status:string){
        this.userId=userId;
        this.name=name;
        this.description=description;
        this.startDate=startDate;
        this.endDate=endDate;
        this.status=status;
    }

    getUserId():number{
        return this.userId;
    }
    getName():string{
        return this.name;
    }
    getDescription():string{
        return this.description;
    }
    getStartDate(){
        return this.startDate;
    }
    getEndDate(){
        return this.endDate;
    }
    getStatus():string{
        return this.status;
    }
}