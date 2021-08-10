import './index.css';

import Popup from './components/Popup';

const policyButton = document.querySelector('.footer__button_policy');
const legalButton = document.querySelector('.footer__button_legal');
const popupPolicyContainer = document.querySelector('.popup_policy');
const popupLegalContainer = document.querySelector('.popup_legal');

const popupPolicy = new Popup(popupPolicyContainer);
const popupLegal = new Popup(popupLegalContainer);

const openPopupPolicy = () => popupPolicy.open();
const openPopupLegal = () => popupLegal.open();

policyButton.addEventListener('click', openPopupPolicy);
legalButton.addEventListener('click', openPopupLegal);