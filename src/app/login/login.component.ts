import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { UserService } from 'src/services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 

  userapi = environment.userapi;

  LoginForm!: FormGroup|any;
  email: FormControl | any;
  password: FormControl | any;

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

  ngOnInit() {
    this.userService.validateAuth(false);
    this.LoginForm = this.formbuilder.group({
      email: ['',
        [Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(form: any) {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }
    this.http.get<any>(this.userapi).subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.email === this.LoginForm.value.email &&
          a.password === this.LoginForm.value.password
        );
      });
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
        });
        this.LoginForm.reset();
        this.router.navigate(['']);
        this.userService.validateAuth(true);
      }
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
        });
        this.userService.validateAuth(false);
      }
    });
  }
}
