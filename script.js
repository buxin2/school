/* ========================================
   ROBOTICS EDUCATOR PORTFOLIO - JAVASCRIPT
   Interactive Features & Functionality
   ======================================== */

// ========== PROJECT DATA ==========
// You can easily edit project details here
const projectData = {
    healthcare: {
        title: "AI Healthcare Robot",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
        description: "An autonomous mobile robot designed for healthcare facilities, capable of patient monitoring, medication delivery, and assistance tasks. Integrates computer vision for navigation and person detection.",
        technologies: [
            "ROS (Robot Operating System)",
            "Computer Vision (OpenCV)",
            "Deep Learning (TensorFlow)",
            "LIDAR & Ultrasonic Sensors",
            "Raspberry Pi 4",
            "Python & C++"
        ],
        features: [
            "Autonomous navigation in hospital environments",
            "Real-time patient vital signs monitoring",
            "Medication tray delivery system",
            "Voice interaction and alerts",
            "Emergency detection and response",
            "Integration with hospital management systems"
        ],
        learningOutcomes: [
            "Implementing SLAM for indoor navigation",
            "Sensor fusion for reliable obstacle avoidance",
            "Building safety-critical robotic systems",
            "Medical device compliance and standards",
            "Human-robot interaction design",
            "System integration and testing"
        ]
    },
    assistant: {
        title: "Autonomous Assistant Robot",
        image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=1200&q=80",
        description: "A versatile mobile robot platform with autonomous navigation, voice control, and object manipulation capabilities. Designed as a comprehensive teaching platform for robotics fundamentals through advanced topics.",
        technologies: [
            "ESP32 Microcontroller",
            "Ultrasonic & IR Sensors",
            "Voice Recognition Module",
            "DC Motors with Encoders",
            "Camera Module",
            "Arduino IDE & Python"
        ],
        features: [
            "Autonomous pathfinding and navigation",
            "Dynamic obstacle avoidance",
            "Voice-controlled operation",
            "Object detection and tracking",
            "Line following and maze solving",
            "WiFi remote monitoring and control"
        ],
        learningOutcomes: [
            "Understanding sensor integration",
            "Motor control and PID tuning",
            "Implementing pathfinding algorithms",
            "Wireless communication protocols",
            "Real-time embedded programming",
            "Debugging complex robotic systems"
        ]
    },
    selfdriving: {
        title: "Self-Driving Car Prototype",
        image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200&q=80",
        description: "A 1:10 scale autonomous vehicle demonstrating core self-driving technologies including lane detection, traffic sign recognition, and adaptive cruise control. Built entirely from scratch using deep learning and computer vision.",
        technologies: [
            "Deep Learning (YOLO, CNN)",
            "OpenCV for Computer Vision",
            "Raspberry Pi with Camera",
            "Lane Detection Algorithms",
            "PID Controllers",
            "TensorFlow Lite"
        ],
        features: [
            "Real-time lane detection and keeping",
            "Traffic sign recognition and response",
            "Adaptive cruise control with distance sensing",
            "Emergency braking system",
            "Path planning and trajectory control",
            "Data logging for analysis"
        ],
        learningOutcomes: [
            "Training custom neural networks",
            "Computer vision pipeline development",
            "Control systems engineering",
            "Sensor calibration techniques",
            "Real-time processing optimization",
            "Safety-critical system design"
        ]
    },
    tracking: {
        title: "Computer Vision Tracking Systems",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
        description: "Advanced real-time object detection and tracking systems using state-of-the-art deep learning models. Applications include person tracking, gesture recognition, and automated surveillance systems.",
        technologies: [
            "YOLO (You Only Look Once)",
            "OpenCV & Python",
            "Custom CNN Architectures",
            "TensorFlow & PyTorch",
            "Real-time Video Processing",
            "GPU Acceleration (CUDA)"
        ],
        features: [
            "Multi-object detection and tracking",
            "Person re-identification",
            "Gesture recognition for control",
            "Face detection and recognition",
            "Activity recognition",
            "Custom dataset training pipeline"
        ],
        learningOutcomes: [
            "Deep learning model architecture",
            "Dataset collection and annotation",
            "Transfer learning techniques",
            "Performance optimization strategies",
            "Accuracy vs speed tradeoffs",
            "Deployment on embedded devices"
        ]
    },
    mobility: {
        title: "Electric Mobility Systems",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80",
        description: "Custom electric vehicle control systems featuring advanced motor control, battery management, and regenerative braking. Demonstrates power electronics and embedded systems integration at scale.",
        technologies: [
            "BLDC Motor Controllers",
            "Battery Management Systems",
            "Power Electronics (MOSFETs, IGBTs)",
            "CAN Bus Communication",
            "STM32 Microcontrollers",
            "Regenerative Braking Systems"
        ],
        features: [
            "Efficient BLDC motor control",
            "Real-time battery monitoring and protection",
            "Regenerative braking implementation",
            "Torque vectoring for stability",
            "Dashboard telemetry system",
            "Fault detection and safety shutdown"
        ],
        learningOutcomes: [
            "High-power electronics design",
            "Motor control theory and practice",
            "Battery chemistry and management",
            "Safety systems in electric vehicles",
            "EMI/EMC considerations",
            "Professional PCB design"
        ]
    },
    various: {
        title: "Additional Robotics Projects",
        image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=1200&q=80",
        description: "A diverse portfolio of specialized robotics projects including autonomous drones, robotic arms, IoT automation systems, and custom mechatronic solutions for industrial and educational applications.",
        technologies: [
            "Drone Flight Controllers",
            "Robotic Arm Kinematics",
            "IoT Protocols (MQTT, HTTP)",
            "Custom Sensor Development",
            "3D Printing & CAD",
            "Multi-platform Integration"
        ],
        features: [
            "Autonomous drone navigation and delivery",
            "6-DOF robotic arm with inverse kinematics",
            "Smart home automation systems",
            "Agricultural monitoring robots",
            "Industrial automation solutions",
            "Custom sensor and actuator interfaces"
        ],
        learningOutcomes: [
            "Mechanical design and fabrication",
            "Kinematics and dynamics",
            "Wireless sensor networks",
            "Cloud integration and IoT",
            "Rapid prototyping techniques",
            "Cross-platform development"
        ]
    }
};

