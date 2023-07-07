import { Component, OnInit } from '@angular/core';
//ActivatedRoute, Router
import { ActivatedRoute, Router } from '@angular/router';
//Form attributes
import { FormGroup, FormControl, Validators } from '@angular/forms';
//AceService from service
import { AceServiceService } from 'src/services/ace-service.service';
//Sweetalert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.component.html',
  styleUrls: ['./viewnote.component.css']
})
export class ViewnoteComponent implements OnInit {

  //variable to fetch data based on id
  noteId: number | any;

  //variable to store the json data
  notesdata: any;

  submitted = false;

  //assigning form to FormGroup
  comment: FormGroup | any;

  //assigning form fields to FormControl 
  name: FormControl | any;
  email: FormControl | any;
  message: FormControl | any;

  constructor(
    private aceService: AceServiceService,
    private router: Router,
    private actRoute: ActivatedRoute,) { }

  ngOnInit() {
    //Form Validation
    this.name = new FormControl('', [
      Validators.required,
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.message = new FormControl('', [
      Validators.required
    ])
    this.comment = new FormGroup({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    this.noteId = this.actRoute.snapshot.params['id'];

    //function to fetch notes from json
    this.aceService.getNotesbyId(this.noteId).subscribe((response) => {
      console.log(response);
      this.notesdata = response;
      console.log(this.notesdata);
    });
  }

  //Form submit function
  onSubmit(form: any) {
    this.submitted = true;
    //Valid Form
    if (form.valid) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
      });
      Toast.fire({
        title: 'Thanks for your comment',
        background: '#E6F9ED',
        color: '#006730'
      });
      form.reset();
    }
    //Invalid Form
    else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
      });
      Toast.fire({
        title: 'Please fill in all the fields',
        background: '#FCEBE9',
        color: '#751A0C'
      });
    }
  }
}
