// Initialize EmailJS with your public key
(function () {
    emailjs.init("z5GnWyzfHhnIGqqZg");
})();

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
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

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Change button text and disable it
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Prepare template parameters
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
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
    }
    );

    (
        function () {
            function c() {
                var b = a.contentDocument || a.contentWindow.document;
                if (b) {
                    var d = b.createElement('script');
                    d.innerHTML = "window.__CF$cv$params={r:'949a2b05c4cd7b1b',t:'MTc0ODkwMTA0NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
                    b.getElementsByTagName('head')[0]
                        .appendChild(d)
                }
            }

            if (document.body) {
                var a = document.createElement('iframe');
                a.height = 1; a.width = 1;
                a.style.position = 'absolute';
                a.style.top = 0;
                a.style.left = 0;
                a.style.border = 'none';
                a.style.visibility = 'hidden';
                document.body.appendChild(a);
                if ('loading' !== document.readyState) c();
                else if (window.addEventListener)
                    document.addEventListener('DOMContentLoaded', c);
                else {
                    var e = document.onreadystatechange || function () { };
                    document.onreadystatechange = function (b) {
                        e(b);
                        'loading' !== document.readyState && (document.onreadystatechange = e, c())
                    }
                }
            }
        }
    );
});



// Form submission with EmailJS
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');
const submitButton = document.getElementById('submit-button');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Change button text and disable it
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Prepare template parameters
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
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
}
);

(
    function () {
        function c() {
            var b = a.contentDocument || a.contentWindow.document;
            if (b) {
                var d = b.createElement('script');
                d.innerHTML = "window.__CF$cv$params={r:'949a2b05c4cd7b1b',t:'MTc0ODkwMTA0NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
                b.getElementsByTagName('head')[0]
                    .appendChild(d)
            }
        }

        if (document.body) {
            var a = document.createElement('iframe');
            a.height = 1; a.width = 1;
            a.style.position = 'absolute';
            a.style.top = 0;
            a.style.left = 0;
            a.style.border = 'none';
            a.style.visibility = 'hidden';
            document.body.appendChild(a);
            if ('loading' !== document.readyState) c();
            else if (window.addEventListener)
                document.addEventListener('DOMContentLoaded', c);
            else {
                var e = document.onreadystatechange || function () { };
                document.onreadystatechange = function (b) {
                    e(b);
                    'loading' !== document.readyState && (document.onreadystatechange = e, c())
                }
            }
        }
    }
);