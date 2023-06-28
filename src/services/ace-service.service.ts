import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes, Schools, Honda, Uniforms } from 'src/models/acecraft';


@Injectable({
  providedIn: 'root'
})
export class AceServiceService {

  constructor(private http: HttpClient) { }

  noteurl: string = "http://localhost:3000/notes";
  schoolurl: string = "http://localhost:3000/schools";
  hondaurl: string = "http://localhost:3000/honda";
  uniformurl: string = "http://localhost:3000/uniform"


  getNotes() {
    return this.http.get<Notes[]>(this.noteurl);
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
