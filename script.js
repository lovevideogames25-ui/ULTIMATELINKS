// ULTIMATE UNBLOCKER - Main JavaScript

// Global Variables
let currentSection = 'home';
let comments = [];
let categories = [];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        hideLoadingScreen();
    }, 2000);
    
    // Initialize navigation
    initializeNavigation();
    
    // Load categories
    loadCategories();
    
    // Load comments
    loadComments();
    
    // Initialize search
    initializeSearch();
    
    // Add scroll effects
    initializeScrollEffects();
    
    console.log('ULTIMATE UNBLOCKER - Initialized successfully!');
}

// Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Navigation
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Section Management
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Update active nav link
        updateActiveNavLink(sectionId);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update Active Navigation Link
function updateActiveNavLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Categories Data and Functions
function loadCategories() {
    categories = [
        {
            id: 'proxy',
            name: 'Proxy Sites',
            icon: '🛡️',
            count: 18,
            description: 'Secure proxy services to bypass restrictions',
            links: [
                { name: 'Proxy 1', url: '#', description: 'Fast and secure proxy' },
                { name: 'Proxy 2', url: '#', description: 'Anonymous browsing' },
                { name: 'Proxy 3', url: '#', description: 'Unblock any site' }
            ]
        },
        {
            id: 'games',
            name: 'Game Links',
            icon: '🎮',
            count: 20,
            description: 'Play your favorite games online without limits',
            links: [
                { name: 'Game Hub', url: '#', description: '1000+ online games' },
                { name: 'Arcade Classics', url: '#', description: 'Retro gaming' },
                { name: 'Multiplayer Arena', url: '#', description: 'Play with friends' }
            ]
        },
        {
            id: 'movies',
            name: 'Movies',
            icon: '🎬',
            count: 7,
            description: 'Stream the latest movies and TV shows',
            links: [
                { name: 'Movie Stream', url: '#', description: 'Latest releases' },
                { name: 'TV Series Hub', url: '#', description: 'Binge watch shows' },
                { name: 'Documentary Zone', url: '#', description: 'Educational content' }
            ]
        },
        {
            id: 'ai',
            name: 'AI Tools',
            icon: '🤖',
            count: 5,
            description: 'Access powerful AI tools and chatbots',
            links: [
                { name: 'Chat Assistant', url: '#', description: 'AI-powered chat' },
                { name: 'Image Generator', url: '#', description: 'Create AI images' },
                { name: 'Code Helper', url: '#', description: 'Programming assistant' }
            ]
        },
        {
            id: 'music',
            name: 'Music',
            icon: '🎵',
            count: 4,
            description: 'Stream music from around the world',
            links: [
                { name: 'Music Stream', url: '#', description: 'Unlimited music' },
                { name: 'Podcast Hub', url: '#', description: 'Audio content' },
                { name: 'Radio Live', url: '#', description: 'Live radio stations' }
            ]
        },
        {
            id: 'sports',
            name: 'Sports',
            icon: '⚽',
            count: 2,
            description: 'Watch live sports events and matches',
            links: [
                { name: 'Live Sports', url: '#', description: 'Live matches' },
                { name: 'Sports Replays', url: '#', description: 'Game highlights' }
            ]
        }
    ];
    
    renderCategories();
}

// Render Categories
function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = '';
    
    categories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.style.animationDelay = `${index * 0.1}s`;
        categoryCard.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <div class="category-title">${category.name}</div>
            <div class="category-count">${category.count} Verified Links</div>
            <p>${category.description}</p>
        `;
        categoryCard.addEventListener('click', () => showCategory(category.id));
        categoriesGrid.appendChild(categoryCard);
    });
}

// Show Category Details
function showCategory(categoryId) {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    // Update category detail section
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryDescription = document.getElementById('categoryDescription');
    
    if (categoryTitle && categoryDescription) {
        categoryTitle.textContent = category.name;
        categoryDescription.textContent = category.description;
    }
    
    // Render links
    renderCategoryLinks(category);
    
    // Show category detail section
    showSection('categoryDetail');
}

// Render Category Links
function renderCategoryLinks(category) {
    const linksContainer = document.getElementById('linksContainer');
    if (!linksContainer) return;
    
    linksContainer.innerHTML = '';
    
    category.links.forEach((link, index) => {
        const linkCard = document.createElement('div');
        linkCard.className = 'link-card';
        linkCard.style.animationDelay = `${index * 0.1}s`;
        linkCard.innerHTML = `
            <h4>${link.name}</h4>
            <p>${link.description}</p>
            <a href="${link.url}" class="btn btn-primary" target="_blank">
                <span class="btn-icon">🔗</span>
                Visit Site
            </a>
        `;
        linksContainer.appendChild(linkCard);
    });
}

// Search Functions
function initializeSearch() {
    const searchInput = document.getElementById('categorySearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchCategories(e.target.value);
        });
    }
}

function searchCategories(query) {
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(query.toLowerCase()) ||
        category.description.toLowerCase().includes(query.toLowerCase())
    );
    
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = '';
    
    if (filteredCategories.length === 0) {
        categoriesGrid.innerHTML = '<p>No categories found. Try a different search term.</p>';
        return;
    }
    
    filteredCategories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.style.animationDelay = `${index * 0.1}s`;
        categoryCard.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <div class="category-title">${category.name}</div>
            <div class="category-count">${category.count} Verified Links</div>
            <p>${category.description}</p>
        `;
        categoryCard.addEventListener('click', () => showCategory(category.id));
        categoriesGrid.appendChild(categoryCard);
    });
}

