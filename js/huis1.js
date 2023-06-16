// Fetch JSON data
fetch('json/huis1.json')
.then(response => response.json())
.then(data => {
  const titleElement = document.querySelector('#house-title');
  titleElement.textContent = data.title;

  // Update location
  const locationElement = document.querySelector('.card-title.location');
  locationElement.textContent = data.location;

  // Update price
  const priceElement = document.querySelector('.card-title.price');
  priceElement.textContent = 'Price';
  const priceTextElement = document.querySelector('.card-text.price');
  priceTextElement.textContent = data.price;

  // Update number of persons
  const personsElement = document.querySelector('.card-title.persons');
  personsElement.textContent = 'Number of People';
  const personsTextElement = document.querySelector('.card-text.persons');
  personsTextElement.textContent = data.numberOfPersons;

  // Update number of rooms
  const roomsElement = document.querySelector('.card-title.rooms');
  roomsElement.textContent = 'Number of Rooms';
  const roomsTextElement = document.querySelector('.card-text.rooms');
  roomsTextElement.textContent = data.numberOfRooms;

  // Update special amenities
  const amenitiesElement = document.querySelector('.card-title.amenities');
  amenitiesElement.textContent = 'Special Amenities';
  const amenitiesTextElement = document.querySelector('.card-text.amenities');
  amenitiesTextElement.textContent = data.specialAmenities;

  // Update carousel images
  const carouselInner = document.querySelector('.carousel-inner');
  data.images.forEach((image, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = image;
    img.alt = 'Image ' + (index + 1);
    img.classList.add('d-block', 'w-100');
    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });
})
.catch(error => console.error(error));