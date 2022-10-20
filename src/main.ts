import './assets/scss/style.scss';
import { setupHeader } from './components/Header';
import { setupMain } from './components/Main';
import { $ } from './util/functions';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header id="header"></header>
  <main id="main"></main>
`;

setupHeader($('#header'));
setupMain($('#main'));
