import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
})
export class BookingsComponent implements OnInit {

  public dateValues: Date = new Date();
  public multiSelect: Boolean = true;

  constructor() { }

  

  disabledDate(args): void {

    
    if (args.date.getDay() === 0) {
        //set 'true' to disable the weekends
        args.isDisabled = true;
        args.element.classList.add('e-highlightweekend');
    }
}

  ngOnInit(): void {
    console.log(this.dateValues)
  }

}
