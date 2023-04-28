import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getUser()
  }

  goToGrades() {
    this.router.navigate(['grades'])
  }
}
