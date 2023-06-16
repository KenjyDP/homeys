// Fetch JSON data
fetch('json/huur.json')
  .then(response => response.json())
  .then(data => {
    const rentalsContainer = document.getElementById('rentalsContainer');
    const cardTemplate = document.getElementById('cardTemplate');

    // Iterate over each rental object in the JSON data
    data.rentals.forEach((rental, index) => {
      // Clone the card template
      const cardClone = cardTemplate.content.cloneNode(true);
      const card = cardClone.querySelector('.card');

      // Update carousel images
      const carouselInner = card.querySelector('.carousel-inner');
      rental.images.forEach((image, imageIndex) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (imageIndex === 0) {
          carouselItem.classList.add('active');
        }
        const img = document.createElement('img');
        img.src = image;
        img.alt = rental.title;
        img.classList.add('d-block', 'w-100');
        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
      });

      // Update card details
      const cardTitle = card.querySelector('.card-title');
      cardTitle.textContent = rental.title;

      const cardText = card.querySelector('.card-text');
      cardText.textContent = rental.description;

      const detailsButton = card.querySelector('button');
      // Update the onclick event based on the rental object's detailsFile
      detailsButton.onclick = () => {
        window.location.href = rental.detailsFile;
      };

      // Append the updated card to the rentals container
      rentalsContainer.appendChild(cardClone);

      // Activate the carousel for the current card
      const carouselInstance = new bootstrap.Carousel(card.querySelector('.carousel'));
      const prevButton = card.querySelector('.carousel-control-prev');
      const nextButton = card.querySelector('.carousel-control-next');

      prevButton.addEventListener('click', (event) => {
        event.preventDefault();
        carouselInstance.prev();
      });

      nextButton.addEventListener('click', (event) => {
        event.preventDefault();
        carouselInstance.next();
      });
    });
  })
  .catch(error => console.error(error));
