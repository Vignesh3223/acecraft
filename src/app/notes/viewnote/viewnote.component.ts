import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AceServiceService } from 'src/services/ace-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.component.html',
  styleUrls: ['./viewnote.component.css']
})
export class ViewnoteComponent implements OnInit {

  noteId: number | any;
  notesdata: any;

  submitted = false;

  comment: FormGroup | any;
  name: FormControl | any;
  email: FormControl | any;
  message: FormControl | any;

  constructor(
    private aceService: AceServiceService,
    private router: Router,
    private actRoute: ActivatedRoute,) { }

  ngOnInit() {
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

    this.aceService.getNotesbyId(this.noteId).subscribe((response) => {
      console.log(response);
      this.notesdata = response;
      console.log(this.notesdata);
    });
  }

  onSubmit(form: any) {
    this.submitted = true;
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
