import '../public/assets/css/style.scss';
import { setupHeader } from './components/header';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header id="header"></header>
`;

setupHeader(document.querySelector<HTMLElement>('#header')!);
