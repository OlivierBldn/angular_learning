// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';


// // ---------------BASE
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'testangular';
// }


// // ---------------EX 1 - Bind de propriété
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//   <h1>{{ title.toUpperCase() }}</h1>
//   <Button>Bouton</Button>
//   `,
// })
// export class AppComponent {
//   title : string = 'testangular';


//   constructor() {
//   }
// }


// // ---------------EX 2 - Bind d'évènement
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//   <h1>{{ title }}</h1>
//   <Button (click)="log()">Bouton</Button>
//   `,
// })
// export class AppComponent {
//   title : string = 'testangular';


//   constructor() {}


//   log() {
//     console.log('click');
//   }
// }


// // ---------------EX 3 - Bind d'évènement'
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//   <h1>{{ title }}</h1>
//   <input type="text" [value]="title" />
//   <Button (click)="log()">Bouton</Button>
//   `,
// })
// export class AppComponent {
//   title : string = 'testangular';

//   constructor() {}

//   log() {
//     console.log(this.title);
//   }
// }


// // ---------------EX 4


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule],
//   template: `
//   <h1 class="text-2xl font-bold uppercase" (mouseenter)="log()">{{ title }}</h1>
//   <button (click)="switch()">Switch type</button>
//   <input [type]="inputType" [ngModel]="title" (ngModelChange)="editTitle($event)" />
//   <button (click)="log()">Bouton</button>
//   `,
// })
// export class AppComponent {
//   title : string = 'testangular';
//   inputType : string = 'text';

//   constructor() {}

//   log() {
//     console.log(this.title);
//   }

//   switch() {
//     this.inputType = this.inputType === 'text' ? 'number' : 'text';
//   }

//   editTitle(event: Event) {
//     this.title = (event.target as HTMLInputElement).value;
//   }
// }


// // ---------------EX 5

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule],
//   template: `
//   <div class="bg-slate-100 p-4 flex gap-2 items-center">
//     <input type="text" [ngModel]="message" (ngModelChange)="message = $event" class="rounded border-slate-200 p-2"/>
//     <button (click)="send()" class="ml-2"><img src="../assets/plane.png" class="w-5 h-auto"></button>
//   </div>
//   `,
// })
// export class AppComponent {
//   message = "";

//   messages : string[] = [];

//   send() {
//     this.messages.push(this.message);
//     this.message = "";
//     console.log(this.messages);
//   }
// }



// // ---------------EX 6 Création du composant send-message.components.ts

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     FormsModule,
//     SendMessageComponent
//   ],
//   template: `<send-message />`,
// })
// export class AppComponent {
//   message = "";

//   messages : string[] = [];


//   send() {
//     this.messages.push(this.message);
//     this.message = "";
//     console.log(this.messages);
//   }
// }




// // // ---------------EX 7 Composant send-message.components.ts - intégration du décorateur Outpout

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     FormsModule,
//     SendMessageComponent
//   ],
//   template: `<send-message (send)="send($event)" />`,
// })
// export class AppComponent {

//   messages : string[] = [];


//   send(message : string) {
//     this.messages.push(message);
//     console.log(this.messages);
//   }
// }


// // // ---------------EX 8 Introduction des directives structurelles

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     FormsModule,
//     SendMessageComponent
//   ],
//   template: `
//   <send-message (send)="send($event)" />
//   @for(item of messages; track $index) {
//     <div><p>{{ item }}</p></div>
//   }
//   `,
// })
// export class AppComponent {

//   messages : string[] = [];


//   send(message : string) {
//     this.messages.push(message);
//     console.log(this.messages);
//   }
// }




// // // ---------------EX 9 Introduction des conditions

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     FormsModule,
//     SendMessageComponent
//   ],
//   template: `
//   @if (loggedIn) {
//     <send-message (send)="send($event)" />
//   }
//   @for(item of messages; track $index) {
//     <div>
//       <p>{{ item }}</p>
//     </div>
//   }
//   `,
// })
// export class AppComponent {

//   loggedIn = true;

//   messages : string[] = [];


//   send(message : string) {
//     this.messages.push(message);
//     console.log(this.messages);
//   }
// }



