import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18nSelect
  public name:string = 'Cesar';
  public gender:'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  public titleMap = {
    'male': 'Sr.',
    'female': 'Sra.'
  }

  changeClient():void {
    if (this.name === 'Cesar') {
      this.name = 'Banina';
      this.gender = 'female';
    }
    else {
      this.name = 'Cesar';
      this.gender = 'male';
    }
  }

  //i18nPlural
  public clientes:string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }
  atendClient():void {
    if (this.clientes.length === 0) {
      this.clientes = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
    }
    else {
      // this.clientes.pop(); //elimina el ultimo elemento
      this.clientes.shift(); //elimina el primer elemento
    }
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Otawa, Canada'
  }

  //Async pipe
  public myObservableTimer = interval(2000).pipe(
    // tap(value => console.log({value}))
  );

  public promiseValue:Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Otro nombre';
    }, 3500);
  });

}
