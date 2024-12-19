class Game {
    constructor() {
        this.currentStory = null;
        this.currentScene = null;
        this.isMuted = false;
        this.stories = stories;
        
        this.init();
    }

    init() {
        this.checkHomeScreenPrompt();
        this.setupEventListeners();
    }

    checkHomeScreenPrompt() {
        // Check if running as installed PWA
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        
        if (!isStandalone && !localStorage.getItem('promptShown')) {
            const prompt = document.getElementById('homeScreenPrompt');
            prompt.classList.remove('hidden');
        }
    }

    setupEventListeners() {
        // Mute button
        document.getElementById('muteButton').addEventListener('click', () => {
            this.toggleMute();
        });

        // Home screen prompt
        document.getElementById('closePrompt')?.addEventListener('click', () => {
            document.getElementById('homeScreenPrompt').classList.add('hidden');
            localStorage.setItem('promptShown', 'true');
        });

        // Story selection
        document.querySelectorAll('.story-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const storyId = e.currentTarget.dataset.story;
                this.startStory(storyId);
            });
        });

        // Back to menu button
        document.getElementById('backToMenu').addEventListener('click', () => {
            this.showMainMenu();
        });
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        const muteButton = document.getElementById('muteButton');
        muteButton.textContent = this.isMuted ? '🔇' : '🎵';
        
        if (this.isMuted) {
            window.audioManager.muteAll();
        } else {
            window.audioManager.unmuteAll();
        }
    }

    startStory(storyId) {
        document.getElementById('mainMenu').classList.remove('active');
        document.getElementById('storyContainer').classList.add('active');
        document.querySelector('.story-title').textContent = this.stories[storyId].title;
        
        this.loadStory(storyId);
    }

    loadStory(storyId) {
        this.currentStory = this.stories[storyId];
        this.currentScene = 'start';
        this.showScene();
        
        // Play theme music for this story
        window.audioManager.playTheme(this.currentStory.theme);
    }

    showScene() {
        const scene = this.currentStory.scenes[this.currentScene];
        const container = document.getElementById('storyContainer');
        
        if (typeof sceneIllustrations === 'undefined') {
            console.error('Scene illustrations not loaded');
            return;
        }
        
        console.log('Current scene:', this.currentScene);
        console.log('Scene data:', scene);
        console.log('Looking for illustration:', scene.illustration);
        console.log('Available illustrations:', Object.keys(sceneIllustrations));
        
        // Update illustration
        const illustration = sceneIllustrations[scene.illustration];
        if (!illustration) {
            console.error(`Illustration not found: ${scene.illustration}`);
            container.querySelector('.illustration').innerHTML = 
                `<svg viewBox="0 0 400 300"><text x="200" y="150" text-anchor="middle">Illustration loading...</text></svg>`;
        } else {
            container.querySelector('.illustration').innerHTML = illustration;
        }
        
        // Update text
        container.querySelector('.story-text').textContent = scene.text;
        
        // Update choices
        const choicesContainer = container.querySelector('.choices');
        choicesContainer.innerHTML = '';
        
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = `choice-button ${choice.type}`;
            button.textContent = choice.text;
            button.addEventListener('click', () => this.makeChoice(choice));
            choicesContainer.appendChild(button);
        });
    }

    makeChoice(choice) {
        window.audioManager.playSound('choice');
        if (choice.next === 'menu') {
            this.showMainMenu();
            return;
        }
        this.currentScene = choice.next;
        this.showScene();
    }

    showMainMenu() {
        document.getElementById('storyContainer').classList.remove('active');
        document.getElementById('mainMenu').classList.add('active');
        if (this.currentTheme) {
            window.audioManager.stopTheme();
        }
    }
}

// Initialize game when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.game = new Game();
}); 