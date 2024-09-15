import MainPresenter from './presenter/main-presenter.js';

const filterContainerElement = document.querySelector('.trip-controls__filters');
const tripEventContainerElement = document.querySelector('.trip-events');

const mainPresenter = new MainPresenter(filterContainerElement, tripEventContainerElement);
mainPresenter.init();
