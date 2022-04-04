import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'Obj1'
})
export class obj1 implements PipeTransform {
 
  transform(name: string, gender: string): string {
    if (gender == "male")
        return "Mr. " + name;
    else
        return "Miss. " + name;
  }
}