// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll and Section Blur Effect
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;
        
        // Determine current section
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
        
        // Apply blur effect to sections that are scrolled past
        if (window.pageYOffset > sectionBottom - 100) {
            section.classList.add('blur-section');
        } else {
            section.classList.remove('blur-section');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-item')) {
                const skillBar = entry.target.querySelector('.skill-bar');
                if (skillBar) {
                    const width = skillBar.style.width;
                    skillBar.style.setProperty('--skill-width', width);
                    entry.target.classList.add('animate');
                }
            }
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Dynamic Skills Organization
const skillsData = {
    frontend: [
        { name: 'HTML/CSS', icon: 'fa-check-circle' },
        { name: 'JavaScript', icon: 'fa-check-circle' },
        { name: 'Boostrap', icon: 'fa-check-circle' },
        { name: 'React', icon: 'fa-check-circle' },
        { name: 'Tailwind CSS', icon: 'fa-check-circle' }
    ],
    backend: [
        { name: 'C', icon: 'fa-check-circle' },
        { name: 'Java', icon: 'fa-check-circle' },
        { name: 'Python || FastAPI', icon: 'fa-check-circle' },
        { name: 'PHP || Laravel', icon: 'fa-check-circle' },
        { name: 'C#', icon: 'fa-check-circle' },
        { name: 'MySQL', icon: 'fa-check-circle' },
        { name: 'MSSQL', icon: 'fa-check-circle' },
        { name: 'PostgreSQL', icon: 'fa-check-circle' }
    ],
    tools: [
        { name: 'Git/GitHub', icon: 'fa-check-circle' },
        { name: 'VS Code', icon: 'fa-check-circle' },
        { name: 'Figma', icon: 'fa-check-circle' },
        { name: 'Hostinger', icon: 'fa-check-circle' },
    ]
};

const organizeSkillsInColumns = (skills, containerId, colorClass, borderClass) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const maxPerColumn = 4;
    const totalColumns = Math.ceil(skills.length / maxPerColumn);

    container.innerHTML = '';

    for (let col = 0; col < totalColumns; col++) {
        const columnDiv = document.createElement('div');
        columnDiv.className = `bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition border ${borderClass}`;
        
        const skillsList = document.createElement('div');
        skillsList.className = 'space-y-3';

        const startIdx = col * maxPerColumn;
        const endIdx = Math.min(startIdx + maxPerColumn, skills.length);

        for (let i = startIdx; i < endIdx; i++) {
            const skill = skills[i];
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            
            skillItem.innerHTML = `
                <span class="inline-block px-4 py-2 bg-gray-800 ${colorClass} rounded-lg border hover:scale-105 transition w-full text-center">
                    <i class="fas ${skill.icon} mr-2"></i>${skill.name}
                </span>
            `;
            
            skillsList.appendChild(skillItem);
        }

        columnDiv.appendChild(skillsList);
        container.appendChild(columnDiv);
    }
};

// Initialize all skill sections
const initializeSkills = () => {
    organizeSkillsInColumns(
        skillsData.frontend, 
        'frontend-skills', 
        'text-cyan-400 border-cyan-500/50 hover:border-cyan-400',
        'border-cyan-500/30'
    );
    organizeSkillsInColumns(
        skillsData.backend, 
        'backend-skills', 
        'text-green-400 border-green-500/50 hover:border-green-400',
        'border-green-500/30'
    );
    organizeSkillsInColumns(
        skillsData.tools, 
        'tools-skills', 
        'text-purple-400 border-purple-500/50 hover:border-purple-400',
        'border-purple-500/30'
    );
};

// Initialize skills on page load
initializeSkills();

// Dynamic Certification Count
const updateCertificationCount = () => {
    const totalCerts = document.querySelectorAll('#certifications-grid > div').length;
    const certCountElement = document.querySelector('.text-center.animate-on-scroll h4');
    
    if (certCountElement) {
        certCountElement.textContent = `${totalCerts}`;
    }
    
    // Update Courses Completed to match Certifications
    const projectCountElements = document.querySelectorAll('.text-center.animate-on-scroll h4');
    if (projectCountElements.length >= 2) {
        projectCountElements[1].textContent = `${totalCerts}`;
    }
};

