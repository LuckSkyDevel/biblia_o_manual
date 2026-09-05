import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ContentCards, type ContentCard } from '../content-cards/content-cards';

import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-home',
  imports: [ContentCards, FontAwesomeModule, AnimateOnScrollModule],
  templateUrl: './home.html',
})
export class Home {
  protected readonly instagramIcon = faInstagram;

  protected readonly contentCards = [
    {
      step: '01 — ENTENDER',
      title: 'Contexto que faz sentido',
      description:
        'Entenda o que o texto está dizendo antes de tirar conclusões ou aplicar um versículo fora do contexto.',
    },
    {
      step: '02 — APLICAR',
      title: 'Fé na vida real',
      description:
        'Transforme princípios bíblicos em atitudes possíveis para rotina, família, trabalho, decisões e relacionamentos.',
    },
    {
      step: '03 — CRESCER',
      title: 'Uma jornada contínua',
      description:
        'Construa constância: aprender um pouco, refletir, praticar e voltar para a Palavra com novos olhos.',
    },
  ] satisfies readonly ContentCard[];

  protected readonly steps = [
    {
      step: 'PASSO 01',
      title: 'Abra a Palavra',
      description: 'Separe alguns minutos e leia com intenção, não apenas por obrigação.',
    },
    {
      step: 'PASSO 02',
      title: 'Medite a mensagem',
      description: 'Observe contexto, propósito, personagens e o princípio que o texto apresenta.',
    },
    {
      step: 'PASSO 03',
      title: 'Pratique hoje',
      description: 'Escolha uma atitude concreta que coloque aquele princípio em movimento.',
    },
  ] satisfies readonly ContentCard[];
}
