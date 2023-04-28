import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: any;

  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.links = [
      {name: 'Главная', link: ''},
      {name: 'Классы', link: 'grades'}
    ]
  }

  logout() {
    this.authService.logout()
  }

  goToLink(link: any) {
    this.router.navigate([link.link])
  }

  getRole() {
    if (localStorage.getItem('role') === "Teacher") {
      return "Учитель"
    } else {
      return "Ученик"
    }
  }

  goToHome() {
    this.router.navigate([''])
  }

  goToPrice() {
    this.router.navigate(['price/'])
  }

  goToAbout() {
    this.router.navigate(['about/'])
  }

  login() {
    this.router.navigate(['auth/login'])
  }
}
