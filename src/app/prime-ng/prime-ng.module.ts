import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card'
import { FieldsetModule } from 'primeng/fieldset'
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel'
import { ButtonModule } from "primeng/button";

@NgModule({
  exports: [
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    ButtonModule,
  ]
})
export class PrimeNgModule { }
