import { Component, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

showThis = 'recipe'

onShowFeature(feature: string){
  this.showThis = feature;
}

//will initalize firebase upon load
ngOnInit(){
 firebase.initializeApp({
    apiKey: "AIzaSyDjdKIVvYFVtKuDJbfJzs_moPfby0VmFfg",
    authDomain: "ng-recipe-book-a78ad.firebaseapp.com"
 });
}

}
