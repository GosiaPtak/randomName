import { Component, OnInit } from '@angular/core';
import { RandomNameAPIService } from './random-name-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'randomName';
  public randomName: Object;

  constructor(private data: RandomNameAPIService) {}

  ngOnInit() {
    this.data.getRandomName().subscribe(data => (this.randomName = data));
  }
}
