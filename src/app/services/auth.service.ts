import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BASE_URL } from '../../utils/configs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  constructor(private http: HttpClient) { }

  private apiUrl = BASE_URL + 'api/user';

  public isLogged() {
    this.isLoggedIn = true;
  }
  public isAuthenticated() {
    if (localStorage.getItem('token')) {

      return true
    }
    else {
      return false
    }
  }

  // user = {
  //   name :'',
  //   email : '',
  //   password : '',
  //   phone:'',
  //   address : '',
  //   verification_Code : 0
  // }

  // pendingRegister(email): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/Pending-register/create`, email)
  // }

  // register(user): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/Register/create`, user)
  // }

  // login(email,password): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/login`)
  // }

  // newPass(modal: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/newPass`, modal)
  // }

  // verificationCode(code:any):Observable<any>{
  //   return this.http.post<any>(`${this.apiUrl}/Register/create`,code)
  // }

  // verifactionCode(code: string) {
  //   return code === '0000'
  // }

  // resetPass(email: string): Promise<boolean> {
  //   return this.http.post<boolean>(`${this.apiUrl}/resetPass`, { email })
  //     .toPromise()
  //     .then(response => {
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log('Error requesting verification code', error);
  //       return false
  //     })
  // }

  // validateResetCode(code:string):Promise<boolean>{
  //   return this.http.post<boolean>(`${this.apiUrl}/resetPass`,{code})
  //   .toPromise()
  //   .then(response=>{
  //     return response;
  //   })
  //   .catch(error=>{
  //     console.log('Error Validating verification code',error);
  //     return false
  //   })
  // }

  // validateResetCode(code: string) {
  //   return code === '0000'
  // }
}
