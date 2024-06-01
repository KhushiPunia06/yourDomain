

$(document).ready(function() {
  // Show the modal when 'Contact Us' button is clicked
  $('#contactUsBtn').click(function() {
      $('#contactFormModal').modal('show');
  });

  // Change project image on clicking project item
  $('#projectContent .project-item').click(function() {
      var newImage = $(this).data('image');
      $('#projectImage').attr('src', newImage);
  });

  // Image hover effect for 'What We Do' section
  $('#carouselExampleIndicators .carousel-item img').hover(function() {
      $(this).css('opacity', '0.7');
      $(this).after('<div class="hover-effect"><button class="btn btn-primary read-more">Read more</button></div>');
  }, function() {
      $(this).css('opacity', '1');
      $('.hover-effect').remove();
  });

  // Open 'fylehq.com' in new tab when 'Read more' button is clicked
  $(document).on('click', '.read-more', function() {
      window.open('https://www.fylehq.com', '_blank');
  });
});


$(document).ready(function(){
    $('.project-item').hover(function(){
        var newImage = $(this).data('image');
        $('#projectImage').attr('src', newImage);
    });
});










document.addEventListener("DOMContentLoaded", function() {
    let dots = document.querySelectorAll(".dot");
    let images = document.querySelectorAll(".image-container img");

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showImage(index);
        });
    });

    images.forEach((image, index) => {
        image.addEventListener("mouseenter", () => {
            showReadMore(index);
        });
    });

    function showImage(index) {
        let images = document.querySelectorAll(".image-container img");
        let dots = document.querySelectorAll(".dot");

        images.forEach(image => {
            image.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        images[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function showReadMore(index) {
        let hoverContents = document.querySelectorAll(".hover-content");

        hoverContents.forEach(content => {
            content.style.transform = "translateY(100%)";
        });

        hoverContents[index].style.transform = "translateY(0)";
    }
});






document.addEventListener("DOMContentLoaded", function() {
    let redBox = document.getElementById("redBox");

    // Function to check if user has scrolled to the bottom
    function isBottom() {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    // Function to show the red box when user reaches the bottom
    function showRedBox() {
        if (isBottom()) {
            redBox.style.display = "block";
        } else {
            redBox.style.display = "none";
        }
    }

    // Show red box when user scrolls
    window.addEventListener("scroll", showRedBox);

    // Show red box initially if the page content is shorter than the viewport
    showRedBox();
});
