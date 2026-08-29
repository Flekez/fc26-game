// Menu data with descriptions
const menuData = {
    'manager-career': {
        title: 'Manager Career',
        description: 'Are you ready to lead a club straight off the pitch?',
        subtitle: 'Adapt a philosophy | Design the future | Compete around the world',
        circle: 'MC'
    },
    'pro-clubs': {
        title: 'Pro Clubs',
        description: 'Team up with your friends and compete in the ultimate team experience.',
        subtitle: 'Create a Pro | Build your legacy | Rise to the top',
        circle: 'PC'
    },
    'ultimate-team': {
        title: 'Ultimate Team',
        description: 'Assemble your dream squad and dominate the competition.',
        subtitle: 'Pack | Build | Compete | Conquer',
        circle: 'UT'
    },
    'player-career': {
        title: 'Player Career',
        description: 'Rise from youth academy to legendary status.',
        subtitle: 'Train | Develop | Compete | Become a legend',
        circle: 'PC'
    },
    'clubs': {
        title: 'Clubs',
        description: 'Explore and manage your favorite football clubs.',
        subtitle: 'Manage | Strategize | Lead | Triumph',
        circle: 'CL'
    },
    'kick-off': {
        title: 'Kick Off',
        description: 'Play instant matches with any team and any player.',
        subtitle: 'Quick play | Customizable | Pure football action',
        circle: 'KO'
    },
    'learn-to-play': {
        title: 'Learn To Play',
        description: 'Master the game with comprehensive tutorials and guides.',
        subtitle: 'Tutorials | Tips | Tactics | Improve your skills',
        circle: 'LP'
    }
};

// DOM Elements
const menuItems = document.querySelectorAll('.menu-item');
const mainTitle = document.getElementById('main-title');
const mainDescription = document.getElementById('main-description');
const mainSubtitle = document.getElementById('main-subtitle');
const logoCircle = document.querySelector('.logo-circle');
const playButton = document.getElementById('play-btn');
const background = document.getElementById('background');

let currentMenu = 'manager-career';

// Initialize with default content
function initializeContent() {
    setMenuContent('manager-career');
    document.querySelector('[data-menu="manager-career"]').classList.add('active');
}

// Set menu content
function setMenuContent(menuKey) {
    const data = menuData[menuKey];
    
    // Animate out
    mainTitle.style.opacity = '0';
    mainDescription.style.opacity = '0';
    mainSubtitle.style.opacity = '0';
    logoCircle.style.opacity = '0';
    
    setTimeout(() => {
        // Update content
        mainTitle.textContent = data.title;
        mainDescription.textContent = data.description;
        mainSubtitle.textContent = data.subtitle;
        logoCircle.textContent = data.circle;
        playButton.textContent = `► Expand ${data.title}`;
        
        // Update background
        background.classList.remove(...Object.keys(menuData).map(key => key));
        background.classList.add(menuKey);
        
        // Animate in
        mainTitle.style.opacity = '1';
        mainDescription.style.opacity = '1';
        mainSubtitle.style.opacity = '1';
        logoCircle.style.opacity = '1';
    }, 200);
    
    currentMenu = menuKey;
}

// Add hover listeners to menu items
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const menuKey = item.getAttribute('data-menu');
        setMenuContent(menuKey);
    });
    
    item.addEventListener('click', () => {
        // Remove active class from all items
        menuItems.forEach(m => m.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
    });
});

// Play button functionality
playButton.addEventListener('click', () => {
    alert(`Starting ${menuData[currentMenu].title}...\n\nThis would launch the game mode!`);
    console.log(`Launching: ${currentMenu}`);
});

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    initializeContent();
    
    // Add smooth transition to content-box
    const contentBox = document.querySelector('.content-box');
    contentBox.style.transition = 'all 0.4s ease';
    
    // Add transition to text elements
    mainTitle.style.transition = 'opacity 0.3s ease';
    mainDescription.style.transition = 'opacity 0.3s ease';
    mainSubtitle.style.transition = 'opacity 0.3s ease';
    logoCircle.style.transition = 'opacity 0.4s ease';
});