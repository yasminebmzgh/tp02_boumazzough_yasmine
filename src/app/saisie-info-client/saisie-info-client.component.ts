import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../Models/User';

@Component({
  selector: 'app-saisie-info-client',
  templateUrl: './saisie-info-client.component.html',
  styleUrls: ['./saisie-info-client.component.less']
})
export class SaisieInfoClientComponent implements OnInit {
  
  user : User = new User();
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
  	console.log("J'ai validé");
	console.log(this.user);
	
  }

}
