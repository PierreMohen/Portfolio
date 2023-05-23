import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'capitalizeFirstLetterArray'
})
export class CapitalizeFirstLetterArrayPipe implements PipeTransform {
transform(value: string[]): string[] {
if (!value) {
return [];
}
return value.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}
}
