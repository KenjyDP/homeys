 // Fetch data from rentals.json using fetch()
 fetch('../json/home.json')
 .then(function(response) {
   return response.json();
 })
 .then(function(data) {
   var rentals = data;

   var rentalsContainer = document.getElementById('rentalsContainer');

   // Loop through rentals and create rental cards
   rentals.forEach(function(rental) {
     var cardLink = document.createElement('a');
     cardLink.href = rental.link;
     cardLink.className = 'card-link';

     var card = document.createElement('div');
     card.className = 'col-md-6';
     cardLink.appendChild(card);

     var cardImage = document.createElement('img');
     cardImage.src = rental.image;
     cardImage.className = 'card-img-top';
     cardImage.alt = rental.title;
     card.appendChild(cardImage);

     var cardBody = document.createElement('div');
     cardBody.className = 'card-body';
     card.appendChild(cardBody);

     var cardTitle = document.createElement('h5');
     cardTitle.className = 'card-title';
     cardTitle.textContent = rental.title;
     cardBody.appendChild(cardTitle);

     var cardText = document.createElement('p');
     cardText.className = 'card-text';
     cardText.innerHTML = 'Price: ' + rental.price + '/month<br>Location: ' + rental.location + '<br>Description: ' + rental.description;
     cardBody.appendChild(cardText);

     rentalsContainer.appendChild(cardLink);
   });
 })
 .catch(function(error) {
   console.log(error);
 });