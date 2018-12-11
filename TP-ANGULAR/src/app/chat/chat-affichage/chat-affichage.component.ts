import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Message } from '../models/message';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat-affichage',
  templateUrl: './chat-affichage.component.html',
  styleUrls: ['./chat-affichage.component.scss']
})

export class ChatAffichageComponent implements OnInit, OnChanges {

  @Input() messages: Array<Message>;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    $('#scroll-max').animate({scrollTop:$('#scroll-max').height()}, 'slow');
  }

  ngOnInit() {
    // this.messages = new Array<Message>();
  }

}
