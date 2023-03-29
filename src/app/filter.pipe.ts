import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "./employee";

@Pipe({
    name:'filterEmployee'
})
export class FilterPipe implements PipeTransform{
 transform(employee: Employee[], filterText:string) {
     if(employee.length === 0 || filterText === ''){
        return employee;

     }else{
        return employee.filter((employee) =>
         {
            return employee.firstName.toLowerCase() === filterText.toLowerCase()
        })
     }
 }
}