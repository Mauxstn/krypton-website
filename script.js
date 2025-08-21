// Modern JavaScript for Krypton Website

class KryptonWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeComponents();
        this.setupAnimations();
        this.setupParticles();
        // Entferne setupScrollEffects() da es Konflikte verursacht
    }

    setupEventListeners() {
        // DOM Content Loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.onDOMLoaded();
        });

        // Window events - entferne scroll event da es Konflikte verursacht
        window.addEventListener('resize', this.handleResize.bind(this));
        window.addEventListener('load', this.handleLoad.bind(this));

        // Smooth scrolling for navigation links - vereinfacht
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initializeComponents() {
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Initialize equipment grid
        this.initializeEquipmentGrid();

        // Initialize role rotation
        this.initializeRoleRotation();

        // Initialize stats
        this.initializeStats();
    }

    initializeEquipmentGrid() {
        const equipmentGrid = document.getElementById('equipmentGrid');
        if (equipmentGrid) {
            // Clear existing content to prevent duplicates
            equipmentGrid.innerHTML = '';

            // Define categories with specific devices
            const categories = [
                {
                    name: 'Maus & Tastatur',
                    items: [
                        { name: 'Razer Viper V3 Pro', icon: 'mouse', description: 'Gaming Mouse', link: 'https://www.amazon.de/dp/B0CSPN2G5Z?m=A3JWKAKR8XB7XF&tag=idealode-am-pk-21&ascsubtag=2025-08-16_85e139103673a5c0b4a36a5ce283ee0975980b7aafbbafd2e699b1a637b099ec&th=1' },
                        { name: 'Razer Huntsman V3 TKL', icon: 'keyboard', description: 'Mechanical Keyboard', link: 'https://www.amazon.de/Razer-Huntsman-Tenkeyless-Sport-Tastatur-Layout/dp/B0CDBXBBJW?th=1' }
                    ]
                },
                {
                    name: 'Audio',
                    items: [
                        { name: 'HyperX QuadCast S', icon: 'mic', description: 'USB Microphone', link: 'https://de.hyperx.com/products/hyperx-quadcast-s-usb-microphone' },
                        { name: 'Logitech G PRO X Wireless', icon: 'headphones', description: 'Gaming Headset', link: 'https://www.logitechg.com/de-de/products/gaming-audio/pro-x-wireless-headset.html' }
                    ]
                },
                {
                    name: 'VR Equipment',
                    items: [
                        { name: 'Oculus Quest 2', icon: 'rectangle-goggles', description: 'Standalone VR Headset', link: 'https://www.meta.com/de/quest/products/quest-2/' },
                        { name: 'Valve Index', icon: 'rectangle-goggles', description: 'High-End PC VR', link: 'https://store.steampowered.com/valveindex' },
                        { name: '3× VIVE Tracker 3.0', icon: 'rectangle-goggles', description: 'Full Body Tracking', link: 'https://www.vive.com/de/accessory/tracker3/' }
                    ]
                },
                {
                    name: 'Streaming',
                    items: [
                        { name: 'Elgato Stream Deck', icon: 'layout-dashboard', description: 'Stream Control Panel', link: 'https://www.amazon.de/gp/product/B09738CV2G?ie=UTF8&tag=elgato07-21&camp=1638&creative=6742&linkCode=as2&creativeASIN=B09738CV2G&linkId=7b0505d6b75c25952f554f1d4d194ee3' }
                    ]
                }
            ];

            categories.forEach(category => {
                // Category title
                const categoryTitle = document.createElement('h4');
                categoryTitle.className = 'text-lg font-semibold mb-8 text-red-600 col-span-full'; // Increased bottom margin for spacing
                categoryTitle.textContent = category.name;
                equipmentGrid.appendChild(categoryTitle);

                // Devices in the category
                category.items.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'stat-card hover-lift p-6 mb-4'; // Added bottom margin for spacing
                    card.innerHTML = `
                        <a href="${item.link}" target="_blank" class="flex items-center gap-4"> <!-- Added link to the device -->
                            <div class="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center"> <!-- Increased size for better visuals -->
                                <i data-lucide="${item.icon}" class="text-red-600 w-6 h-6"></i>
                            </div>
                            <div class="flex-1">
                                <h5 class="font-semibold text-white mb-2">${item.name}</h5> <!-- Increased bottom margin for spacing -->
                                <p class="text-sm text-gray-400">${item.description}</p>
                            </div>
                        </a>
                    `;
                    equipmentGrid.appendChild(card);
                });
            });

            // Re-initialize icons for new elements
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }

    initializeRoleRotation() {
        const roles = [
            'Gaming Enthusiast',
            'VR Lover',
            'Streamer',
            'Content Creator',
            'Tech Geek',
            'Koch'
        ];

        let roleIndex = 0;
        const roleText = document.getElementById('roleText');

        if (roleText) {
            const updateRole = () => {
                roleText.style.opacity = '0';
                roleText.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    roleText.textContent = roles[roleIndex];
                    roleText.style.opacity = '1';
                    roleText.style.transform = 'translateY(0)';
                    roleIndex = (roleIndex + 1) % roles.length;
                }, 300);
            };

            // Initial update
            updateRole();
            // Update every 4 seconds
            setInterval(updateRole, 4000);
        }
    }

    initializeStats() {
        // Animate progress bars
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });

        // Animate stat numbers
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const isNumber = !isNaN(finalValue);
            
            if (isNumber) {
                const finalNum = parseInt(finalValue);
                let currentNum = 0;
                const increment = finalNum / 50;
                
                const timer = setInterval(() => {
                    currentNum += increment;
                    if (currentNum >= finalNum) {
                        currentNum = finalNum;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(currentNum);
                }, 30);
            }
        });
    }

    setupAnimations() {
        // Vereinfachte Animationen ohne Scroll-Event-Listener
        // Das behebt das komische Scroll-Verhalten
        
        // Nur einfache Intersection Observer für Reveal-Animationen
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                }
            });
        }, observerOptions);

        // Beobachte nur Elemente mit der 'reveal' Klasse
        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    }

    setupParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = 50;
        const particles = [];

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particlesContainer.appendChild(particle);
            
            particles.push({
                element: particle,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                speed: Math.random() * 0.5 + 0.2,
                size: Math.random() * 2 + 1
            });
        }

        // Animate particles
        const animateParticles = () => {
            particles.forEach(particle => {
                particle.y += particle.speed;
                
                if (particle.y > window.innerHeight) {
                    particle.y = -10;
                    particle.x = Math.random() * window.innerWidth;
                }
                
                particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
            });
            
            requestAnimationFrame(animateParticles);
        };

        animateParticles();
    }

    setupScrollEffects() {
        // Entferne alle Parallax-Effekte und komplexe Scroll-Animationen
        // Das verursacht das komische Scroll-Verhalten
        
        // Nur einfache Reveal-Animationen beibehalten
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    handleScroll() {
        // Entferne scroll handling da es Konflikte verursacht
        // this.animateOnScroll();
    }

    handleResize() {
        // Handle responsive adjustments
        this.adjustLayout();
    }

    handleLoad() {
        // Remove loading screen if exists
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    }

    onDOMLoaded() {
        // Initialize all components after DOM is loaded
        this.initializeComponents();
        this.setupAnimations();
        this.setupParticles();
        // Entferne setupScrollEffects() da es Konflikte verursacht
        
        // Add loaded class to body
        document.body.classList.add('loaded');
    }

    // animateOnScroll() entfernt da es Scroll-Probleme verursacht

    adjustLayout() {
        // Adjust layout for different screen sizes
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth <= 1024;
        
        // Add responsive classes
        document.body.classList.toggle('mobile', isMobile);
        document.body.classList.toggle('tablet', isTablet && !isMobile);
        document.body.classList.toggle('desktop', !isMobile && !isTablet);
    }

    // Utility methods
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the website
const website = new KryptonWebsite();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KryptonWebsite;
}

