// // // ---------------EX 15 Création d'un localStorage

// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component'
// import { HttpClient } from '@angular/common/http';
// import { fromEvent, interval } from 'rxjs';


// interface Message {
//   username : string;
//   content : string;
// }

// interface DadJoke {
//   id : string;
//   joke : string;
//   status : number;
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     SendMessageComponent
//   ],
//   template: `
//   @if (loggedIn) {
//     <send-message (send)="send($event)" />
//     <button (click)="getDadJoke()">Message</button>
//   } @else {
//     <input type="text" [(ngModel)]="username" />
//     <button (click)="login()">Connexion</button>
//   }

//   @for(item of messages; track $index) {
//       <div class="m-4 p-4 bg-slate-200 rounded" [ngClass]="item.username == username ? 'ml-14 bg-sky-200' : 'mr-14'">
//         <p class="font-bold">{{ item.username }}</p>
//         <p>{{ item.content }}</p>
//       </div>
//   }
//   `,
// })
// export class AppComponent {

//   loggedIn : boolean = false;

//   messages : Message[] = [];

//   username = "";

//   http = inject(HttpClient);

//   interval = interval(5000);

//   constructor() {
//     fromEvent(window , 'storage').subscribe((event) => {
//       let messages = localStorage.getItem('messages');

//       if(messages) {
//         let parsedMessages = JSON.parse(messages);
//         this.messages = parsedMessages
//       }
//     })
//   }



//   send(message : string) {
//     if(this.username) {
//       this.messages.push({
//         username : this.username,
//         content : message,
//       });
//       localStorage.setItem('messages', JSON.stringify(this.messages))
//     }
//   }

//   login() {
//     if (this.username) {
//       this.loggedIn = true;
//       // this.interval.subscribe(()=> {
//       //   this.getDadJoke();
//       // })
//     }
//   }

//   getDadJoke() {
//     this.http.get<DadJoke>('https://icanhazdadjoke.com/', {headers : {"Accept" : "application/json"}}).subscribe(e => {
//       let message : Message = {
//         username : "Dad",
//         content : e.joke
//       }
//       this.messages.push(message)
//   })
//   }
// }




// // // ---------------EX 16 Ajout des animations - Ajouter les imports dans app.config

// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component'
// import { HttpClient } from '@angular/common/http';
// import { fromEvent, interval } from 'rxjs';
// import { animate, style, transition, trigger } from '@angular/animations';


// interface Message {
//   username : string;
//   content : string;
// }

// interface DadJoke {
//   id : string;
//   joke : string;
//   status : number;
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     SendMessageComponent
//   ],
//   animations : [
//     trigger('fadeIn', [
//       transition(':enter', [
//         style({opacity : 0}),
//         animate('150ms', style({opacity : 1}))
//       ])
//     ])
//   ],
//   template: `
//   @if (loggedIn) {
//     <send-message (send)="send($event)" />
//     <button (click)="getDadJoke()">Message</button>
//   } @else {
//     <input type="text" [(ngModel)]="username" />
//     <button (click)="login()">Connexion</button>
//   }

//   @for(item of messages; track $index) {
//       <div @fadeIn class="m-4 p-4 bg-slate-200 rounded" [ngClass]="item.username == username ? 'ml-14 bg-sky-200' : 'mr-14'">
//         <p class="font-bold">{{ item.username }}</p>
//         <p>{{ item.content }}</p>
//       </div>
//   }
//   `,
// })
// export class AppComponent {

//   loggedIn : boolean = false;

//   messages : Message[] = [];

//   username = "";

//   http = inject(HttpClient);

//   interval = interval(5000);

//   constructor() {
//     fromEvent(window , 'storage').subscribe((event) => {
//       let messages = localStorage.getItem('messages');

//       if(messages) {
//         let parsedMessages = JSON.parse(messages);
//         this.messages = parsedMessages
//       }
//     })
//   }



