import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { AceServiceService } from 'src/services/ace-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.component.html',
  styleUrls: ['./viewnote.component.css']
})
export class ViewnoteComponent implements OnInit{

  noteId: number |any;
  notesdata: any;

  submitted = false;

  comment:FormGroup|any;
  name:FormControl|any;
  email:FormControl|any;
  message:FormControl|any;

  constructor(
    private aceService: AceServiceService,
    private router: Router,
    private actRoute: ActivatedRoute,)
    {}

    ngOnInit() {
      this.noteId = this.actRoute.snapshot.params['id'];
  
      this.aceService.getNotesbyId(this.noteId).subscribe((response) => {
        console.log(response);
        this.notesdata = response;
        console.log(this.notesdata);
      });
    }

    onSubmit(form:any){
      this.submitted = true;
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
}
