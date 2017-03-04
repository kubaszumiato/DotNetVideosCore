import { NgModule } from '@angular/core';
import { EnumKeysPipe } from '../pipes/enum.keys.pipe';

@NgModule({
  declarations: [EnumKeysPipe],
  exports: [EnumKeysPipe]
})

export class CommonModule {

}