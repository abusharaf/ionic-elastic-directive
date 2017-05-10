import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
alert("constructor");
  }

  goToAnimation(){
    this.navCtrl.push('real-animation');
  }

}
