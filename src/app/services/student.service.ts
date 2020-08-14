import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public routesave = "http://localhost:8080/Student/products"
  public getallStudent = "http://localhost:8080/Student/student"
  public dataToUpdate = "http://localhost:8080/Student/employees/{id}"
  constructor(private httpClient: HttpClient) {
   }

   saveStudent(data:any): Observable<any>{
     return this.httpClient.post<any>(this.routesave , data)

   }

   updateStudent(updateData:any,id:number):Observable<any>{
   
     return this.httpClient.put<any>(this.dataToUpdate , updateData  )
 
    

  }

   getStudent(): Observable<any>{
    return this.httpClient.get<any>(this.getallStudent)

  }
}
