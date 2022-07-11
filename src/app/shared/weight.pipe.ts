import {Pipe, PipeTransform} from "@angular/core";
import {throwError} from "rxjs";

@Pipe({
  name: 'groceryWeight'
})
export class WeightPipe implements PipeTransform {

  transform(value: number, weight: string): string {

    if (!isNaN(value) && value > 0) {
      if (value < 1000) {
        weight = ' Gram';
        return value + weight;
      } else if (value > 999.99) {
        weight = ' Kilogram';
        return value / 1000 + weight;
      }
    } else {
      alert('Invalid value for product weight: ' + value);

    }
    return weight;
  }
}
