import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate() {
    let Role = localStorage.getItem("userType")
    if (Role == "manager") {
      return true
    }
    else if (this.auth.isAuthenticated()) {
      this.router.navigate(['/home'])
      alert("You don't have permissions")
      return false
    }
    else {
      alert("You don't have permissions")
      this.router.navigate(['/login'])
      return false
    }
  }
}
