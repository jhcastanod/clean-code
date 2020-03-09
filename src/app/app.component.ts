import { Component, Inject, OnInit } from '@angular/core';
import { IStorage } from 'providers/storage/interfaces/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clean-code';

  constructor(@Inject('STORAGE') private readonly storage: IStorage) { }

  ngOnInit() {
    this.storage.set('key', 'Jorge Castaño');

    console.log(this.storage.get('key'));
  }
}
