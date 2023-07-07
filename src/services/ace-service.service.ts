import { Injectable } from '@angular/core';
//HTTPClient
import { HttpClient } from '@angular/common/http';
//interface from model
import { Notes, Schools, Honda, Uniforms } from 'src/models/acecraft';


@Injectable({
  providedIn: 'root'
})
export class AceServiceService {

  constructor(private http: HttpClient) { }

  //json data links of objects
  noteurl: string = "https://ace-6rru.onrender.com/notes";
  schoolurl: string = "https://ace-6rru.onrender.com/schools";
  hondaurl: string = "https://ace-6rru.onrender.com/honda";
  uniformurl: string = "https://ace-6rru.onrender.com/uniform";

  //function to fetch notes
  getNotes() {
    return this.http.get<Notes[]>(this.noteurl);
  }

  //function to fetch notes by id
  getNotesbyId(id: number) {
    return this.http.get<Notes[]>(this.noteurl + '?id=' + id);
  }

  //function to fetch school
  getSchool() {
    return this.http.get<Schools[]>(this.schoolurl);
  }

  //function to fetch honda products
  getHonda() {
    return this.http.get<Honda[]>(this.hondaurl);
  }

  //function to fetch honda products by id
  getHondabyId(id: number) {
    return this.http.get<Honda[]>(this.hondaurl + '?id=' + id);
  }

  //function to fetch Uniform products
  getUniform() {
    return this.http.get<Uniforms[]>(this.uniformurl);
  }

  //function to fetch Uniform products by id
  getUniformbyId(id: number) {
    return this.http.get<Uniforms[]>(this.uniformurl + '?id=' + id);
  }

}
