import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from 'src/models/acecraft';


@Injectable({
  providedIn: 'root'
})
export class AceServiceService {

  constructor(private http: HttpClient) { }

  noteurl: string = "http://localhost:3000/notes";
  

  getNotes() {
    return this.http.get<Notes[]>(this.noteurl);
  }
 
}
