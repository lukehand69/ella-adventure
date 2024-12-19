// Base64 encoded audio data for smaller file sizes and offline functionality
const audioData = {
    // Menu theme: gentle marimba melody
    'menu-theme': `data:audio/mp3;base64,...`,
    
    // Tower Hill theme: gentle nature sounds with soft background music
    'nature': `data:audio/mp3;base64,...`,
    
    // Beach theme: soft waves and seagulls with light music
    'beach': `data:audio/mp3;base64,...`,
    
    // Garden theme: birds chirping with peaceful melody
    'garden': `data:audio/mp3;base64,...`,
    
    // Sound effects
    'choice': `data:audio/mp3;base64,...`, // Soft click
    'success': `data:audio/mp3;base64,...`, // Happy chime
    'wrong': `data:audio/mp3;base64,...`, // Gentle "oops"
    'back': `data:audio/mp3;base64,...`, // Page turn sound
    'complete': `data:audio/mp3;base64,...` // Achievement sound
};

// Load audio from base64
function loadAudioFromData(key) {
    const audio = new Audio(audioData[key]);
    return audio;
} 