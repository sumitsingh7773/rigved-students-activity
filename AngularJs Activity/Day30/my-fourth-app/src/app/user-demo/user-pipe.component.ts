import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'CustomePipe'
})
export class CustomePipe implements PipeTransform {
 
  transform(name: string, gender: string): string {
    if (gender == "male")
        return "Mr. " + name;
    else
        return "Miss. " + name;
  }
}