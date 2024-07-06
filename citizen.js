// citizen.js

function filterAndRedirect() {
    var cards = document.querySelectorAll('.menu_card');
    var seniors = [];

    cards.forEach(function(card) {
        var ageText = card.querySelector('.age').innerText;
        var age = parseInt(ageText.replace('Age : ', ''));
        if (age >= 65) {
            var name = card.querySelector('h2').innerText;
            var imgSrc = card.querySelector('img').src;
            var description = card.querySelector('h5').innerText;
            seniors.push({ name: name, age: age, imgSrc: imgSrc, description: description });
        }
    });

    // Store the filtered data in localStorage
    localStorage.setItem('seniorCitizens', JSON.stringify(seniors));

    // Redirect to the new page
    window.location.href = 'filtercitizen.html';
}

document.getElementById('filterButton').addEventListener('click', filterAndRedirect);
