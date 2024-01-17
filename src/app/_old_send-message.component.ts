// import { Component } from "@angular/core";
// import { FormsModule } from "@angular/forms";

// @Component({
//     selector : "send-message",
//     standalone : true,
//     imports: [
//         FormsModule
//     ],
//     template : `
//         <div class="bg-slate-100 p-4 flex gap-2 items-center">
//             <input type="text" [ngModel]="message" (ngModelChange)="message = $event" class="rounded border-slate-200 p-2"/>
//             <button (click)="send()" class="ml-2"><img src="../assets/plane.png" class="w-5 h-auto"></button>
//         </div>
//     `
// })
// export class SendMessageComponent {

//     message = "";

//     send() {
//     }
// }


// // ---------------EX 1 - Création d'un évènement


// import { Component, EventEmitter, Output } from "@angular/core";
// import { FormsModule } from "@angular/forms";

// @Component({
//     selector : "send-message",
//     standalone : true,
//     imports: [
//         FormsModule
//     ],
//     template : `
//         <div class="bg-slate-100 p-4 flex gap-2 items-center">
//             <input type="text" [ngModel]="message" (ngModelChange)="message = $event" class="rounded border-slate-200 p-2"/>
//             <button (click)="send.emit(message)" class="ml-2"><img src="../assets/plane.png" class="w-5 h-auto"></button>
//         </div>
//     `
// })
// export class SendMessageComponent {

//     message = "";

//     @Output()
//     send = new EventEmitter();
// }


// // // ---------------EX 2 - Subscription à un évènement -> Vide l'input

// import { Component, EventEmitter, Output } from "@angular/core";
// import { FormsModule } from "@angular/forms";

// @Component({
//     selector : "send-message",
//     standalone : true,
//     imports: [
//         FormsModule
//     ],
//     template : `
//         <div class="bg-slate-100 p-4 flex gap-2 items-center">
//             <input type="text" [ngModel]="message" (ngModelChange)="message = $event" class="rounded border-slate-200 p-2"/>
//             <button (click)="send.emit(message)" class="ml-2"><img src="../assets/plane.png" class="w-5 h-auto"></button>
//         </div>
//     `
// })
// export class SendMessageComponent {

//     message = "";

//     @Output()
//     send = new EventEmitter();

//     constructor() {
//         this.send.subscribe(()=> {
//             this.message = "";   
//         })
//     }
// }



// // // ---------------EX 2 - Subscription à un évènement -> Vide l'input -- Autre syntaxe

import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector : "send-message",
    standalone : true,
    imports: [
        FormsModule
    ],
    template : `
        <div class="bg-slate-100 p-4 flex gap-2 items-center">
            <input type="text" [ngModel]="message" (ngModelChange)="message = $event" class="rounded border-slate-200 p-2"/>
            <button (click)="_send()" class="ml-2"><img src="../assets/plane.png" class="w-5 h-auto"></button>
        </div>
    `
})
export class SendMessageComponent {

    message = "";

    @Output()
    send = new EventEmitter<string>();

    protected _send() {

        if (!this.message) {
            this.message = "";
        } else {
            this.send.emit(this.message);
            this.message = "";
        }
    }
}