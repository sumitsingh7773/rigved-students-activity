import {Component} from '@angular/core';

@Component({
    selector:'user-app',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    name: string = "Alexender";
    age: number = 35
    email: string ="alexender123@gmail.com"
    salary: number =35000
}