const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(b){
    b.addEventListener('click' , function(e){
        if(e.target.id === 'red'){
            const a = document.getElementById('red');
            const color = getComputedStyle(a);
            body.style.backgroundColor = color.backgroundColor;
        }
        if(e.target.id === 'lightblue'){
            const a = document.getElementById('lightblue');
            const color = getComputedStyle(a);
            body.style.backgroundColor = color.backgroundColor;
        }
        if(e.target.id === 'brown'){
            const a = document.getElementById('brown');
            const color = getComputedStyle(a);
            body.style.backgroundColor = color.backgroundColor;
        }
        if(e.target.id == 'purple'){
            const a = document.getElementById('purple');
            const color = getComputedStyle(a);
            body.style.backgroundColor = color.backgroundColor;
        }
    });
});