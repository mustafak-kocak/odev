import { Component, OnInit } from '@angular/core';
import { UserService } from './home/user.service';
import { Router } from '@angular/router';
import { User } from './home/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response: { data: User[] }) => {
        this.users = response.data;
      },
      error: (error: any) => {
        console.error('Error fetching users:', error);
        alert('Kullanıcıları yüklerken bir hata oluştu.');
      },
    });
  }

  onUserSelect(user: User): void {
    this.router.navigate(['/user-details', user.id]);
  }
}
