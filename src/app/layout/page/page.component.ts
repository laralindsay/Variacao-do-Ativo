import { AfterContentInit, Component, ContentChildren, Directive, Input, QueryList, TemplateRef, inject } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Directive({
  selector: '[appPageTemplate]',
  standalone: true,
})
export class PageTemplateDirective {
  template = inject(TemplateRef);
  @Input() appPageTemplate?: 'header' | 'subheader' | 'content';
}

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AvatarModule, ButtonModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent  {


  logout (){
    console.log('logout work')
  }
}
