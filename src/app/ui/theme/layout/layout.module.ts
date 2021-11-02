import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [LayoutComponent, FooterComponent, MainComponent, HeaderComponent],
  imports: [RouterModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
