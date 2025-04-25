function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours) as 12

  const timeString = `${hours}:${minutes} ${ampm}`;

  document.getElementById('current-time').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately when the page loads
updateTime();

 // Get the current date.
 const currentDate = new Date();

 // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
 const dayOfWeek = currentDate.getDay();
 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const dayName = days[dayOfWeek];

 // Format the date as MM/DD/YYYY (American format)
 const formattedDate = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();

 // Display the formatted date with the day of the week.
 document.getElementById("dateDisplay").textContent = dayName + ", " + formattedDate;

 const carouselSlide = document.querySelector('.carousel-slide');
 const carouselImages = document.querySelectorAll('.carousel-image');

 let counter = 0;
 const slideWidth = carouselImages[0].clientWidth;

 // Initial position
 carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

 function nextSlide() {
     if (counter >= carouselImages.length - 1) return;
     counter++;
     carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
 }

 // You can add previousSlide() functionality similarly

 // For a simple auto-scroll (optional):
 setInterval(nextSlide, 3000); // Change slide every 3 seconds