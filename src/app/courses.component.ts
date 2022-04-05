
// import { Component } from '@angular/core';
// import { CoursesService } from './courses.service';


// @Component({
    //     selector: 'courses',
    //     template: `
    //     <h2>{{ title }}</h2>
    //     <ul>
    //         <li *ngFor="let course of courses">
    //             {{ course }}
    //         </li>
    //     </ul>    
    //     `
    // })
    // export class CoursesComponent {
        //     title = "List of courses";
        //     courses;
        
        //     constructor(service : CoursesService){
            //         this.courses = service.getCourses();
            //     }
            // }
            
// import { Component } from "@angular/core";

// @Component({
//     selector: 'courses',
//     template:`
//     <h2>{{ title }}</h2>
//     <img [src]="imageUrl"/>
//     <table>
//         <tr>
//             <td [attr.colspan]="colSpan"></td>
//         </tr>
//     </table>
//     `
    
// })
// // other syntax for img  :  <img src="{{imageUrl}}"/>
// // for colspan attribute of td we need to precise that it is an attribute of html element td we are talking about since colspan isn't an element of the DOM
// export class CoursesComponent {
//     title = "List of courses";
//     imageUrl = "https://i.pinimg.com/originals/e5/a9/e8/e5a9e877bcacdc5713d2a8f98412762d.png"
//     colSpan = 2;
// }

// import { Component } from '@angular/core';

// @Component({
//     selector: 'courses',
//     template: `
//     <button class="btn btn-primary" [class.active]="isActive">Save</button>
//     `
// })
// export class CoursesComponent{
//     isActive = false;
// }

// import { Component } from '@angular/core';

// @Component({
//     selector: 'courses',
//     template:`
//     <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
//     `
// })
// export class CoursesComponent{
//     isActive = false;
// }

// import { Component } from '@angular/core';

// @Component({
//     selector:'courses',
//     template:`
//     <div (click)="onDivClicked()">
//         <button (click)="onSave($event)">Save</button>
//     </div>
//     `
// })
// export class CoursesComponent{
//     onDivClicked(){
//         console.log("Div was clicked");
//     }
//     onSave($event: any){
//     //normally there is the event bubbling which cause the events to bubble up ie start from the most intern element and rise up to the outtest element but with the stopPropagation method it stops at that element.
//         $event.stopPropagation();
//         console.log("Button was clicked", $event);  
//     }
// }

// import { Component } from '@angular/core';

// @Component({
//     selector: 'courses',
//     template:`
//     <input (keyup.enter)="onKeyUp()"/>
//     `
// })
// export class CoursesComponent {
//     onKeyUp(){
//         console.log("ENTER was pressed")
//     }
// }


//now let's say we want the value typed in the input :
//1st solution : 
// import { Component } from '@angular/core';

// @Component({
//     selector: 'courses',
//     template:`
//     <input (keyup.enter)="onKeyUp($event)"/>
//     `
// })
// export class CoursesComponent {
//     onKeyUp($event:any){
//         console.log($event.target.value)
//     }
// }

//2nd solution (procedural)
// import { Component } from '@angular/core';

// @Component({
//     selector: 'courses',
//     template:`
//     <input #email (keyup.enter)="onKeyUp(email.value)"/>
//     `
// })
// export class CoursesComponent {
//     onKeyUp(email:any){
//         console.log(email);
//     }
// }


// //two way binding
// import { Component } from '@angular/core';

// @Component({
//     selector: 'courses',
//     template:`
//     <input [value]="email" (keyup.enter)="email = $any($event.target).value; onKeyUp()"/>
//     `
// })
// export class CoursesComponent {
//     email ="me@example.com";
//     onKeyUp(){
//         console.log(this.email);
//     }
// }


// //two way binding (better way)
// import { Component } from '@angular/core';

// @Component({
//     selector: 'courses',
//     template:`
//     <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
//     `
// })
// export class CoursesComponent {
//     email ="me@example.com";
//     onKeyUp(){
//         console.log(this.email);
//     }
// }


// import { Component } from '@angular/core';

// @Component({
//     selector: 'courses',
//     //we can add properties to a variable using | then the name of the class
//     //the properties are read from left to right so uppercase then lowercase will be lowercase
//     //for number we can add arguments with | number : ''
//     //inside the first number added is the number of digit before the , and the 2 number after are the min and max number of digit after
//     //same for currency we can change the currency by specifying it and add another arg to display the symbol of the currency
//     template: `
//     {{ course.title | uppercase | lowercase }} <br/>
//     {{ course.students | number }} <br/>
//     {{ course.rating | number:'1.2-2' }} <br/>
//     {{ course.price | currency:'AUD':true }} <br/>
//     {{ course.releaseDate | date:'shortDate' }}
//     `
// })

// export class CoursesComponent {
//     course = {
//         title: "The Complete Angular Course",
//         rating: 4.9745,
//         students: 30123,
//         price: 190.95,
//         releaseDate: new Date(2016, 3, 1)
//     }
// }


import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template:`
        {{ text | summary:10 }}
    `
})
export class CoursesComponent {
    text = `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora facere itaque veritatis ratione optio? Itaque, ea. Tempore repudiandae nam nobis qui deleniti temporibus unde voluptate dolorem quasi? Beatae deleniti sequi ipsa assumenda quis consequuntur corporis officiis. Tenetur cumque officiis sit quibusdam mollitia nostrum quasi similique molestiae dolorum velit illum iste voluptatem, temporibus facilis iure reprehenderit facere iusto consectetur laudantium. Consectetur fuga sunt quisquam, beatae dolorem quia facere perspiciatis, possimus vero ipsa alias eaque id at ratione ducimus cupiditate obcaecati laboriosam ad aut explicabo expedita quasi commodi in? Nulla distinctio in, nisi natus architecto porro ea eius non deleniti nemo soluta repellat. Iure laborum expedita labore animi, officiis quo cupiditate ipsa, assumenda veritatis nesciunt repudiandae amet consequuntur minus sed consectetur. Facere eveniet esse saepe deleniti qui beatae delectus laborum ipsum dolorem quidem itaque magnam perspiciatis quaerat, et laboriosam incidunt, neque officia accusantium odit molestias magni animi? Animi ducimus et maxime dolorem quia expedita ullam quod molestias velit tenetur. At neque architecto aut corrupti dignissimos? Delectus quidem rem, ut nam soluta rerum cupiditate nostrum sint velit minus id voluptates quam et tenetur saepe quo ad vel aliquid exercitationem dolore. Autem, similique! Similique molestiae inventore repudiandae quia, suscipit possimus fugiat eos voluptate quo!
    `
}
