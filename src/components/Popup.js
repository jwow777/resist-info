export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeByOverlay = this._closeByOverlay.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("click", this._closeByOverlay);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("click", this._closeByOverlay);
  }

  _closeByOverlay(evt) {
    if (evt.target === this._popupSelector) {
      this.close();
    }
  }
}