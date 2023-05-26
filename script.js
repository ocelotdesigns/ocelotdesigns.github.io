// JavaScript to close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

var slides = document.querySelectorAll('.slideshow img');
        var currentSlide = 0;

        function showSlide(n) {
            if (n < 0) {
                currentSlide = slides.length - 1;
            } else if (n >= slides.length) {
                currentSlide = 0;
            }

            for (var i = 0; i < slides.length; i++) {
                slides[i].style.opacity = 0;
            }

            slides[currentSlide].style.opacity = 1;
        }

        function nextSlide() {
            currentSlide++;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide--;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 5000);


        var slogans = [
            'INSPIRING SIGNAGE',
            'STRIKING GRAPHICS',
            'SEAMLESS CLADDING',
            'ENGAGING WEB SOLUTIONS'
        ];

        var sloganIndex = 0;
        var sloganElement = document.getElementById('slogan');
        var currentSlogan = '';
        var currentCharIndex = 0;

        function typeSlogan() {
            var currentWord = slogans[sloganIndex];
            currentSlogan += currentWord[currentCharIndex];
            sloganElement.textContent = 'Unlock Your Vision with Ocelot Designs: ' + currentSlogan;

            currentCharIndex++;
            if (currentCharIndex >= currentWord.length) {
                currentCharIndex = 0;
                sloganIndex = (sloganIndex + 1) % slogans.length;
                currentSlogan = '';
                setTimeout(typeSlogan, 2000);
            } else {
                setTimeout(typeSlogan, 100);
            }
        }

        typeSlogan();

        function orderNow() {
            Swal.fire({
                title: 'Choose an option:',
                input: 'select',
                inputOptions: {
                    '1': 'Pylon Signage',
                    '2': 'O.W. Signage',
                    '3': 'Digital Signage'
                },
                inputPlaceholder: 'Select an option',
                showCancelButton: true,
                confirmButtonText: 'Order',
                cancelButtonText: 'Cancel',
                inputValidator: (value) => {
                    if (!value) {
                        return 'You must select an option';
                    }
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    var order = result.value;
                    var message = '';
                    if (order === '1') {
                        message = 'I want to order Pylon Signage';
                    } else if (order === '2') {
                        message = 'I want to order O.W. Signage';
                    } else if (order === '3') {
                        message = 'I want to order Digital Signage';
                    }

                    var phoneNumber = '+2347048128511';
                    var url = 'https://wa.me/+2347048128511?text=' + encodeURIComponent(message);
                    window.open(url);
                }
            });
        }

        function chooseOption(category, options) {
            let promptMessage = `Choose an option for ${category}:\n\n`;
            options.forEach((option, index) => {
                promptMessage += `${index + 1}. ${option}\n`;
            });
    
            Swal.fire({
                title: 'Select an Option',
                html: promptMessage,
                icon: 'info',
                input: 'number',
                inputAttributes: {
                    min: 1,
                    max: options.length,
                    step: 1
                },
                showCancelButton: true,
                confirmButtonText: 'Send',
                cancelButtonText: 'Cancel',
                reverseButtons: true,
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (value && value >= 1 && value <= options.length) {
                        return Promise.resolve();
                    }
                    return Promise.reject('Invalid option');
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const chosenIndex = parseInt(result.value);
                    const chosenOption = options[chosenIndex - 1];
                    const message = `Selected option for ${category}: ${chosenOption}`;
                    const phoneNumber = "+2347048128511";
                    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                    window.open(whatsappLink);
                }
            });
        }

        function openModal(imageSrc) {
            var modal = document.getElementById("image-modal");
            var modalImage = modal.querySelector("#full-image");
        
            modal.style.display = "flex";
            modalImage.src = imageSrc;
          }
        
          function closeModal() {
            var modal = document.getElementById("image-modal");
            modal.style.display = "none";
          }

          function openModal(imageSrc) {
            var modal = document.getElementById("image-modal");
            var modalImage = modal.querySelector("#full-image");
        
            modal.style.display = "flex";
            modalImage.src = imageSrc;
          }
        
          function closeModal() {
            var modal = document.getElementById("image-modal");
            modal.style.display = "none";
          }

        