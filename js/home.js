// Function to create rental cards
function createRentalCard(rental) {
  const rentalCard = document.createElement('div');
  rentalCard.classList.add('col-md-6');

  const cardLink = document.createElement('a');
  cardLink.href = rental.detailsUrl; // Update the href attribute
  cardLink.classList.add('card-link');

  const card = document.createElement('div');
  card.classList.add('card', 'mb-4', 'text-white', 'cardhome');

  const cardImage = document.createElement('img');
  cardImage.src = rental.image;
  cardImage.classList.add('card-img-top');
  cardImage.alt = rental.title;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = rental.title;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerHTML = `${rental.price}<br>${rental.people}<br>${rental.description}`;

  // Append the elements to the rental card
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardImage);
  card.appendChild(cardBody);
  cardLink.appendChild(card);
  rentalCard.appendChild(cardLink);

  return rentalCard;
}

// Fetch rental data from the JSON file
axios.get('json/home.json')
  .then(response => {
    const rentalsContainer = document.getElementById('rentalsContainer');
    const rentals = response.data;

    // Loop through the rental data and create rental cards
    rentals.forEach(rental => {
      const rentalCard = createRentalCard(rental);

      // Append the rental card to the rentals container
      rentalsContainer.appendChild(rentalCard);
    });
  })
  .catch(error => {
    console.error('Error fetching rental data:', error);
  });