const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0 ; i < 6 ; i++){
     color = color + hex[Math.floor(Math.random()*16)];
    }
    return color;
}

check = false ;

let IntervalId;

document.querySelector(".iphone-case").addEventListener('click',function(e){
    if(check == false){
        check = true ;
        IntervalId = setInterval(function(){
            const bg = document.querySelector('.iphone-case');
            const color = randomColor();
            bg.style.backgroundColor = color;
        },500) 
    }
    else{
        check = false ;
        clearInterval(IntervalId);
        IntervalId = NULL;
    }
})
