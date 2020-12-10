import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeClassService {


  public gradeSave="http://localhost:8080/Student/grade"
  public classSave="http://localhost:8080/Student/class"
  public getAllClass = "http://localhost:8080/Student/getAllClass"
  public getAllGrades = "http://localhost:8080/Student/getAllGrade"
  public deleteClass =  "http://localhost:8080/Student/class/"
  public deleteGrades = "http://localhost:8080/Student/grade/"

  constructor(private httpClient:HttpClient) { }

  saveGrade(data:any): Observable<any>{
    console.log("1",data);
    
    return this.httpClient.post<any>(this.gradeSave, data)

  }

  saveClass(data:any): Observable<any>{
    console.log("2",data);
    return this.httpClient.post<any>(this.classSave, data)

  }

  getGrade():Observable<any>{
    return this.httpClient.get<any>(this.getAllGrades)

  }

  getClasses():Observable<any>{
    return this.httpClient.get<any>(this.getAllClass)
  }

  deleteGrade(id:any):Observable<any>{
    return this.httpClient.delete<any>(this.deleteGrades + id);
  }

  deleteClases(id:any):Observable<any>{
    console.log(id);
    
    return this.httpClient.delete<any>(this.deleteClass + id);
  }
}
