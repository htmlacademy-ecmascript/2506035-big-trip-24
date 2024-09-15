import { createElement } from '../render.js';

function createTripEventListItemTemplate() {
  return '<li class="trip-events__item"></li>';
}

export default class TripEventListItemView {
  getTemplate() {
    return createTripEventListItemTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
