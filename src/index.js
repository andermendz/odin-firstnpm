import myName from './myName';
import numbers from './numbers';
import { functionOne } from './counter';

function component() {
    const element = document.createElement('div');
    const elementTwo = document.createElement('div')
    
    
    element.innerHTML = myName('Anderson')
    
    elementTwo.innerHTML = numbers(20);

    element.appendChild(elementTwo)


    element.appendChild(functionOne(5))

    return element;
   
    
    
  }
  
  document.body.appendChild(component());