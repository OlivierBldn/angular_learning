// //-----------------BASE

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'parseLink',
//   standalone: true
// })
// export class ParseLinkPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseLink',
  standalone: true
})
export class ParseLinkPipe implements PipeTransform {

  transform(message: string, ...args: unknown[]): string {

    let stringArray = message.split(' ');

    return stringArray.map((word) => {
      return word.includes('https://') ? `<a href="${word}" target="_blank">${word}</a>` : word;
    }).join(' ');

  }

}