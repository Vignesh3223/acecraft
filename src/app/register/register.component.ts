import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  demo = new RegForm();
  state: string[] = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
    'Chandigarh', 'Chattisgarh', 'Daman and Diu', 'Delhi', 'Dadra and Nager Haveli', 'Goa', 'Gujarat', 'Himachal Pradesh',
    'Haryana', 'Jharkhand', 'Jammu and Kashmir', 'Karnataka', 'Kerela', 'Lakshadweep', 'Maharashtra', 'Meghalaya',
    'Manipur', 'Madhya Pradesh', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Puducherry', 'Rajasthan', 'Sikkim',
    'Telangana', 'Tamil Nadu', 'Tripura', 'Uttar Pradesh', 'Uttarkhand', 'West Bengal'];

  userurl = environment.userapi;

  submitted = false;
  regform: any;
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void { }

  get f() {
    return this.regform.controls;
  }

  onSubmit(form: any) {
    this.submitted = true;
    if (this.regform.invalid) {
      return;
    }
    this.http
      .post<any>(this.userurl, this.regform.value).subscribe((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        Toast.fire({
          title: 'Sign Up Success',
        });
        this.regform.reset();
        this.router.navigate(['/login']);
      });
  }
}

export class RegForm {
  public firstname!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  public confirmpassword!: string;
  public profession!: any;
  public dealername!: string;
  public dealercode!: number;
  public city!: string;
  public state!: string;
  public gstnumber!: number;
}
