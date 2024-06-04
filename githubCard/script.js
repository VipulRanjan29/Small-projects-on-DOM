const btn = document.querySelector(".button");

btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('gitHub').value;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${name}`);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const follower = data.followers;
                const icon = data.avatar_url;
                const html_url = data.html_url;
                const username = data.login;

                const cardContainer = document.getElementById('card');
                
                cardContainer.innerHTML = '';

                const card = document.createElement('div');
                card.classList.add('card', 'box');
                card.style.width = "18rem";

                const img = document.createElement('img');
                img.classList.add('card-img-top');
                img.setAttribute('src', icon);

                const title = document.createElement('h2');
                title.innerText = username;

                const followerText = document.createElement('p');
                followerText.innerText = `Followers: ${follower}`;

                const link = document.createElement('a');
                link.classList.add('btn', 'btn-primary');
                link.setAttribute('href', html_url);
                link.innerText = 'View on GitHub';

                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(followerText);
                card.appendChild(link);


                cardContainer.appendChild(card);
                
            } else {
                console.error('Error:', xhr.status);
            }
        }
    };
    
    xhr.send();
});
