import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdaProvider } from '../../providers/ada/ada';

/**
 * Generated class for the AdaRedemptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ada-redemption',
  templateUrl: 'ada-redemption.html',
})
export class AdaRedemptionPage {

  public tabs: any ;
  Stab: string = "Regular";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ada: AdaProvider
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdaRedemptionPage');
  }

}
