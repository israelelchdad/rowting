import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: number, ): number{
    let d=new Date().getFullYear()
    let b=d-value
    
    return b
  }

}
