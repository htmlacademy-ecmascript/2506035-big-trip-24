import { render } from '../render.js';
import FilterView from '../view/filter-view.js';
import SortListView from '../view/sort-list-view.js';
import TripEventListView from '../view/trip-event-list-view.js';
import TripEventListItemView from '../view/trip-events-list-item-view.js';
import AddFormView from '../view/add-form-view.js';
import EventView from '../view/event-view.js';

export default class MainPresenter {
  AMOUNT_TRIP_EVENTS = 4;

  constructor(filterContainer, tripEventListContainer) {
    this.filterContainer = filterContainer;
    this.tripEventListContainer = tripEventListContainer;
    this.filterViewComponent = new FilterView();
    this.sortListViewComponent = new SortListView();
    this.tripEventListViewComponent = new TripEventListView();
  }

  init() {
    if (this.filterContainer) {
      render(this.filterViewComponent, this.filterContainer);
    }
    if (this.sortListViewComponent) {
      render(this.sortListViewComponent, this.tripEventListContainer);
    }
    if (this.tripEventListContainer) {
      render(this.tripEventListViewComponent, this.tripEventListContainer);
    }
    for (let i = 0; i < this.AMOUNT_TRIP_EVENTS; i++) {
      const tripEventListItemComponent = new TripEventListItemView();
      render(tripEventListItemComponent, this.tripEventListViewComponent.getElement());
      if (i === 0) {
        render(new AddFormView(), tripEventListItemComponent.getElement());
      } else {
        render(new EventView(), tripEventListItemComponent.getElement());
      }
    }
  }
}
