import { Component, OnInit } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string | undefined;
  password:string | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logIn()
  {
    if(this.username == "admin@gmail.com" && this.password=="Admin@123")
    {
     // this.router.navigate(['/home']);
      //alert("welcome");
      
      alert("welcome");
      this.router.navigate(['/admin']);

       
    }else{
      
      alert("please enter valid Credentials");
    }
  }

}

// <div class="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>