// Dynamic Projects Count
const updateProjectsCount = () => {
    const totalProjects = document.querySelectorAll('#projects-grid > div').length;
    const projectCountElements = document.querySelectorAll('.text-center.animate-on-scroll h4');
    
    // Find the Projects Completed stat (3rd element)
    if (projectCountElements.length >= 3) {
        projectCountElements[2].textContent = `${totalProjects}`;
    }
};

// Call after page load
window.addEventListener('load', () => {
    updateCertificationCount();
    updateProjectsCount();
});

// Observe skill items for bar animation
document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.className = 'mt-4 text-center text-green-600 font-semibold';
        formMessage.classList.remove('hidden');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }, 2000);
    
    // For actual implementation, use fetch or axios:
    /*
    try {
        const response = await fetch('your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            contactForm.reset();
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'mt-4 text-center text-green-600 font-semibold';
            formMessage.classList.remove('hidden');
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        formMessage.className = 'mt-4 text-center text-red-600 font-semibold';
        formMessage.classList.remove('hidden');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
    */
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#home');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Typing effect for hero section (optional enhancement)
const typeText = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Initialize typing effect on page load (uncomment to use)
/*
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('#home h1 span');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeText(heroTitle, originalText, 100);
    }
});
*/

// Add scroll-to-top button
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition opacity-0 pointer-events-none z-50';
    button.id = 'scroll-top';
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.pointerEvents = 'auto';
        } else {
            button.style.opacity = '0';
            button.style.pointerEvents = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Initialize scroll-to-top button
createScrollTopButton();

// Toggle Projects Show More/Less
const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
const hiddenProjects = document.querySelectorAll('.project-item-hidden');

if (toggleProjectsBtn) {
    // Hide button if there are no hidden projects
    if (hiddenProjects.length === 0) {
        toggleProjectsBtn.style.display = 'none';
    }
}

if (toggleProjectsBtn && hiddenProjects.length > 0) {
    let projectsExpanded = false;
    
    toggleProjectsBtn.addEventListener('click', () => {
        projectsExpanded = !projectsExpanded;
        
        hiddenProjects.forEach(project => {
            if (projectsExpanded) {
                project.classList.remove('hidden');
                setTimeout(() => {
                    project.classList.add('show');
                }, 10);
            } else {
                project.classList.remove('show');
                setTimeout(() => {
                    project.classList.add('hidden');
                }, 300);
            }
        });
        
        // Update button text and icon
        const icon = toggleProjectsBtn.querySelector('i');
        if (projectsExpanded) {
            icon.className = 'fas fa-chevron-up mr-2';
            toggleProjectsBtn.innerHTML = '<i class="fas fa-chevron-up mr-2"></i> Show Less Projects';
        } else {
            icon.className = 'fas fa-chevron-down mr-2';
            toggleProjectsBtn.innerHTML = '<i class="fas fa-chevron-down mr-2"></i> Show More Projects';
        }
    });
}

// Toggle Certifications Show More/Less
const toggleCertsBtn = document.getElementById('toggle-certs-btn');
const hiddenCerts = document.querySelectorAll('.cert-item-hidden');

if (toggleCertsBtn) {
    // Hide button if there are no hidden certifications
    if (hiddenCerts.length === 0) {
        toggleCertsBtn.style.display = 'none';
    }
}

if (toggleCertsBtn && hiddenCerts.length > 0) {
    let certsExpanded = false;
    
    toggleCertsBtn.addEventListener('click', () => {
        certsExpanded = !certsExpanded;
        
        hiddenCerts.forEach(cert => {
            if (certsExpanded) {
                cert.classList.remove('hidden');
                setTimeout(() => {
                    cert.classList.add('show');
                }, 10);
            } else {
                cert.classList.remove('show');
                setTimeout(() => {
                    cert.classList.add('hidden');
                }, 300);
            }
        });
        
        // Update certification count
        updateCertificationCount();
        
        // Update button text and icon
        const icon = toggleCertsBtn.querySelector('i');
        if (certsExpanded) {
            icon.className = 'fas fa-chevron-up mr-2';
            toggleCertsBtn.innerHTML = '<i class="fas fa-chevron-up mr-2"></i> Show Less Certifications';
        } else {
            icon.className = 'fas fa-chevron-down mr-2';
            toggleCertsBtn.innerHTML = '<i class="fas fa-chevron-down mr-2"></i> Show More Certifications';
        }
    });
}

// Console message for developers
console.log('%c👋 Hello Developer!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #4b5563;');

// Prevent console errors for placeholder images
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
    }
}, true);
