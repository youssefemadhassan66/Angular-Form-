import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
  name:"NoSpace"
})
export class NoSpace implements PipeTransform{

  transform(value: string) {
    return value.replace(/\s+/g,'');
  }
}
