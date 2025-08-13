import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'experiencia'})
export class ExperienciaPipe implements PipeTransform {
  transform(exp: number): string {
    if(exp >= 1000) return `${(exp / 1000).toFixed(1)}K XP`
    return `${exp} XP`
  }
}
