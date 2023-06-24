import { Component, OnInit } from '@angular/core';
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private aceService: AceServiceService) { }

  notesList: any[] = [];

  ngOnInit(): void {
    this.aceService.getNotes().subscribe(
      (response) =>  this.notesList = response);
  }
}
