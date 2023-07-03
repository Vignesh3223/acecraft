import { Component, Input, OnInit } from '@angular/core';
import { AceServiceService } from 'src/services/ace-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes: any;
  constructor(private aceService: AceServiceService, private router: Router) { }

  notesList: any[] = [];

  ngOnInit(): void {

    this.aceService.getNotes().subscribe(
      (response) => this.notesList = response);
  }

  noteId!: number;

  viewNote(id: number) {
    this.noteId = id;
    this.router.navigate(['viewNote/' + id]);
  }
}
