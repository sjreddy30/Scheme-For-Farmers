import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  fr()
  {
    this.router.navigate(["farmer-reg"]);
  }
  br()
  {
    this.router.navigate(["bidder-reg"]);
  }
}