//   send(message : string) {
//     if(this.username) {
//       this.messages.push({
//         username : this.username,
//         content : message,
//       });
//       localStorage.setItem('messages', JSON.stringify(this.messages))
//     }
//   }

//   login() {
//     if (this.username) {
//       this.loggedIn = true;
//       // this.interval.subscribe(()=> {
//       //   this.getDadJoke();
//       // })
//     }
//   }

//   getDadJoke() {
//     this.http.get<DadJoke>('https://icanhazdadjoke.com/', {headers : {"Accept" : "application/json"}}).subscribe(e => {
//       let message : Message = {
//         username : "Dad",
//         content : e.joke
//       }
//       this.messages.push(message)
//   })
//   }
// }



// // // ---------------EX 16 Création d'un pipe


// ///////Dans le terminal, génération du pipe ->  ng g pipe parse-link


// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component'
// import { HttpClient } from '@angular/common/http';
// import { fromEvent, interval } from 'rxjs';
// import { animate, style, transition, trigger } from '@angular/animations';
// import { ParseLinkPipe } from "./parse-link.pipe";


// interface Message {
//   username : string;
//   content : string;
// }

// interface DadJoke {
//   id : string;
//   joke : string;
//   status : number;
// }

// @Component({
//     selector: 'app-root',
//     standalone: true,
//     animations: [
//         trigger('fadeIn', [
//             transition(':enter', [
//                 style({ opacity: 0 }),
//                 animate('150ms', style({ opacity: 1 }))
//             ])
//         ])
//     ],
//     template: `
//   @if (loggedIn) {
//     <send-message (send)="send($event)" />
//     <button (click)="getDadJoke()">Message</button>
//   } @else {
//     <input type="text" [(ngModel)]="username" />
//     <button (click)="login()">Connexion</button>
//   }

//   @for(item of messages; track $index) {
//       <div @fadeIn class="m-4 p-4 bg-slate-200 rounded" [ngClass]="item.username == username ? 'ml-14 bg-sky-200' : 'mr-14'">
//         <p class="font-bold">{{ item.username }}</p>
//         <p [innerHTML]="item.content | parseLink"></p>
//       </div>
//   }
//   `,
//     imports: [
//         CommonModule,
//         FormsModule,
//         SendMessageComponent,
//         ParseLinkPipe
//     ]
// })
// export class AppComponent {

//   loggedIn : boolean = false;

//   messages : Message[] = [];

//   username = "";

//   http = inject(HttpClient);

//   interval = interval(5000);

//   constructor() {
//     fromEvent(window , 'storage').subscribe((event) => {
//       let messages = localStorage.getItem('messages');

//       if(messages) {
//         let parsedMessages = JSON.parse(messages);
//         this.messages = parsedMessages
//       }
//     })
//   }



//   send(message : string) {
//     if(this.username) {
//       this.messages.push({
//         username : this.username,
//         content : message,
//       });
//       localStorage.setItem('messages', JSON.stringify(this.messages))
//     }
//   }

//   login() {
//     if (this.username) {
//       this.loggedIn = true;
//       // this.interval.subscribe(()=> {
//       //   this.getDadJoke();
//       // })
//     }
//   }

//   getDadJoke() {
//     this.http.get<DadJoke>('https://icanhazdadjoke.com/', {headers : {"Accept" : "application/json"}}).subscribe(e => {
//       let message : Message = {
//         username : "Dad",
//         content : e.joke
//       }
//       this.messages.push(message)
//   })
//   }
// }




// // ---------------EX 17 Création d'un pipe date et d'un pipe qui utilise une locale (currency) -> voir app.config

// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component'
// import { HttpClient } from '@angular/common/http';
// import { fromEvent, interval } from 'rxjs';
// import { animate, style, transition, trigger } from '@angular/animations';
// import { ParseLinkPipe } from "./parse-link.pipe";


