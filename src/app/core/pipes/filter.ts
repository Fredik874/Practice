import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], BooksNameSearch): any {
        return items.filter(it => {
        return it.name.toLowerCase().includes(BooksNameSearch);
        });
    }
}
