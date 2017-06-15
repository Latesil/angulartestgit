import { Component, OnInit } from '@angular/core';
import {GitService} from '../git.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user: any;
	repos:any[];
	username:string;
	
  constructor(private _gitService: GitService) {
	  this.user = false;
	}
	searchUser() {
		this._gitService.updateUser(this.username);
		
		this._gitService.getUser().subscribe(user => {
			this.user = user;
		});
		
		this._gitService.getRepos().subscribe(repos => {
			this.repos = repos;
		});
	}

  ngOnInit() {
  }

}
