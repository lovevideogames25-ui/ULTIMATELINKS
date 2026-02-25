// COMMENTS.JS - PERMANENT & UNIVERSAL COMMENT SYSTEM

// Global Variables
let comments = [];
let currentUser = null;
let isTyping = false;
let typingTimer = null;

// Initialize Comments System
document.addEventListener('DOMContentLoaded', function() {
    initializeComments();
});

// Initialize Comments
function initializeComments() {
    loadComments();
    setupCommentForm();
    renderComments();
}

// Load Comments from localStorage
function loadComments() {
    const storedComments = localStorage.getItem('ultimateLinks_comments');
    if (storedComments) {
        try {
            comments = JSON.parse(storedComments);
        } catch (error) {
            console.error('Error loading comments:', error);
            comments = [];
        }
    } else {
        // Default comments for demonstration
        comments = [
            {
                id: 1,
                author: 'Anonymous User',
                content: 'This is an amazing resource! Thank you for creating this.',
                timestamp: new Date(Date.now() - 86400000).toISOString(),
                likes: 5,
                permanent: true
            },
            {
                id: 2,
                author: 'Tech Enthusiast',
                content: 'The proxy sites work perfectly. Great collection!',
                timestamp: new Date(Date.now() - 172800000).toISOString(),
                likes: 3,
                permanent: true
            }
        ];
    }
}

// Save Comments to localStorage
function saveComments() {
    try {
        localStorage.setItem('ultimateLinks_comments', JSON.stringify(comments));
    } catch (error) {
        console.error('Error saving comments:', error);
    }
}

// Setup Comment Form
function setupCommentForm() {
    const form = document.querySelector('.comment-form');
    if (form) {
        form.addEventListener('submit', addComment);
        
        // Setup typing indicator
        const textarea = document.getElementById('commentInput');
        if (textarea) {
            textarea.addEventListener('input', handleTyping);
            textarea.addEventListener('blur', stopTyping);
        }
    }
}

// Handle Typing Indicator
function handleTyping() {
    if (!isTyping) {
        isTyping = true;
        showTypingIndicator();
    }
    
    // Clear existing timer
    if (typingTimer) {
        clearTimeout(typingTimer);
    }
    
    // Hide typing indicator after 3 seconds of inactivity
    typingTimer = setTimeout(() => {
        stopTyping();
    }, 3000);
}

// Stop Typing
function stopTyping() {
    isTyping = false;
    hideTypingIndicator();
    if (typingTimer) {
        clearTimeout(typingTimer);
    }
}

// Show Typing Indicator
function showTypingIndicator() {
    // This would show a "someone is typing" indicator
    // For now, we'll just log it
    console.log('User is typing...');
}

// Hide Typing Indicator
function hideTypingIndicator() {
    console.log('User stopped typing');
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
    
    // Delete other AI replies when user types a message
    deleteAIReplies();
    
    const newComment = {
        id: Date.now(),
        author: author,
        content: content,
        timestamp: new Date().toISOString(),
        likes: 0,
        permanent: true, // Make all comments permanent
        userId: currentUser ? currentUser.id : null
    };
    
    comments.unshift(newComment);
    saveComments();
    renderComments();
    clearForm();
    
    showNotification('Comment posted successfully! This comment is permanent and cannot be deleted.', 'success');
}

