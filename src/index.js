/* Nothing here */
// const templateString = require('./index.twig')
import templateString from './index.twig';
import './index.css';
// console.log('hello');

const wrapperElement = document.createElement('div')

wrapperElement.classList.add('wrapper')
wrapperElement.innerHTML = templateString()
document.body.appendChild(wrapperElement)
