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

  userurl = environment.userapi;

  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    useremail: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    profession: new FormControl(''),
    dealername: new FormControl(''),
    dealercode: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    gstnumber: new FormControl(''),
  });

  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['',
        [Validators.required,
        Validators.pattern('[A-Za-z ]*'),
        ]],
      lastname: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z ]*'),
      ]],
      useremail: ['',
        [Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]],
      password: ['',
        [Validators.required,
        Validators.pattern('[A-Za-z0-9]*'),
        Validators.minLength(6),
        Validators.maxLength(14)
        ]],
      confirmpassword: ['', [Validators.required]],
      profession: ['', Validators.required],
      dealername: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z ]*')
      ]],
      dealercode: ['', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(6)
      ]],
      city: [''],
      state: [''],
      gstnumber: [''],
    });
    console.log(this.registerForm.value)
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.http.post<any>(this.userurl, this.registerForm.value)
      .subscribe((res) => {
        console.log(res);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          title: 'Signed Up Successfully',
          background: '#E6F9ED',
          color: '#006730'
        });
        this.registerForm.reset();
        this.router.navigate(['/login']);
      });
  }

}
