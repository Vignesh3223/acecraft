import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes, Schools, Honda, Uniforms } from 'src/models/acecraft';


@Injectable({
  providedIn: 'root'
})
export class AceServiceService {

  constructor(private http: HttpClient) { }

  noteurl: string = "https://ace-6rru.onrender.com/notes";
  schoolurl: string = "https://ace-6rru.onrender.com/schools";
  hondaurl: string = "https://ace-6rru.onrender.com/honda";
  uniformurl: string = "https://ace-6rru.onrender.com/uniform";


  getNotes() {
    return this.http.get<Notes[]>(this.noteurl);
  }

  getNotesbyId(id: number) {
    return this.http.get<Notes[]>(this.noteurl + '?id=' + id);
  }

  getSchool() {
    return this.http.get<Schools[]>(this.schoolurl);
  }

  getHonda() {
    return this.http.get<Honda[]>(this.hondaurl);
  }

  getHondabyId(id: number) {
    return this.http.get<Honda[]>(this.hondaurl + '?id=' + id);
  }

  getUniform() {
    return this.http.get<Uniforms[]>(this.uniformurl);
  }

  getUniformbyId(id: number) {
    return this.http.get<Uniforms[]>(this.uniformurl + '?id=' + id);
  }

}
