import myName from './myName';
import numbers from './numbers';

function component() {
    const element = document.createElement('div');
    const elementTwo = document.createElement('div')
    // Lodash, currently included via a script, is required for this line to work
    
    element.innerHTML = myName('Anderson')
    
    elementTwo.innerHTML = numbers(20);

    element.appendChild(elementTwo)
    return element;
   
      // Lodash, now imported by this script
    
    
  }
  
  document.body.appendChild(component());