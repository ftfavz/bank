import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="your perfect banking partner"
  data1="enter your acount number"



  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"manu",acno:1001,password:"abc123",balance:0},
    1002:{username:"sinu",acno:1002,password:"abc123",balance:0},
    1003:{username:"fanu",acno:1003,password:"abc123",balance:0},
    1004:{username:"sanu",acno:1004,password:"abc123",balance:0},
    1005:{username:"munnu",acno:1005,password:"abc123",balance:0},
    1006:{username:"linu",acno:1006,password:"abc123",balance:0}







  }
  // methods

  // login(){
  //   var acnum=this.acno 
  //   var userDetails=this.userDetails
  //   var psw=this.pass
  //   if(acnum in userDetails){
  //     if(psw==userDetails[acnum]["password"]){
  //       alert('login success')
        
  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }else{
  //     alert("incorrect acnum")
  //   }
  //   // alert("login worked")
  // }
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   // console.log(this.acno);
    
  // }
  // passChange(event:any){
  //   this.pass=event.target.value
  //   // console.log(this.pass);
    
  // }

// }


login(acnum:any,psw:any){
  console.log(acnum.value,psw.value);
  
  var acnum=acnum.value
    var psw=psw.value
  var userDetails=this.userDetails

  if(acnum in userDetails){
    if(psw==userDetails[acnum]["password"]){
      alert('login success')
      
    }
    else{
      alert("incorrect password")
    }

  }else{
    alert("incorrect acnum")
  }
  // alert("login worked")
}
}

