import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accnom="";
  pswd="";
  accountdetails:any= {
    1000: { name: "ram", acno: 1000, password: "testone", balance: 5000 },
    1001: { name: "raman", acno: 1001, password: "testtwo", balance: 5000 },
    1002: { name: "ramesh", acno: 1002, password: "testthree", balance: 5000 },
    1003: { name: "raj", acno: 1003, password: "testfour", balance: 5000 },
    1004: { name: "ramu", acno: 1004, password: "testfive", balance: 5000 }
}

  constructor() { }

  ngOnInit(): void {
  }
  accnochange(event:any){
    this.accnom=event.target.value;
     console.log(this.accnom);
    
  }
 pwdchange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
    
  }

  login(){
  
    

   
      let accno = this.accnom
      let pwd = this.pswd
      let accountdetailss = this.accountdetails

      if (accno in accountdetailss) {

          if (pwd == accountdetailss[accno]["password"]) {
              alert("login success") //success
              
          }


          else {
              alert("incorrect password") //incorrect
          }
      }
      else {
          alert("invalid account number") //invalid account
      }
      // if (user == 1) {
      //     alert("success")
      //     window.location.href="accountt.html"
      // }
      // else if (user == -1) {
      //     alert("incorrect pwd")
      // }
      // else {
      //     alert("invalid")
      // }
  
  
  }
  

}
