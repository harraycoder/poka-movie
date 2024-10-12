
    var counter = 1;
    setInterval(function () {
      document.getElementById('slide' + counter).checked = true;
      counter++;
      if (counter > 5) {
        counter = 1;
      }
    }, 2000);


    document.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add show class to make it visible
          } else {
            entry.target.classList.remove('show'); // Remove show class to hide it again
          }
        });
      }, {
        threshold: 0.1 // Adjust to control when the animation starts
      });

      const hiddenElements = document.querySelectorAll('.hidden');
      const elements = document.querySelectorAll('.tn');
      const hiddenElements1 = document.querySelectorAll('.hidden1'); // Select all elements with hidden class
      const hiddenElements2 = document.querySelectorAll('.hidden2');
      hiddenElements.forEach(el => observer.observe(el)); // Observe each hidden element
      hiddenElements1.forEach(el => observer.observe(el)); // Observe each hidden element
      hiddenElements2.forEach(el => observer.observe(el));
      elements.forEach(el => observer.observe(el));


      document.addEventListener('scroll', function () {
        const items = document.querySelectorAll('.dde');
        const windowHeight = window.innerHeight;

        items.forEach(item => {
          const itemPosition = item.getBoundingClientRect().top;

          // Check if the item is in the viewport
          if (itemPosition < windowHeight && itemPosition >= 0) {
            item.classList.add('visible'); // Add visible class when in view
          } else {
            item.classList.remove('visible'); // Remove visible class when out of view
          }
        });


      });


      document.addEventListener('scroll', function () {
        const items = document.querySelectorAll('.item1');
        const windowHeight = window.innerHeight;

        items.forEach((item, index) => {
          const itemPosition = item.getBoundingClientRect().top;

          // Check if the item is in the viewport
          if (itemPosition < windowHeight && itemPosition >= 0) {
            item.classList.add('visible'); // Add visible class when in view
            // Add left or right class based on index
            if (index < 5) {
              item.classList.add('left'); // First five items slide from left
            } else {
              item.classList.add('right'); // Last five items slide from right
            }
          } else {
            item.classList.remove('visible'); // Remove visible class when out of view
            item.classList.remove('left', 'right'); // Reset classes
          }
        });
      });


      document.addEventListener('scroll', function () {
        const boxes = document.querySelectorAll('.box');
        const windowHeight = window.innerHeight;

        boxes.forEach(box => {
          const boxPosition = box.getBoundingClientRect().top;

          // Check if the box is in the viewport
          if (boxPosition < windowHeight && boxPosition >= 0) {
            box.classList.add('visible'); // Add 'visible' class when in view
          } else {
            box.classList.remove('visible'); // Remove 'visible' class when out of view
          }
        });
      });

      const slides = document.getElementById('carouselSlides');
      const nextBtn = document.getElementById('nextBtn');
      const prevBtn = document.getElementById('prevBtn');
      let currentIndex = 0;  // Start with the first image

      // Total number of original slides
      const totalSlides = slides.children.length - 1; // Subtract the cloned slide
      const slidesToShow = 5;  // Show 5 images at a time
      const slideWidth = 100 / totalSlides; // Percentage width for each slide

      // Set the initial position of the carousel
      slides.style.transform = `translateX(0%)`;

      nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides) {
          currentIndex++;
        } else {
          currentIndex = 1;  // Skip to the first real slide after the last cloned slide
        }
        updateCarousel();
      });

      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = totalSlides - 1;  // Jump to the last real slide
        }
        updateCarousel();
      });

      function updateCarousel() {
        slides.style.transition = 'transform 0.5s ease';
        slides.style.transform = `translateX(-${(currentIndex * slideWidth)}%)`;
      }


      const slides1 = document.getElementById('carouselSlides1');
      const nextBtn1 = document.getElementById('nextBtn1');
      const prevBtn1 = document.getElementById('prevBtn1');
      let currentIndex1 = 0;  // Start with the first image

      // Total number of slides
      const totalSlides1 = slides1.children.length;
      const slidesToShow1 = 5;  // Show 5 images at a time
      const maxIndex1 = totalSlides1 - slidesToShow1;  // Maximum index we can move to
      const slideWidth1 = 100 / slidesToShow1; // Percentage width for each slide

      // Set the initial position of the carousel
      slides1.style.transform = `translateX(0%)`;

      nextBtn1.addEventListener('click', () => {
        if (currentIndex1 < maxIndex1) {
          currentIndex1++;
        } else {
          currentIndex1 = 0;  // Loop back to the first set of images
        }
        updateCarousel1();
      });

      prevBtn1.addEventListener('click', () => {
        if (currentIndex1 > 0) {
          currentIndex1--;
        } else {
          currentIndex1 = maxIndex1;  // Jump to the last set of images
        }
        updateCarousel1();
      });

      function updateCarousel1() {
        slides1.style.transition = 'transform 0.5s ease';
        slides1.style.transform = `translateX(-${(currentIndex1 * slideWidth1)}%)`;
      }

    });

    function toggleDetails(index) {
      const details = document.getElementById(`details-${index}`);
      const arrow = details.previousElementSibling;

      // Collapse all other cards
      const allDetails = document.querySelectorAll('.movie-details1');
      allDetails.forEach((detail, idx) => {
        if (detail.id !== `details-${index}`) {
          detail.classList.remove('expanded');
          detail.previousElementSibling.textContent = '⬇';
        }
      });

      // Toggle selected card
      if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        arrow.textContent = '⬇';
      } else {
        details.classList.add('expanded');
        arrow.textContent = '⬆';
      }
    }

    function toggleAnswer(index) {
      const faqItem = document.getElementsByClassName('faq-item')[index];
      const faqIcon = document.getElementById(`icon-${index}`);

      // Toggle active class
      faqItem.classList.toggle('active');

      // Change the icon between "+" and "×"
      if (faqItem.classList.contains('active')) {
        faqIcon.textContent = '×';
      } else {
        faqIcon.textContent = '+';
      }
    }

