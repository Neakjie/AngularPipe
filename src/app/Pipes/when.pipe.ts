import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from "@angular/common";

@Pipe({
  name: 'when'
})
export class WhenPipe implements PipeTransform {

  transform(date:Date|string,format:string="full"): string {
       date = new Date(date);
       var res = new DatePipe('en-US').transform(date,format);
        res = res + " (Puerto Rico and US Virgin Islands Time)"
    return res ;
  }

}