// ========== NAVIGATION ==========
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow when scrolled
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scroll and close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========== SCROLL ANIMATIONS ==========
// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items, cards, and other animated elements
const animatedElements = document.querySelectorAll('.timeline-item, .course-card, .project-card, .achievement-card, .tool-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========== PROJECT MODAL ==========
const modal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const projectCards = document.querySelectorAll('.project-card');

// Open modal
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectKey = card.getAttribute('data-project');
        const project = projectData[projectKey];
        
        if (project) {
            displayProjectModal(project);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Display project details in modal
function displayProjectModal(project) {
    const technologiesHTML = project.technologies.map(tech => 
        `<span class="project-tags"><span>${tech}</span></span>`
    ).join('');
    
    const featuresHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    const learningHTML = project.learningOutcomes.map(outcome => 
        `<li>${outcome}</li>`
    ).join('');
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        
        <div class="modal-section">
            <h3>Project Overview</h3>
            <p>${project.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Technologies Used</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
                ${technologiesHTML}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Key Features</h3>
            <ul>${featuresHTML}</ul>
        </div>
        
        <div class="modal-section">
            <h3>Student Learning Outcomes</h3>
            <ul>${learningHTML}</ul>
        </div>
        
        <div class="modal-section">
            <p style="background-color: var(--color-bg-alt); padding: 1rem; border-left: 4px solid var(--color-accent); margin-top: 2rem;">
                <strong>Teaching Application:</strong> This project serves as a comprehensive teaching platform where students work through progressive milestones, from basic component integration to advanced system deployment. Each phase builds on previous knowledge while introducing new concepts and real-world engineering challenges.
            </p>
        </div>
    `;
}

// ========== LAZY LOADING IMAGES ==========
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger loading
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // In a real implementation, you would send this data to a server
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    
    // Show success message
    showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // NOTE: To actually send emails, you would need to:
    // 1. Set up a backend server (Node.js, PHP, etc.)
    // 2. Use a service like SendGrid, Mailgun, or EmailJS
    // 3. Send the form data via AJAX to your server
    
    // Example with EmailJS (requires account setup):
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(() => {
            showFormMessage('Thank you! Your message has been sent.', 'success');
            contactForm.reset();
        })
        .catch(() => {
            showFormMessage('Sorry, something went wrong. Please try again.', 'error');
        });
    */
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ========== STATISTICS COUNTER ANIMATION ==========
// Animate numbers when they come into view
const stats = document.querySelectorAll('.stat-number');

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent;
            animateCounter(target, finalValue);
            statsObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));

function animateCounter(element, finalValue) {
    const isPlus = finalValue.includes('+');
    const numValue = parseInt(finalValue.replace('+', ''));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= numValue) {
            element.textContent = isPlus ? `${numValue}+` : numValue;
            clearInterval(timer);
        } else {
            element.textContent = isPlus ? `${Math.floor(current)}+` : Math.floor(current);
        }
    }, duration / steps);
}

// ========== SMOOTH REVEAL ON SCROLL ==========
// Add reveal animation class
const revealElements = document.querySelectorAll('.philosophy-points .point, .format-card, .workshop-item, .gallery-item');

revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// ========== ACTIVE SECTION HIGHLIGHTING IN NAV ==========
// Highlight nav link based on current section
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ========== BACK TO TOP BUTTON (Optional Enhancement) ==========
// You can add a back-to-top button if desired
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Uncomment the line below to enable back-to-top button
// createBackToTopButton();

// ========== INITIALIZE ==========
console.log('🤖 Robotics Educator Portfolio Loaded Successfully');
console.log('📧 Contact: buxinjabbi@gmail.com');
console.log('📱 Phone: +91 9319038312');

// Log any errors
window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.message);
});

// Performance monitoring (optional)
window.addEventListener('load', () => {
    if (window.performance) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log(`⚡ Page loaded in ${loadTime}ms`);
    }
});