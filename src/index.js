import templateString from './index.twig';
import './index.css';

const wrapperElement = document.createElement('div')

wrapperElement.classList.add('wrapper')
wrapperElement.innerHTML = templateString()
document.body.appendChild(wrapperElement)
