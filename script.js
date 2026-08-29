// Menu data with descriptions
const menuData = {
    'manager-career': {
        title: 'Manager Career',
        description: 'Are you ready to lead a club straight off the pitch?',
        subtitle: 'Adapt a philosophy | Design the future | Compete around the world',
        playerImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80'
    },
    'pro-clubs': {
        title: 'Pro Clubs',
        description: 'Team up with your friends and compete in the ultimate team experience.',
        subtitle: 'Create a Pro | Build your legacy | Rise to the top',
        playerImage: 'https://images.unsplash.com/photo-1518611505868-48510c2e022f?w=800&q=80'
    },
    'ultimate-team': {
        title: 'Ultimate Team',
        description: 'Assemble your dream squad and dominate the competition.',
        subtitle: 'Pack | Build | Compete | Conquer',
        playerImage: 'https://images.unsplash.com/photo-1552521482-18a18b9173f3?w=800&q=80'
    },
    'player-career': {
        title: 'Player Career',
        description: 'Rise from youth academy to legendary status.',
        subtitle: 'Train | Develop | Compete | Become a legend',
        playerImage: 'https://images.unsplash.com/photo-1489944908914-47a3b316c039?w=800&q=80'
    },
    'clubs': {
        title: 'Clubs',
        description: 'Explore and manage your favorite football clubs.',
        subtitle: 'Manage | Strategize | Lead | Triumph',
        playerImage: 'https://images.unsplash.com/photo-1516585427867-ae6c47bcc89f?w=800&q=80'
    },
    'kick-off': {
        title: 'Kick Off',
        description: 'Play instant matches with any team and any player.',
        subtitle: 'Quick play | Customizable | Pure football action',
        playerImage: 'https://images.unsplash.com/photo-1517466895261-61b78f55e856?w=800&q=80'
    },
    'learn-to-play': {
        title: 'Learn To Play',
        description: 'Master the game with comprehensive tutorials and guides.',
        subtitle: 'Tutorials | Tips | Tactics | Improve your skills',
        playerImage: 'https://images.unsplash.com/photo-1542208496-0fcd80fcb092?w=800&q=80'
    }
};

// DOM Elements
const menuItems = document.querySelectorAll('.menu-item');
const mainTitle = document.getElementById('main-title');
const mainDescription = document.getElementById('main-description');
const mainSubtitle = document.getElementById('main-subtitle');
const playButton = document.getElementById('play-btn');
const background = document.getElementById('background');
const playerImage = document.getElementById('player-image');
const backgroundMusic = document.getElementById('background-music');
const musicBtn = document.getElementById('music-btn');

let currentMenu = 'manager-career';
let isMusicPlaying = false;

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
    playerImage.style.opacity = '0';
    
    setTimeout(() => {
        // Update content
        mainTitle.textContent = data.title;
        mainDescription.textContent = data.description;
        mainSubtitle.textContent = data.subtitle;
        playButton.textContent = `► EXPAND ${data.title.toUpperCase()}`;
        
        // Update player image
        playerImage.style.backgroundImage = `url('${data.playerImage}')`;
        
        // Update background
        background.classList.remove(...Object.keys(menuData).map(key => key));
        background.classList.add(menuKey);
        
        // Animate in
        mainTitle.style.opacity = '1';
        mainDescription.style.opacity = '1';
        mainSubtitle.style.opacity = '1';
        playerImage.style.opacity = '0.8';
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

// Music control
musicBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicBtn.textContent = '🔇';
    } else {
        backgroundMusic.play().catch(e => {
            console.log('Audio playback failed:', e);
            alert('Unable to play audio. Try enabling audio in your browser settings.');
        });
        musicBtn.textContent = '🎵';
    }
    isMusicPlaying = !isMusicPlaying;
    musicBtn.classList.toggle('playing');
});

// Try to autoplay music on load
window.addEventListener('DOMContentLoaded', () => {
    initializeContent();
    
    // Add smooth transition to content-box
    const contentBox = document.querySelector('.content-box');
    contentBox.style.transition = 'all 0.4s ease';
    
    // Add transition to text elements
    mainTitle.style.transition = 'opacity 0.3s ease';
    mainDescription.style.transition = 'opacity 0.3s ease';
    mainSubtitle.style.transition = 'opacity 0.3s ease';
    playerImage.style.transition = 'opacity 0.4s ease';
    
    // Attempt autoplay (will likely be blocked)
    backgroundMusic.volume = 0.3;
    backgroundMusic.play().catch(() => {
        console.log('Autoplay blocked. User must click music button.');
    });
});

// Stop music when tab is closed or hidden
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isMusicPlaying) {
        backgroundMusic.pause();
    }
});