// Additional utility functions
const Utils = {
    // Format numbers with commas
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    // Generate random color
    randomColor: () => {
        const colors = ['#dc2626', '#fbbf24', '#10b981', '#3b82f6', '#8b5cf6'];
        return colors[Math.floor(Math.random() * colors.length)];
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Smooth scroll to element
    scrollToElement: (element, offset = 0) => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    },

    // Copy text to clipboard
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Failed to copy text: ', err);
            return false;
        }
    },

    // Get current scroll position
    getScrollPosition: () => {
        return window.pageYOffset || document.documentElement.scrollTop;
    },

    // Check if device is mobile
    isMobile: () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    // Add loading animation
    showLoading: () => {
        const loader = document.createElement('div');
        loader.className = 'loading-overlay';
        loader.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <p>Loading...</p>
            </div>
        `;
        document.body.appendChild(loader);
    },

    // Remove loading animation
    hideLoading: () => {
        const loader = document.querySelector('.loading-overlay');
        if (loader) {
            loader.remove();
        }
    }
};

        // Vereinfachte CSS-Styles ohne problematische Animationen
        const loadingStyles = `
            .loading-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
            }

            .loading-spinner {
                text-align: center;
                color: white;
            }

            .spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-top: 3px solid #dc2626;
                border-radius: 50%;
                margin: 0 auto 1rem;
            }

            .reveal {
                opacity: 0;
                transition: opacity 0.6s ease;
            }

            .reveal.revealed {
                opacity: 1;
            }
        `;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);

// Global error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}
