import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes, Schools } from 'src/models/acecraft';


@Injectable({
  providedIn: 'root'
})
export class AceServiceService {

  constructor(private http: HttpClient) { }

  noteurl: string = "http://localhost:3000/notes";
  schoolurl: string = "http://localhost:3000/schools"
  

  getNotes() {
    return this.http.get<Notes[]>(this.noteurl);
  }

  getSchool() {
    return this.http.get<Schools[]>(this.schoolurl);
  }
 
}
