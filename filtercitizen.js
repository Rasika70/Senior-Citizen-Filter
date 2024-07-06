// filtered_citizens.js

document.addEventListener('DOMContentLoaded', function() {
    var seniorList = document.getElementById('seniorList');
    var seniors = JSON.parse(localStorage.getItem('seniorCitizens'));

    if (seniors && seniors.length > 0) {
        seniors.forEach(function(senior) {
            var card = document.createElement('div');
            card.classList.add('menu_card');
            
            var imageDiv = document.createElement('div');
            imageDiv.classList.add('menu_image');
            var img = document.createElement('img');
            img.src = senior.imgSrc;
            imageDiv.appendChild(img);

            var smallCardDiv = document.createElement('div');
            smallCardDiv.classList.add('small_card');
            var icon = document.createElement('i');
            icon.classList.add('bx', 'bxs-user');
            smallCardDiv.appendChild(icon);

            var infoDiv = document.createElement('div');
            infoDiv.classList.add('menu_info');
            var name = document.createElement('h2');
            name.innerText = senior.name;
            var age = document.createElement('h3');
            age.classList.add('age');
            age.innerText = 'Age : ' + senior.age;
            var description = document.createElement('h5');
            description.innerText = senior.description;

            infoDiv.appendChild(name);
            infoDiv.appendChild(age);
            infoDiv.appendChild(description);

            card.appendChild(imageDiv);
            card.appendChild(smallCardDiv);
            card.appendChild(infoDiv);

            seniorList.appendChild(card);
        });
    } else {
        var noSeniors = document.createElement('p');
        noSeniors.textContent = 'No senior citizens found.';
        seniorList.appendChild(noSeniors);
    }
});
