import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quirepnom'
})
export class QuirepnomPipe implements PipeTransform {

  transform(value: any): any {
    return value.filter((value: { name: any; }, i: any, arr: any[]) => arr.findIndex( (data: { name: any; }) => data.name === value.name) === i );
  }
  
}
