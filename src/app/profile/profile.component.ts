import { Component, OnInit } from '@angular/core';
import {GitService} from '../git.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user: any[];
	
	
  constructor(private _gitService: GitService) { 
	this._gitService.getUser().subscribe(user => {
		this.user = user;
	});
}

  ngOnInit() {
  }

}