// interface Message {
//   username : string;
//   content : string;
//   datetime : Date;
// }

// interface DadJoke {
//   id : string;
//   joke : string;
//   status : number;
// }

// @Component({
//     selector: 'app-root',
//     standalone: true,
//     animations: [
//         trigger('fadeIn', [
//             transition(':enter', [
//                 style({ opacity: 0 }),
//                 animate('150ms', style({ opacity: 1 }))
//             ])
//         ])
//     ],
//     template: `
//   @if (loggedIn) {
//     <send-message (send)="send($event)" />
//     <!-- <button (click)="getDadJoke()">Message</button> -->
//   } @else {
//     <input type="text" [(ngModel)]="username" />
//     <button (click)="login()">Connexion</button>
//   }

//   @for(item of messages; track $index) {
//       <div @fadeIn class="m-4 p-4 bg-slate-200 rounded" [ngClass]="item.username == username ? 'ml-14 bg-sky-200' : 'mr-14'">
//         <p class="font-bold">{{ item.username }}</p>
//         <p class="italic">{{ item.datetime | date:"dd/MM/YYYY à HH:mm:ss"}}</p>
//         <p>{{ 23 | currency : "EUR" }}</p>
//         <p [innerHTML]="item.content | parseLink"></p>
//       </div>
//   }
//   `,
//     imports: [
//         CommonModule,
//         FormsModule,
//         SendMessageComponent,
//         ParseLinkPipe
//     ]
// })
// export class AppComponent {

//   loggedIn : boolean = false;

//   messages : Message[] = [];

//   username = "";

//   http = inject(HttpClient);

//   interval = interval(5000);

//   constructor() {
//     fromEvent(window , 'storage').subscribe((event) => {
//       let messages = localStorage.getItem('messages');

//       if(messages) {
//         let parsedMessages = JSON.parse(messages);
//         this.messages = parsedMessages
//       }
//     })
//   }



//   send(message : string) {
//     if(this.username) {
//       this.messages.push({
//         username : this.username,
//         datetime : new Date(),
//         content : message,
//       });
//       localStorage.setItem('messages', JSON.stringify(this.messages))
//     }
//   }

//   login() {
//     if (this.username) {
//       this.loggedIn = true;
//       // this.interval.subscribe(()=> {
//       //   this.getDadJoke();
//       // })
//     }
//   }

//   // getDadJoke() {
//   //   this.http.get<DadJoke>('https://icanhazdadjoke.com/', {headers : {"Accept" : "application/json"}}).subscribe(e => {
//   //     let message : Message = {
//   //       username : "Dad",
//   //       content : e.joke
//   //     }
//   //     this.messages.push(message)
//   // })
//   // }
// }



// // // ---------------EX 18 Création d'un composant


// ///////Dans le terminal, génération des fichiers du composant ->  ng g c nomducomposant


// // // --------------Création d'un service (auth)

// // Dans le terminal ->  ng g s auth

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <div class="p-4 bg-gray-200 flex align-center">
    @if(!isAuth) {
      <a class="hover:text-red-200 mx-2" routerLink="/login">Login</a>
    } @else {
      <a class="hover:text-red-200 mx-2" routerLink="/">Accueil</a>
      <a class="hover:text-red-200 mx-2" routerLink="/messenger">Chat</a>
      <a class="hover:text-red-200 mx-2" routerLink="/project">Project</a>
      <span class="hover:text-red-200 mx-2 cursor-pointer" (click)="logout()">Déconnexion</span>
    }
    </div>
    <router-outlet />
    `,
    imports: [
        RouterOutlet,
        RouterModule,
        CommonModule
    ]
})
export class AppComponent {
  private authService = inject(AuthService);
  isAuth = false;

  ngOnInit() {
    this.authService.isAuth$.subscribe(e => {
      this.isAuth = e
    })
  }

  logout() {
    this.authService.logout();
  }
}