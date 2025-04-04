var swiper = new Swiper('.main-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.icon-arrow-right',  /* Right arrow */
      prevEl: '.icon-arrow-left',   /* Left arrow */
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Other Swiper options if needed
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    navbar.style.opacity = "0";
    navbar.style.transform = "translateY(20px)";
  
    setTimeout(() => {
      navbar.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      navbar.style.opacity = "1";
      navbar.style.transform = "translateY(0)";
    }, 300); // Delay of 300ms
  });
  








  document.addEventListener('DOMContentLoaded', function() {
    const skills = [
      { percentage: 75, element: document.querySelectorAll('.foreground')[0], textElement: document.querySelectorAll('.percentage')[0] },
      { percentage: 90, element: document.querySelectorAll('.foreground')[1], textElement: document.querySelectorAll('.percentage')[1] },
      { percentage: 85, element: document.querySelectorAll('.foreground')[2], textElement: document.querySelectorAll('.percentage')[2] },
      { percentage: 60, element: document.querySelectorAll('.foreground')[3], textElement: document.querySelectorAll('.percentage')[3] },
    ];
  
    skills.forEach((skill, index) => {
      // Calculate dashoffset based on percentage
      const offset = 339.292 - (339.292 * skill.percentage / 100);
      
      // Animate stroke-dashoffset
      skill.element.style.transition = "stroke-dashoffset 1s ease";
      skill.element.style.strokeDashoffset = offset;
  
      // Update percentage text
      let counter = 0;
      const interval = setInterval(() => {
        if (counter <= skill.percentage) {
          skill.textElement.textContent = `${counter}%`;
          counter++;
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust speed of percentage animation
    });
  });
  