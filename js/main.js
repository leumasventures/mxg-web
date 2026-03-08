
document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("ourService");
    const fullText = paragraph.innerText;
    const truncatedText = fullText.substring(0, Math.floor(fullText.length * 0.3)) + "...";
    
    paragraph.innerText = truncatedText;

    const button = document.createElement("button");
    button.innerText = "Read More";
    button.style.display = "block";
    button.style.marginTop = "10px";
    button.style.cursor = "pointer";
    button.style.padding = "5px 10px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";

    let isExpanded = false;
    button.addEventListener("click", function () {
        if (isExpanded) {
            paragraph.innerText = truncatedText;
            button.innerText = "Read More";
        } else {
            paragraph.innerText = fullText;
            button.innerText = "Read Less";
        }
        isExpanded = !isExpanded;
    });
    
    paragraph.insertAdjacentElement("afterend", button);
});

document.addEventListener("DOMContentLoaded", function () {
    let paragraph = document.getElementById("ourService1");
    let fullText = paragraph.innerText;
    let shortText = fullText.substring(0, Math.floor(fullText.length * 0.3)) + "...";
    
    paragraph.innerText = shortText;
    
    let button = document.createElement("button");
    button.innerText = "Read More";
    button.style.display = "block";
    button.style.marginTop = "10px";
    button.style.cursor = "pointer";
    button.style.padding = "5px 10px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    
    button.addEventListener("click", function () {
        if (paragraph.innerText === shortText) {
            paragraph.innerText = fullText;
            button.innerText = "Read Less";
        } else {
            paragraph.innerText = shortText;
            button.innerText = "Read More";
        }
    });
    
    paragraph.parentNode.appendChild(button);
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all elements
    let elements = document.querySelectorAll("p, span, div, a, td, li"); 

    elements.forEach(element => {
        if (element.innerHTML.includes("maxgiohealth@gmail.com")) {
            element.innerHTML = element.innerHTML.replace(
                /maxgiohealth@gmail.com/g,
                '<a href="mailto:maxgiohealth@gmail.com" style="text-decoration: none; color: inherit;">maxgiohealth@gmail.com</a>'
            );
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let paragraph = document.getElementById("ourService2");
    let fullText = paragraph.innerText;
    let shortText = fullText.substring(0, Math.floor(fullText.length * 0.3)) + "...";
    
    paragraph.innerText = shortText;
    
    let button = document.createElement("button");
    button.innerText = "Read More";
    button.style.display = "block";
    button.style.marginTop = "10px";
    button.style.cursor = "pointer";
    button.style.padding = "5px 10px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    
    button.addEventListener("click", function () {
        if (paragraph.innerText === shortText) {
            paragraph.innerText = fullText;
            button.innerText = "Read Less";
        } else {
            paragraph.innerText = shortText;
            button.innerText = "Read More";
        }
    });
    
    paragraph.parentNode.appendChild(button);
});


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);


emailjs.send("service_jo0hmzg", "template_xgog5i8", {
    to_email: "maxgiohealth@gmail.com",
    user_name: name,
    user_email: email,
    selected_service: service,
    selected_doctor: doctor,
    appointment_date: date,
    appointment_time: time
}).then(function(response) {
    console.log("EmailJS Success:", response.status, response.text);
    alert("Appointment booked successfully! A confirmation email has been sent.");
    document.getElementById("appointmentForm").reset();
}, function(error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send email via EmailJS: " + JSON.stringify(error));
});