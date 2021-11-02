import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [RouterModule, FooterModule, HeaderModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
