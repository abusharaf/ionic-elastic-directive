import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Realanimation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'real-animation'
})
@Component({
  selector: 'page-realanimation',
  templateUrl: 'realanimation.html',
})
export class Realanimation {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    alert("constructor for lazy loading");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Realanimation');
  }

}
