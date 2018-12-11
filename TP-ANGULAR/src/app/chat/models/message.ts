export class Message {
public texte: string;
public auteur: string;
public date: Date;

constructor(data?: any) {
  if (data) {
      this.texte = data.body;
      this.auteur = data.title;
      this.date = new Date();
    }
  }
}
