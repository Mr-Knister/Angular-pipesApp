import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'CeSar';
  public nameUpper: string = 'cEsaR';
  public fullName:string = 'CesAR gOMEz'

  public customDate:Date = new Date();
}
