import { Injectable } from '@angular/core';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User[] = [
    {
      id: "1110002030",
      name:"Norah",
      DOB:"31/08/1985",
      city:"Jeddah",
      idCard:"https://sa2eh.awicdn.com/site-images/sites/default/files/sa2eh-prod/article/4/5/333208/31ec26c4d8873a6173254a4dab2ab61fe4e8bceb-031119104729.jpg?preset=v3.0_1200xDYN&save-png=1&rnd=1519151RND220215&watermark_client=layalina&croptop=1"
    }
  ]

  getUsers(){
    return [...this.user]
  }
  constructor() { }
}