// Comments Functions
function loadComments() {
    // Load comments from localStorage
    const storedComments = localStorage.getItem('ultimateUnblocker_comments');
    if (storedComments) {
        try {
            comments = JSON.parse(storedComments);
        } catch (error) {
            console.error('Error loading comments:', error);
            comments = [];
        }
    } else {
        // Default comments
        comments = [
            {
                id: 1,
                author: 'Anonymous User',
                content: 'This is an amazing resource! Thank you for creating this.',
                timestamp: new Date(Date.now() - 86400000).toISOString(),
                likes: 5
            },
            {
                id: 2,
                author: 'Tech Enthusiast',
                content: 'The proxy sites work perfectly. Great collection!',
                timestamp: new Date(Date.now() - 172800000).toISOString(),
                likes: 3
            }
        ];
    }
    
    renderComments();
}

// Render Comments
function renderComments() {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;
    
    commentsList.innerHTML = '';
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p>No comments yet. Be the first to share your thoughts!</p>';
        return;
    }
    
    comments.forEach((comment, index) => {
        const commentItem = createCommentItem(comment, index);
        commentsList.appendChild(commentItem);
    });
}

// Create Comment Item
function createCommentItem(comment, index) {
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    commentItem.style.animationDelay = `${index * 0.1}s`;
    
    const timeAgo = getTimeAgo(new Date(comment.timestamp));
    
    commentItem.innerHTML = `
        <div class="comment-header">
            <span class="comment-author">${escapeHtml(comment.author)}</span>
            <span class="comment-time">${timeAgo}</span>
        </div>
        <div class="comment-content">${escapeHtml(comment.content)}</div>
        <div class="comment-actions">
            <button class="comment-like-btn" onclick="likeComment(${comment.id})">
                ❤️ ${comment.likes || 0}
            </button>
        </div>
    `;
    
    return commentItem;
}

// Add Comment
function addComment(event) {
    event.preventDefault();
    
    const authorInput = document.getElementById('authorInput');
    const commentInput = document.getElementById('commentInput');
    
    if (!authorInput || !commentInput) return;
    
    const author = authorInput.value.trim();
    const content = commentInput.value.trim();
    
    if (!author || !content) {
        showNotification('Please fill in both fields.', 'warning');
        return;
    }
    
    const newComment = {
        id: Date.now(),
        author: author,
        content: content,
        timestamp: new Date().toISOString(),
        likes: 0
    };
    
    comments.unshift(newComment);
    saveComments();
    renderComments();
    clearForm();
    
    showNotification('Comment posted successfully! Remember, this comment is permanent.', 'success');
}

// Like Comment
function likeComment(commentId) {
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        comment.likes = (comment.likes || 0) + 1;
        saveComments();
        renderComments();
    }
}

// Save Comments
function saveComments() {
    try {
        localStorage.setItem('ultimateUnblocker_comments', JSON.stringify(comments));
    } catch (error) {
        console.error('Error saving comments:', error);
    }
}

// Clear Form
function clearForm() {
    const authorInput = document.getElementById('authorInput');
    const commentInput = document.getElementById('commentInput');
    
    if (authorInput) authorInput.value = '';
    if (commentInput) commentInput.value = '';
}

// Utility Functions
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + ' years ago';
    
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + ' months ago';
    
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + ' days ago';
    
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + ' hours ago';
    
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + ' minutes ago';
    
    return 'Just now';
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Share Functions
function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: 'ULTIMATE UNBLOCKER',
            text: 'Check out this amazing collection of verified links!',
            url: window.location.href
        });
    } else {
        copyLink();
        showNotification('Link copied to clipboard!', 'success');
    }
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification('Link copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy link', 'error');
    });
}

// Scroll Effects
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// View Controls
function setView(viewType) {
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    
    const linksContainer = document.getElementById('linksContainer');
    if (linksContainer) {
        if (viewType === 'list') {
            linksContainer.style.gridTemplateColumns = '1fr';
        } else {
            linksContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        }
    }
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Performance Monitoring
window.addEventListener('load', function() {
    console.log('Page loaded successfully');
    console.log('ULTIMATE UNBLOCKER - All systems operational');
});
