import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from '@angular/router'
import { TOASTR_TOKEN, Toastr } from "../common/toastr.service";

@Component({
    templateUrl: './profile.component.html',
    styles: [`
      em { float: right; padding-left: 10px; color: red; }
      .error input { background-color: #E3C3C5; }
      .error ::-webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-input-placeholder { color: #999; }
      .error ::-ms-input-placeholder { color: #999; }
    `]
  
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor (private authService:AuthService, private router:Router,
    @Inject (TOASTR_TOKEN) private toastr: Toastr ){

  }
  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  saveProfile(formValues){
    if(this.profileForm.valid){    
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      .subscribe(()=>{
        this.toastr.success('Profile saved');
      });     
    }
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/user/login']);
    })
  }

  cancel(){
    this.router.navigate(['events'])
  }
}