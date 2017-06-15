import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {
	private username:string;
	private client_id = 'ce430cf5b12bade9c8c8';
	private client_secret = '8668f9b1ab988d8dfc7368f6b1b00e93f1e95381';
	
	constructor(private _http: Http) {
		console.log('Github Service Ready');
		this.username = 'latesil';
	}
	
	getUser() {
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}
}
