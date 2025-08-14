// Portfolio Website JavaScript

// Portfolio Website JavaScript

// Data for projects

const projectsData = [
    {
        title: "Event Management System – GitHub",
        description: "A comprehensive event planning platform using MERN. Users can create and manage events, while vendors handle service requests. Features include AI-powered smart checklists, Google OAuth login, Gmail API notifications, and AI integration with contacts. Supports vendor assignment, budgeting, and collaborative task tracking for smooth event management.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "OAuth", "Gmail API"],
        liveUrl: "#",
        githubUrl: "https://github.com/Pdiya13/Evenza",
        category: "Web Development"
      },
    {
        title: "Blood Bank Management System",
        description: "A secure and efficient blood bank platform built with Java and Spring Boot. Features role-based access for donors, recipients, and admins. Implements donation tracking, smart inventory management with automatic stock updates by blood group, compatibility checks, and alternative blood type suggestions to ensure timely and safe blood distribution.",
        image: "https://images.unsplash.com/photo-1588776814546-d1c9c74a92b0?w=600&h=400&fit=crop",
        technologies: ["Java", "Spring Boot", "Hibernate", "Spring Security", "MySQL"],
        liveUrl: "#",
        githubUrl: "https://github.com/Pdiya13/Blood_bank_system",
        category: "Healthcare / Web Development"
    },
    {
        title: "Course Selling App",
        description: "A robust course selling platform built with Node.js and Express backend, featuring JWT authentication and role-based access control for admins and users. Supports course creation, purchase management, and detailed user purchase history tracking. Includes a React frontend for seamless course browsing and user interaction.",
        image: "https://images.unsplash.com/photo-1581093588401-4c39d84c97c8?w=600&h=400&fit=crop",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "React"],
        liveUrl: "#",
        githubUrl: "https://github.com/Pdiya13/course_selling",
        category: "Web Development / E-Learning"
    },
    {
        title: "Online Test Management System – GitHub",
        description: "An online test management system built with Python, Django, and SQLite. Features include student registration, subject-wise test selection, instant result tracking with detailed answer feedback, and an admin panel for managing tests.",
        technologies: ["Python", "Django", "SQLite", "HTML", "CSS"],
        liveUrl: "#",
        githubUrl: "#",
        category: "Web Development"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeProjects();
    initializeNavigation();
    initializeAnimations();
    initializeScrollEffects();
    initializeAchievements();
    initializeContactForm();
});



// Initialize Projects Section
function initializeProjects() {
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card" data-aos="fade-up">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <a href="${project.liveUrl}" class="btn btn-primary">
                        <i class="fas fa-eye"></i>
                        <span>Live Demo</span>
                    </a>
                    <a href="${project.githubUrl}" class="btn btn-secondary">
                        <i class="fab fa-github"></i>
                        <span>Code</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Navigation
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when a nav link is clicked (use capture for dynamic hash links)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            const clickedInsideToggle = navToggle.contains(e.target);
            const clickedInsideMenu = navMenu.contains(e.target);
            if (!clickedInsideToggle && !clickedInsideMenu) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    });
}

// Initialize Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Hero section should be visible immediately
    document.querySelector('#home').style.opacity = '1';
    document.querySelector('#home').style.transform = 'translateY(0)';
    
    // Initialize about section visual effects
    initializeAboutVisualEffects();
}

// Initialize About Section Visual Effects
function initializeAboutVisualEffects() {
    const codeWindows = document.querySelectorAll('.code-window');
    
    // Add staggered entrance animation
    codeWindows.forEach((window, index) => {
        window.style.opacity = '0';
        window.style.transform = 'translateX(-50px)';
        window.style.transition = 'all 0.8s ease';
        
        // Stagger the animations
        setTimeout(() => {
            window.style.opacity = '1';
            window.style.transform = 'translateX(0)';
        }, 200 * (index + 1));
    });
    
    // Add hover effects and interactive animations
    codeWindows.forEach(window => {
        // Add click effect to expand/collapse
        window.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
        
        // Add typing effect to code content
        const codeContent = window.querySelector('code');
        if (codeContent) {
            const originalText = codeContent.innerHTML;
            codeContent.innerHTML = '';
            
            // Type out the text character by character
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    codeContent.innerHTML += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }
        
        // Add floating animation
        window.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        window.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Initialize Scroll Effects
function initializeScrollEffects() {
    // Parallax effect for floating shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Counter animation for stats
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to skill cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.skill-card')) {
            e.target.closest('.skill-card').style.transform = 'translateY(-5px) scale(1.02)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.skill-card')) {
            e.target.closest('.skill-card').style.transform = 'translateY(0) scale(1)';
        }
    });
    
    // Add typing effect to hero title
    const titleMain = document.querySelector('.title-main');
    if (titleMain) {
        const text = titleMain.textContent;
        titleMain.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                titleMain.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Initialize contact form functionality
    initializeContactForm();
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations can go here
}, 16)); // 60fps

// Contact Form Functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();
        const subject = contactForm.querySelector('#subject').value.trim();
        const message = contactForm.querySelector('#message').value.trim();
        
        // Enhanced validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-send');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual backend integration)
        setTimeout(() => {
            // Hide form and show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'flex';
            
            // Log the form data (in real implementation, send to backend)
            console.log('Contact form submitted:', { name, email, subject, message });
            
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Show success notification
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form for future use
            contactForm.reset();
            
            // Optionally, show form again after some time
            setTimeout(() => {
                contactForm.style.display = 'flex';
                formSuccess.style.display = 'none';
            }, 8000); // Show form again after 8 seconds
        }, 1500); // Simulate 1.5 second delay
    });
    
    // Add input focus effects and validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            this.style.borderColor = '#ff6b35';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            this.style.borderColor = 'transparent';
            
            // Validate on blur
            validateField(this);
        });
        
        // Real-time validation
        input.addEventListener('input', function() {
            validateField(this);
        });
    });
    
    // Field validation function
    function validateField(field) {
        const value = field.value.trim();
        const fieldType = field.type;
        const fieldName = field.name;
        
        // Remove existing error styling
        field.classList.remove('error');
        field.style.borderColor = 'transparent';
        
        // Check if field is required and empty
        if (field.hasAttribute('required') && !value) {
            field.classList.add('error');
            field.style.borderColor = '#ef4444';
            return false;
        }
        
        // Email validation
        if (fieldType === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                field.style.borderColor = '#ef4444';
                return false;
            }
        }
        
        return true;
    }
    
    // Add form reset functionality
    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'btn btn-outline';
    resetBtn.innerHTML = '<i class="fas fa-undo"></i><span>Reset Form</span>';
    resetBtn.style.marginTop = '1rem';
    resetBtn.style.width = '100%';
    
    resetBtn.addEventListener('click', function() {
        contactForm.reset();
        formInputs.forEach(input => {
            input.classList.remove('error');
            input.style.borderColor = 'transparent';
        });
        contactForm.style.display = 'flex';
        formSuccess.style.display = 'none';
    });
    
    // Add reset button after the form
    contactForm.appendChild(resetBtn);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Initialize Achievements Section
function initializeAchievements() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe each achievement card
    achievementCards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
        
        // Observe the card
        observer.observe(card);
    });

    // Add counter animation for stats
    const statBadges = document.querySelectorAll('.stat-badge');
    statBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Add icon animation
    const achievementIcons = document.querySelectorAll('.achievement-icon');
    achievementIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(5deg) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    });
}
