import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = history.state.user;
    if (!this.user) {
      this.router.navigate(['/user-list']); 
    }
  }
}