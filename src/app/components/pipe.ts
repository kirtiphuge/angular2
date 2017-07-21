import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: Array<any>, input: string) {
        let searchinput : string =input;
        let filteredList:Array<any>=[];
        if (searchinput.length>2) 
        {
            for(let obj1 of value)
            {
              if(obj1.name===searchinput || obj1.title===searchinput)
              {
                  filteredList.push(obj1);
              }
            }
            return filteredList;
        }
        
        return value;
    }
}
