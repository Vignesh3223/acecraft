import { Component, OnInit } from '@angular/core';
//HTTPClient
import { HttpClient } from '@angular/common/http';
//router
import { Router } from '@angular/router';
//environment for user identification
import { environment } from 'src/environment/environment';
//UserService from service
import { UserService } from 'src/services/user.service';
//Form attributes
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//Sweetalert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //assigning form to FormGroup
  public LoginForm!: FormGroup | any;

  //variable to fetch userdata from json
  userurl = environment.userapi;

  //function to return to form if the form is not submitted
  submitted = false;
  get f() {
    return this.LoginForm.controls;
  }

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) { }

  //assigning form fields to FormControl
  useremail: FormControl | any;
  password: FormControl | any;

  ngOnInit() {
    this.userService.validateAuth(false);
    //Form Validation
    this.LoginForm = this.formbuilder.group({
      useremail: ['',
        [Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
    });
  }

  //form submit function
  onSubmit() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }
    //method to fetch userdata from json and check the validity
    this.http.get<any>(this.userurl).subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.useremail === this.LoginForm.value.useremail &&
          a.password === this.LoginForm.value.password
        );
      });

      //valid user
      if (user) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        Toast.fire({
          title: 'Login Successful',
          background: '#E6F9ED',
          color: '#006730'
        });
        this.router.navigate(['']);
        this.userService.validateAuth(true);
      }
      //invalid user
      else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        Toast.fire({
          title: 'User not found',
          background: '#FCEBE9',
          color: '#751A0C'
        });
        this.userService.validateAuth(false);
      }
    });
  }
}
