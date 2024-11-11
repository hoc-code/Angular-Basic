import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // text
  title = {
    name: 'Long Pé',
    old: 21,

  };

  //properties
  isDisable= true;

  // attributes
  contentImage = 'LongPe';
  
  bindingMessage = '';

  nameBtn = 'Click me!';
  clickMessage = '';

  handleClickMe(): void{
    this.clickMessage = 'Xin chào tôi là Long Pé.';
  }

  updateField(): void{
    console.log('Hello');
  }

}
