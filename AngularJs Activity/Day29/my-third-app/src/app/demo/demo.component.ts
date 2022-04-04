import {Component} from '@angular/core';



@Component({
    selector:'demo',
    template:`<div>
    <h2>Start of Demo Component</h2>
    <p>Username is {{username}}</p>
    <p>Age is {{age}}</p>
    <p>Email is {{email}}</p>
    <p>Salary is {{salary}}</p>
    <h2> End of Demo Component</h2>
    </div>`
})
export class DemoComponent{
    username : string ="Bruce";
    age: number = 35
    email: string ="bruce123@gmail.com";
    salary: number =35000
   
}