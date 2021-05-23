import { Component,Input } from '@angular/core';


@Component({
  selector: 'StarRate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.css']
})
export class StarRate {
    @Input() rate: number = 0;
    @Input() disableRate:number = 0;
        
}
