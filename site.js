document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your public key
    if (window.emailjs) {
        emailjs.init("z5GnWyzfHhnIGqqZg");
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });             
    });

    // Form submission with EmailJS
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    const submitButton = document.getElementById('submit-button');

    if (contactForm && submitButton && formSuccess && formError) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Change button text and disable it
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Prepare template parameters
            const templateParams = {
                name: document.getElementById('name')?.value || '',
                email: document.getElementById('email')?.value || '',
                phone: document.getElementById('phone')?.value || '',
                service: document.getElementById('service')?.value || '',
                message: document.getElementById('message')?.value || ''
            };

            // Send email using EmailJS with your service ID and template ID
            emailjs.send('service_punqp2x', 'template_h8vcri7', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    formSuccess.classList.remove('hidden');
                    formError.classList.add('hidden');
                    contactForm.reset();

                    // Reset button
                    submitButton.textContent = 'Send Message';
                    submitButton.disabled = false;

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formSuccess.classList.add('hidden');
                    }, 5000);
                }, function (error) {
                    console.log('FAILED...', error);
                    formError.classList.remove('hidden');
                    formSuccess.classList.add('hidden');

                    // Reset button
                    submitButton.textContent = 'Send Message';
                    submitButton.disabled = false;

                    // Hide error message after 5 seconds
                    setTimeout(() => {
                        formError.classList.add('hidden');
                    }, 5000);
                });
        });
    }
});