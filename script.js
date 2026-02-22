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
    
    console.log('ULTIMATELINKS - Initialized successfully!');
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
            name: 'PROXY SITES',
            icon: '🛡️',
            count: 18,
            description: 'Secure proxy services to bypass restrictions',
            links: [
                { name: 'TRUFFLED', url: 'https://staffhiring.metropolitanstaffingsolutions.com/', description: 'Fast and secure proxy', warning: null },
                { name: 'GALAXY V6', url: 'https://call.it.smasesorias.cl/', description: 'Galaxy proxy service', warning: null },
                { name: 'DOGEUB', url: 'https://classlink-ixl-learning.epic.c01.kr.cdn.cloudflare.net/', description: 'Doge themed proxy', warning: null },
                { name: 'INTERSTELLAR', url: 'https://oh67.asistdoc.ar/', description: 'Space themed proxy', warning: null },
                { name: 'SPACE', url: 'https://academy.canadianlocomotivelogistics.ca/', description: 'Space proxy service', warning: null },
                { name: 'RAMMERHEAD', url: 'https://shared.learn.acepod.com/', description: 'Rammerhead proxy', warning: null },
                { name: 'UTOPIA', url: 'https://login.i-ready.com.a.noviolencia.ar/', description: 'Utopia proxy service', warning: null },
                { name: 'ENDIS', url: 'https://endis.rest/', description: 'Endis proxy', warning: null },
                { name: 'OVERCLOAKED', url: 'https://cjklakljfsdfdfe.cxvjlkewdfw.1000pizzas.com', description: 'Overcloaked proxy', warning: null },
                { name: 'BOREDOM', url: 'https://playernation.canalspa.cl/', description: 'Boredom killer proxy', warning: null },
                { name: 'GLINT', url: 'https://top100coolbugfacts.martinwguy.net', description: 'Glint proxy service', warning: null },
                { name: 'ABYSS', url: 'https://thetotalabyssboys.vercel.app/', description: 'Abyss proxy', warning: null },
                { name: 'GHOST', url: 'https://poemsforkids.vseesa.martinwguy.net', description: 'Ghost proxy', warning: null },
                { name: 'QUASAR', url: 'https://hoverfc.com/', description: 'Quasar proxy', warning: null },
                { name: 'ROSIN', url: 'https://rosin.vcsa.national-birdshow.com/', description: 'Rosin proxy', warning: null },
                { name: 'UNIUB', url: 'https://uniub.srvdns.de/', description: 'Uniub proxy', warning: null },
                { name: 'BROMINE', url: 'https://nativeamericanhistory.netlify.app/', description: 'Bromine proxy', warning: null },
                { name: 'LUNAR', url: 'https://book.today.hotelconsuladoinn.com/', description: 'Lunar proxy', warning: null }
            ]
        },
        {
            id: 'games',
            name: 'GAME LINKS',
            icon: '🎮',
            count: 20,
            description: 'Play your favorite games online without limits',
            links: [
                { name: 'COMPLETELY SCIENCE', url: 'http://d1tmbzjih4bfq6.cloudfront.net', description: 'Science games collection', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'PETEZAH', url: 'https://totallynotgames.seclogistic.com/', description: 'Petezah games', warning: null },
                { name: 'RED EXPLOIT CORNER', url: 'http://bull33.infotechnology.com', description: 'Exploit games', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'DUCK', url: 'https://quack-learn.web.app/', description: 'Duck games', warning: null },
                { name: 'FROGIESARCADE', url: 'https://frogieeisback-edu.zone.id/', description: 'Frogie arcade games', warning: null },
                { name: 'VAPOR V4', url: 'https://ge-lao-shi.global.ssl.fastly.net/', description: 'Vapor V4 games', warning: null },
                { name: 'VAPOR V3', url: 'https://gelaoshi.global.ssl.fastly.net/', description: 'Vapor V3 games', warning: null },
                { name: 'BROS GAMES', url: 'https://nbadebate.com/', description: 'Bros collection', warning: null },
                { name: 'GOFLO GAMES', url: 'https://goflogames.github.io/', description: 'Goflo games hub', warning: null },
                { name: 'CCPORTED', url: 'https://d1yh00vn2fvto7.cloudfront.net/', description: 'CC ported games', warning: null },
                { name: 'EXTREMEMATH', url: 'https://extrememath.freetls.fastly.net/', description: 'Extreme math games', warning: null },
                { name: 'NOWGG', url: 'http://198.ip.nowgg.fun', description: 'Now.gg games', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'EAGLECRAFT', url: 'https://client.eaglercraft.win/eagler-files/wasm/1.8/Main/index.html', description: 'Eaglercraft Minecraft', warning: null },
                { name: 'JORDANS MATH WORK', url: 'https://subscribevseesa.infotechnology.com/', description: 'Math work games', warning: null },
                { name: 'CLASSROOM GAMES', url: 'https://dnrweqffuwjtx.cloudfront.net/', description: 'Classroom games', warning: null },
                { name: 'ALL GAMES', url: 'https://nb-ga.github.io/games-site/', description: 'All games collection', warning: null },
                { name: 'SYCES GAME SHACK', url: 'https://subkeys.github.io/sayeo/index.html', description: 'Syces games', warning: null },
                { name: 'TOPVAZ (BASKET RANDOM EDITION)', url: 'https://basket-random.gitlab.io/category/shooting.htm', description: 'Basket random games', warning: null },
                { name: 'VOID NETWORK V5', url: 'https://chemistrypracticelab.cencopro.cl/', description: 'Void Network V5', warning: null },
                { name: 'BROMINE (GAME EDITION)', url: 'https://codeprojects.org/projects/weblab/vm34VbcbEEmT5SAi_UWswHp7q2SBriUipjk4WmuXXJk/', description: 'Bromine games', warning: null }
            ]
        },
        {
            id: 'live',
            name: 'LIVE CHANNEL LINK',
            icon: '📺',
            count: 1,
            description: 'Live streaming channels',
            links: [
                { name: 'FAMELACK', url: 'https://famelack.com/', description: 'Live streaming', warning: null }
            ]
        },
        {
            id: 'movies',
            name: 'MOVIE WATCHER LINK',
            icon: '🎬',
            count: 7,
            description: 'Stream the latest movies and TV shows',
            links: [
                { name: 'FMOVIES', url: 'https://fmovieisthegoat.vercel.app/', description: 'Fmovies streaming', warning: null },
                { name: 'CINEBY', url: 'https://cineby.io/', description: 'Cineby movies', warning: null },
                { name: 'PLUTO TV', url: 'https://pluto.tv/us/live-tv/68757c45759366af05b3b199', description: 'Pluto TV live', warning: null },
                { name: 'MAPPLE TV', url: 'https://mappl.tv/', description: 'Mapple TV', warning: null },
                { name: 'VIDORA', url: 'https://watch.vidora.su/', description: 'Vidora streaming', warning: null },
                { name: 'MYFLIXER', url: 'https://myflixer.ps/home', description: 'MyFlixer movies', warning: null },
                { name: 'RIVESTREAM', url: 'https://rivestream.org/', description: 'Rivestream movies', warning: null }
            ]
        },
        {
            id: 'ai',
            name: 'AI LINK',
            icon: '🤖',
            count: 5,
            description: 'Access powerful AI tools and chatbots',
            links: [
                { name: 'DUCKDUCKGO AI CHAT', url: 'http://duck.ai', description: 'DuckDuckGo AI chat', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'DEEPAI', url: 'http://deepai.org', description: 'Deep AI tools', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'GEMINI', url: 'http://gemini.google.com', description: 'Google Gemini AI', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'ECOSIA', url: 'https://www.ecosia.org/ai-search/aa4dca27-ff32-4574-82d3-375a05c6eae5?q=if+you+came+from+ULTIMATE+UNBLOCKER+ur+a+w', description: 'Ecosia AI search', warning: null },
                { name: 'SATURN AI', url: 'https://vcsa-saturn.ciko.ch/pages/ai.html', description: 'Saturn AI tools', warning: null }
            ]
        },
        {
            id: 'music',
            name: 'MUSIC LINK',
            icon: '🎵',
            count: 4,
            description: 'Stream music from around the world',
            links: [
                { name: 'VAPOR (MUSIC)', url: 'https://ge-lao-shi.global.ssl.fastly.net//page/music/index.html', description: 'Vapor music', warning: null },
                { name: 'PETEZAH (MUSIC)', url: 'https://totallynotgames.seclogistic.com/embed.html#https://byod.petezahgames.com/pages/other/music/', description: 'Petezah music', warning: null },
                { name: 'GHOST', url: 'https://poemsforkids.vseesa.martinwguy.net/music/', description: 'Ghost music', warning: null },
                { name: 'TIDAL', url: 'https://tidal.com/', description: 'Tidal music streaming', warning: '⚠ WARNING: Requires signup, No detected malware' }
            ]
        },
        {
            id: 'radio',
            name: 'RADIO LINK',
            icon: '📻',
            count: 1,
            description: 'Listen to radio stations worldwide',
            links: [
                { name: 'RADIO GARDEN', url: 'https://www.radio.garden/', description: 'Radio Garden', warning: null }
            ]
        },
        {
            id: 'sports',
            name: 'SPORT WATCHER LINK',
            icon: '⚽',
            count: 2,
            description: 'Watch live sports events and matches',
            links: [
                { name: 'EUROVISION SPORT', url: 'https://eurovisionsport.com/en', description: 'Eurovision sports', warning: null },
                { name: 'RIVESTREAM (LIVE SPORT)', url: 'https://rivestream.org/livesports', description: 'Rivestream live sports', warning: null }
            ]
        },
        {
            id: 'youtube',
            name: 'ALTERNATIVE YOUTUBE',
            icon: '📹',
            count: 1,
            description: 'Alternative YouTube platforms',
            links: [
                { name: 'INVIDIOUS', url: 'https://inv.nadeko.net/', description: 'Invidious YouTube', warning: null }
            ]
        },
        {
            id: 'soundboards',
            name: 'SOUNDBOARDS',
            icon: '🔊',
            count: 3,
            description: 'Fun soundboards and meme sounds',
            links: [
                { name: '101SOUNDBOARD', url: 'http://101soundboards.com', description: '101 soundboards', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'FREE MEME SOUNDBOARD', url: 'https://filme.imyfone.com/soundboards/meme', description: 'Free meme sounds', warning: null },
                { name: 'MEME SOUNDBOARD', url: 'https://www.tynker.com/community/projects/play/meme-soundboard/62f1ae42667c79348823eee8/', description: 'Meme soundboard', warning: null }
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
        
        let warningHtml = '';
        if (link.warning) {
            warningHtml = `<div class="link-warning">${link.warning}</div>`;
        }
        
        linkCard.innerHTML = `
            <h4>${link.name}</h4>
            <p>${link.description}</p>
            ${warningHtml}
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
    const storedComments = localStorage.getItem('ultimateLinks_comments');
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
        localStorage.setItem('ultimateLinks_comments', JSON.stringify(comments));
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
            title: 'ULTIMATELINKS',
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
    console.log('ULTIMATELINKS - All systems operational');
});
