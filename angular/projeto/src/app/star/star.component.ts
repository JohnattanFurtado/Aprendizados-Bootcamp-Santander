import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './star.component.html',
  })

export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    starWidht: number | undefined;

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidht = this.rating * 94 / 5;
    }
}