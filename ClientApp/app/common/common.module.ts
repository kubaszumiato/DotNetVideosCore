import { NgModule } from '@angular/core';
import { EnumKeysPipe } from '../pipes/enum.keys.pipe';
import { SafePipe } from '../pipes/safe.html.pipe';

@NgModule({
  declarations: [EnumKeysPipe, SafePipe],
  exports: [EnumKeysPipe, SafePipe]
})

export class CommonModule {

}