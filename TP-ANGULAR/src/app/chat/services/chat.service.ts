import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: Array<Message>


  constructor(private http: HttpClient) {
    this.messages = new Array<Message>()
  }

  public buildMessages(resultats: Array<any>): Array<Message> {
    const messages = [];
    if (resultats != null) {
      for (const result of resultats) {
          const message = new Message(result);
          messages.push(message);
      }
    }
    return messages;
  }

  public getMessages(): Observable<Array<Message>> {
    return new Observable<Array<Message>>((observer) => {

      /* change here if you want to retrieve data from the clssic API or from the node server */

      //this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts')
      this.http.get<Array<any>>('http://localhost:8080/posts')
        .subscribe(
          (messages) => {
            console.log("i got a msg");
            this.messages = this.buildMessages(messages);
            observer.next(this.messages);
          },
          (error) => {
            console.error("we got an error")
            observer.error(error)
          },
          () => observer.complete()
      );
    });
  }

  public addMessage(message: Message):Observable<Array<Message>>{
    this.messages.push(message);
    return of(this.messages); // angular 6
  // sinon : return Observable.of()
  }


}
