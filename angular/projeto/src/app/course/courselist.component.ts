import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector: 'app-course-list',
    templateUrl: './courselist.component.html'
    
    
})
export class CourselistComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: "matematica",
                imageurl: '/assets/images/1.png',
                price: 400.00,
                code: 'xps-9878',
                duration: 120,
                rating: 5.4,
            },
            {
                id: 2,
                name: "CCS",
                imageurl: '/assets/images/19.png',
                price: 300.00,
                code: 'xps-9712',
                duration: 80,
                rating: 4.4,
            }
        ]
    }

}