// Delete AI Replies
function deleteAIReplies() {
    // Remove comments that appear to be from AI/bots
    comments = comments.filter(comment => {
        // Filter out comments that might be from AI based on patterns
        const aiPatterns = [
            /bot/i,
            /ai assistant/i,
            /automated response/i,
            /generated response/i
        ];
        
        return !aiPatterns.some(pattern => pattern.test(comment.author)) && 
               !comment.permanent; // Keep permanent user comments
    });
    
    saveComments();
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
                <span>❤️</span>
                <span>${comment.likes || 0}</span>
            </button>
        </div>
    `;
    
    return commentItem;
}

// Like Comment
function likeComment(commentId) {
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        comment.likes = (comment.likes || 0) + 1;
        saveComments();
        renderComments();
        
        // Add animation to liked button
        event.target.classList.add('liked');
    }
}

// Clear Form
function clearForm() {
    const authorInput = document.getElementById('authorInput');
    const commentInput = document.getElementById('commentInput');
    
    if (authorInput) authorInput.value = '';
    if (commentInput) commentInput.value = '';
    
    stopTyping();
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

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 3000);
}

// Universal Comment System - Can be used anywhere
function initializeUniversalComments(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const defaultOptions = {
        allowDeletion: false,
        allowEditing: false,
        maxLength: 500,
        placeholder: 'Share your thoughts...',
        submitText: 'Post Comment'
    };
    
    const config = { ...defaultOptions, ...options };
    
    // Create universal comment HTML
    container.innerHTML = `
        <div class="universal-comments">
            <div class="universal-comments-header">
                <h3 class="universal-comments-title">Community Comments</h3>
                <p class="universal-comments-subtitle">Share your thoughts with the community</p>
            </div>
            <div class="comment-form-section">
                <div class="form-card">
                    <h3 class="form-title">Join the Conversation</h3>
                    <form class="comment-form" onsubmit="addUniversalComment(event, '${containerId}')">
                        <div class="form-group">
                            <label class="form-label">Your Name</label>
                            <input type="text" class="form-input" id="authorInput_${containerId}" 
                                   placeholder="Enter your name" required maxlength="50">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Your Comment</label>
                            <textarea class="form-textarea" id="commentInput_${containerId}" 
                                      placeholder="${config.placeholder}" 
                                      maxlength="${config.maxLength}" required></textarea>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">
                                <span>💬</span>
                                ${config.submitText}
                            </button>
                            <button type="button" class="btn btn-secondary" onclick="clearUniversalForm('${containerId}')">
                                <span>🔄</span>
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="comments-list" id="commentsList_${containerId}">
                <h3 class="comments-title">Recent Comments</h3>
                <div id="commentsContainer_${containerId}">
                    <!-- Comments will be rendered here -->
                </div>
            </div>
        </div>
    `;
    
    // Load and render comments for this container
    loadUniversalComments(containerId);
}

// Add Universal Comment
function addUniversalComment(event, containerId) {
    event.preventDefault();
    
    const authorInput = document.getElementById(`authorInput_${containerId}`);
    const commentInput = document.getElementById(`commentInput_${containerId}`);
    
    if (!authorInput || !commentInput) return;
    
    const author = authorInput.value.trim();
    const content = commentInput.value.trim();
    
    if (!author || !content) {
        showNotification('Please fill in both fields.', 'warning');
        return;
    }
    
    // Delete AI replies for this container
    deleteAIReplies();
    
    const newComment = {
        id: Date.now(),
        author: author,
        content: content,
        timestamp: new Date().toISOString(),
        likes: 0,
        permanent: true,
        containerId: containerId
    };
    
    comments.unshift(newComment);
    saveComments();
    renderUniversalComments(containerId);
    clearUniversalForm(containerId);
    
    showNotification('Comment posted successfully!', 'success');
}

// Clear Universal Form
function clearUniversalForm(containerId) {
    const authorInput = document.getElementById(`authorInput_${containerId}`);
    const commentInput = document.getElementById(`commentInput_${containerId}`);
    
    if (authorInput) authorInput.value = '';
    if (commentInput) commentInput.value = '';
}

// Load Universal Comments
function loadUniversalComments(containerId) {
    const storedComments = localStorage.getItem(`ultimateLinks_comments_${containerId}`);
    if (storedComments) {
        try {
            const containerComments = JSON.parse(storedComments);
            renderUniversalCommentsList(containerId, containerComments);
        } catch (error) {
            console.error('Error loading comments:', error);
        }
    }
}

// Save Universal Comments
function saveUniversalComments() {
    try {
        localStorage.setItem('ultimateLinks_comments', JSON.stringify(comments));
    } catch (error) {
        console.error('Error saving comments:', error);
    }
}

// Render Universal Comments List
function renderUniversalCommentsList(containerId, containerComments) {
    const commentsContainer = document.getElementById(`commentsContainer_${containerId}`);
    if (!commentsContainer) return;
    
    if (containerComments.length === 0) {
        commentsContainer.innerHTML = '<p>No comments yet. Be the first to share your thoughts!</p>';
        return;
    }
    
    commentsContainer.innerHTML = '';
    
    containerComments.forEach((comment, index) => {
        const commentItem = createCommentItem(comment, index);
        commentsContainer.appendChild(commentItem);
    });
}

// Export for Universal Use
window.CommentSystem = {
    initialize: initializeUniversalComments,
    addComment: addUniversalComment,
    clearForm: clearUniversalForm,
    loadComments: loadUniversalComments,
    saveComments: saveUniversalComments,
    renderComments: renderUniversalCommentsList
};
