import FiltersPresenter from './presenter/filter-presenter.js';
import SortListPresenter from './presenter/sort-list-presenter.js';
import TripEventsPresenter from './presenter/trip-event-presenter.js';

const filterContainerElement = document.querySelector('.trip-controls__filters');
const filterPresenter = new FiltersPresenter(filterContainerElement);
filterPresenter.init();

const tripEventsContainerElement = document.querySelector('.trip-events');

const sortListPresenter = new SortListPresenter(tripEventsContainerElement);
sortListPresenter.init();

const tripEventsPresenter = new TripEventsPresenter(tripEventsContainerElement);
tripEventsPresenter.init();
