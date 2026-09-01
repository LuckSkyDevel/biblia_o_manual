import { Component, input } from '@angular/core';

export interface ContentCard {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-content-cards',
  template: `
    <div [className]="divClass()">
      @for (card of cards(); track card.step) {
        <article [className]="articleClass()">
          <div [className]="stepClass()">{{ card.step }}</div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </article>
      }
    </div>
  `,
})
export class ContentCards {
  readonly cards = input.required<readonly ContentCard[]>();
  readonly divClass = input<string>();
  readonly articleClass = input<string>();
  readonly stepClass = input<string>();
}
