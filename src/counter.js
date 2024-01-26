

const functionOne = (n) => {
    const divEl = document.createElement('div');

    for (let i = 1; i<=n;i++){
        let divCount = document.createElement('div')
        divCount.innerHTML = 'the number is ' + i;
        divEl.appendChild(divCount);
        
    }
    return divEl;
}

export {
    functionOne,
}