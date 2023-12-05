import { Component,OnInit } from '@angular/core';
import { AuthsService } from '../auths.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userPro: any;
  constructor(private theAuthService:AuthsService){}

ngOnInit(){
this.userPro= this.theAuthService.getUserProfile()
}

logOut(){
  this.theAuthService.logOut()
}
}
