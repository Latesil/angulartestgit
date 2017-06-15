import { Component } from '@angular/core';
import {GitService} from './git.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitService],
})
export class AppComponent {
  title = 'app';
}
