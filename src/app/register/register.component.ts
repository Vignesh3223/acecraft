import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup | any;

  userurl = environment.userapi;

  firstname: FormControl | any;
  lastname: FormControl | any;
  useremail: FormControl | any;
  password: FormControl | any;
  confirmpassword: FormControl | any;
  profession: FormControl | any;
  dealername: FormControl | any;
  dealercode: FormControl | any;
  city: FormControl | any;
  state: FormControl | any;
  gstnumber: FormControl | any;

  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: [
        '',
        Validators.required,
        Validators.pattern('[A-Za-z]*'),
      ],
      lastname: [
        '',
        Validators.required,
        Validators.pattern('[A-Za-z]*'),
      ],
      useremail: [
        '',
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      password: [
        '',
        Validators.required,
        Validators.pattern('[A-Za-z0-9]*'),
        Validators.minLength(6),
        Validators.maxLength(14),
      ],
      confirmpassword: ['', Validators.required],
      profession: ['', Validators.required],
      dealername: [
        '',
        Validators.required,
        Validators.pattern('[A-Za-z]*'),
      ],
      dealercode: [
        '',
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(6),
      ],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.http
      .post<any>(this.userurl, this.registerForm.value)
      .subscribe((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          title: 'Sign Up Successful',
        });
        this.registerForm.reset();
        this.router.navigate(['/login']);
      });
  }

}
