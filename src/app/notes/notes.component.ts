import { Component, Input, OnInit } from '@angular/core';
//AceService from service
import { AceServiceService } from 'src/services/ace-service.service';
//router
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes: any;
  constructor(private aceService: AceServiceService, private router: Router) { }

  //variable to store values from the json
  notesList: any[] = [];

  ngOnInit(): void {
    //function to fetch notes data from json
    this.aceService.getNotes().subscribe(
      (response) => this.notesList = response);
  }

  //variable to store the note id
  noteId!: number;

  //function to view the note based on id
  viewNote(id: number) {
    this.noteId = id;
    this.router.navigate(['viewNote/' + id]);
  }
}
