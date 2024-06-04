const btn = document.querySelector(".button");

btn.addEventListener('click',function(e){
    e.preventDefault();
    
    const name = document.getElementById('gitHub').value;
    
    const xhr = new XMLHttpRequest()
    xhr.open('GET' , `https://api.github.com/users/${name}`)
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
        const data = JSON.parse(this.responseText);
        const follower = data.followers
        const icon = data.avatar_url
        
        console.log(`${follower} , ${icon} `)
            }
        }
    };
    
    xhr.send();

});