import myName from './myName';
import numbers from './numbers';
import { functionOne } from './counter';
import './style.css';
import logo from './logo.png';


function component() {
    const element = document.createElement('div');
    const elementTwo = document.createElement('div')
    
    const icon = new Image();
    icon.src = logo;
    
    element.innerHTML = myName('Anderson')
    
    elementTwo.innerHTML = numbers(20);

    element.appendChild(elementTwo)
    element.classList.add('hello');

    
    element.appendChild(functionOne(5))
    //element.appendChild(icon);

    return element;
   
    
    
  }
  
  document.body.appendChild(component());