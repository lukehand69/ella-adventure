class AudioManager {
    constructor() {
        this.backgroundMusic = null;
        this.sounds = {};
        this.currentTheme = null;
        this.initialized = false;
        this.loadAudio();
    }

    async loadAudio() {
        // Create audio context on user interaction
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioContext();
        
        // Create a button to initialize audio
        const initButton = document.createElement('button');
        initButton.style.display = 'none';
        document.body.appendChild(initButton);
        
        initButton.addEventListener('click', () => {
            this.initialized = true;
            this.audioContext.resume();
            this.playTheme('menu-theme');
        });
        
        // Trigger click on any user interaction
        document.addEventListener('click', () => {
            if (!this.initialized) {
                initButton.click();
            }
        }, { once: true });

        // Load all audio from base64 data
        Object.keys(audioData).forEach(key => {
            this.sounds[key] = new Audio(audioData[key]);
        });
        
        // Loop background music
        Object.values(this.sounds).forEach(sound => {
            if (sound.src.includes('theme')) {
                sound.loop = true;
                sound.volume = 0.4;
            }
        });
    }

    playThemeWithEffect(theme) {
        // Fade out current theme if exists
        if (this.currentTheme) {
            const fadeOut = setInterval(() => {
                if (this.currentTheme.volume > 0.1) {
                    this.currentTheme.volume -= 0.1;
                } else {
                    clearInterval(fadeOut);
                    this.playNewTheme(theme);
                }
            }, 100);
        } else {
            this.playNewTheme(theme);
        }
    }

    playNewTheme(theme) {
        this.currentTheme = this.sounds[theme];
        this.currentTheme.volume = 0;
        this.currentTheme.play();
        
        // Fade in
        const fadeIn = setInterval(() => {
            if (this.currentTheme.volume < 0.4) {
                this.currentTheme.volume += 0.1;
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    }

    playSound(sound) {
        if (window.game.isMuted) return;
        const audioElement = this.sounds[sound];
        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play();
        }
    }

    stopTheme() {
        if (this.currentTheme) {
            this.currentTheme.pause();
            this.currentTheme.currentTime = 0;
            this.currentTheme = null;
        }
    }

    muteAll() {
        Object.values(this.sounds).forEach(sound => {
            sound.muted = true;
        });
    }

    unmuteAll() {
        Object.values(this.sounds).forEach(sound => {
            sound.muted = false;
        });
    }

    playTheme(theme) {
        if (window.game.isMuted) return;
        if (this.currentTheme) {
            this.currentTheme.pause();
            this.currentTheme.currentTime = 0;
        }
        
        this.currentTheme = this.sounds[theme];
        if (this.currentTheme) {
            this.currentTheme.play().catch(e => {
                console.log('Audio playback failed:', e);
            });
        }
    }
}

window.audioManager = new AudioManager(); 