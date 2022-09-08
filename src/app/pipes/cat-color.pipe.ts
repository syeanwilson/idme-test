import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catColor'
})
export class CatColorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value.toLocaleLowerCase()) {
      case 'shopping':
        return 'green';
      case 'technology':
        return 'grey';
      case 'entertainment':
        return 'blue';
      case 'automotive':
        return 'red';
      default:
        return 'grey';
    };
  }

}