// // // ---------------EX 10 Continuité - Conditions

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     FormsModule,
//     SendMessageComponent
//   ],
//   template: `
//   @if (loggedIn) {
//     <send-message (send)="send($event)" />
//   } @else {
//     <button (click)="login()">Connexion</button>
//   }

//   @for(item of messages; track $index) {
//     <div class="m-4 p-4 bg-slate-100 rounded">
//       <p>{{ item }}</p>
//     </div>
//   }
//   `,
// })
// export class AppComponent {

//   loggedIn : boolean = false;

//   messages : string[] = [];


//   send(message : string) {
//     this.messages.push(message);
//     console.log(this.messages);
//   }

//   login() {
//     this.loggedIn = true;
//   }
// }




// // // ---------------EX 11 Ajout classe selon condition -> ngClass

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component';


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
//   } @else {
//     <button (click)="login()">Connexion</button>
//   }

//   @for(item of messages; track $index) {
//     <div class="m-4 p-4 bg-slate-200 rounded" [ngClass]="{
//       'mr-14' : $odd,
//       'ml-14' : $even,
//     }">
//       <p>{{ item }}</p>
//     </div>
//   }
//   `,
// })
// export class AppComponent {

//   loggedIn : boolean = false;

//   messages : string[] = [];


//   send(message : string) {
//     this.messages.push(message);
//     console.log(this.messages);
//   }

//   login() {
//     this.loggedIn = true;
//   }
// }


// // // ---------------EX 12 Ajout classe selon condition -> ngClass

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component';


// interface Message {
//   username : string;
//   content : string;
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
//   } @else {
//     <input type="text" [(ngModel)]="username" />
//     <button (click)="login()">Connexion</button>
//   }

//   @for(item of messages; track $index) {
//     <div class="m-4 p-4 bg-slate-200 rounded">
//       <p class="font-bold">{{ item.username }}</p>
//       <p>{{ item.content }}</p>
//     </div>
//   }
//   `,
// })
// export class AppComponent {

//   loggedIn : boolean = false;

//   messages : Message[] = [];

//   username = "";


//   send(message : string) {
//     if(this.username) {
//       this.messages.push({
//         username : this.username,
//         content : message,
//       });
//     }
//   }

//   login() {
//     if (this.username) {
//       this.loggedIn = true;
//     }
//   }
// }



// // // ---------------EX 13 Appel API

// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component';
// import { HttpClient } from '@angular/common/http';


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
//   } @else {
//     <input type="text" [(ngModel)]="username" />
//     <button (click)="login()">Connexion</button>
//   }

//   <button (click)="getDadJoke()">Message</button>

//   @for(item of messages; track $index) {
//     <div class="m-4 p-4 bg-slate-200 rounded">
//       <p class="font-bold">{{ item.username }}</p>
//       <p>{{ item.content }}</p>
//     </div>
//   }
//   `,
// })
// export class AppComponent {

//   loggedIn : boolean = false;

//   messages : Message[] = [];

//   username = "";

//   http = inject(HttpClient);


//   send(message : string) {
//     if(this.username) {
//       this.messages.push({
//         username : this.username,
//         content : message,
//       });
//     }
//   }

//   login() {
//     if (this.username) {
//       this.loggedIn = true;
//     }
//   }

//   // getDadJoke() {
//   //   this.http.get('https://icanhazdadjoke.com/', {headers : {"Accept" : "application/json"}}).subscribe(e => console.log(e))
//   // }

//   getDadJoke() {
//     this.http.get<DadJoke>('https://icanhazdadjoke.com/', {headers : {"Accept" : "application/json"}}).subscribe(e => {
//       let message : Message = {
//         username : "dad",
//         content : e.joke
//       }
//       this.messages.push(message)
//   })
//   }
// }


// // // ---------------EX 14 Appel API - Interval

// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { SendMessageComponent } from './send-message.component';
// import { HttpClient } from '@angular/common/http';
// import { interval } from 'rxjs';


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

//   interval = interval(2000);



//   send(message : string) {
//     if(this.username) {
//       this.messages.push({
//         username : this.username,
//         content : message,
//       });
//     }
//   }

//   login() {
//     if (this.username) {
//       this.loggedIn = true;
//       this.interval.subscribe(()=> {
//         this.getDadJoke();
//       })
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