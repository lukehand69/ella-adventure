const sceneIllustrations = {
    // Tower Hill scenes
    "tower-hill-start": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky with clouds -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <g>
                <ellipse cx="50" cy="40" rx="20" ry="10" fill="white" opacity="0.8"/>
                <ellipse cx="70" cy="40" rx="15" ry="8" fill="white" opacity="0.8"/>
                <ellipse cx="300" cy="60" rx="25" ry="12" fill="white" opacity="0.8"/>
            </g>
            
            <!-- Volcano shapes -->
            <path d="M0,200 L150,50 L300,200 Z" fill="#5a7302"/>
            <path d="M100,200 L250,80 L400,200 Z" fill="#4a6302"/>
            
            <!-- Ground -->
            <rect x="0" y="200" width="400" height="100" fill="#7aa555"/>
            
            <!-- Sun with rays -->
            <g transform="translate(350,50)">
                <circle cx="0" cy="0" r="30" fill="#FFD700"/>
                <line x1="-40" y1="0" x2="-50" y2="0" stroke="#FFD700" stroke-width="2"/>
                <line x1="40" y1="0" x2="50" y2="0" stroke="#FFD700" stroke-width="2"/>
                <line x1="0" y1="-40" x2="0" y2="-50" stroke="#FFD700" stroke-width="2"/>
                <line x1="0" y1="40" x2="0" y2="50" stroke="#FFD700" stroke-width="2"/>
            </g>
            
            <!-- Trees -->
            <g transform="translate(50,150)">
                <rect x="-10" y="0" width="20" height="80" fill="#8B4513"/>
                <path d="M-30,-20 L0,-50 L30,-20 Z" fill="#228B22"/>
                <path d="M-25,0 L0,-30 L25,0 Z" fill="#228B22"/>
            </g>
            
            <!-- Characters -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.koala(250, 180, { baby: true })}
            
            <!-- Birds in sky -->
            <g transform="translate(100,80)">
                <path d="M0,0 Q5,-5 10,0 Q15,-5 20,0" stroke="#333" fill="none"/>
                <path d="M30,20 Q35,15 40,20 Q45,15 50,20" stroke="#333" fill="none"/>
            </g>
        </svg>
    `,
    "tower-hill-search": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky with clouds -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <g>
                <ellipse cx="50" cy="40" rx="20" ry="10" fill="white" opacity="0.8"/>
                <ellipse cx="300" cy="60" rx="25" ry="12" fill="white" opacity="0.8"/>
            </g>
            
            <!-- Ground -->
            <rect x="0" y="200" width="400" height="100" fill="#7aa555"/>
            
            <!-- Trees -->
            <g transform="translate(300,150)">
                <!-- Main tree with mother koala -->
                <rect x="-15" y="0" width="30" height="100" fill="#8B4513"/>
                <path d="M-40,-20 L0,-60 L40,-20 Z" fill="#228B22"/>
                <path d="M-35,10 L0,-30 L35,10 Z" fill="#228B22"/>
                ${svgComponents.koala(-10, -20)} <!-- Mother koala -->
            </g>
            
            <!-- Ella looking up -->
            ${svgComponents.ella(150, 220, { lookingUp: true, pigtails: true })}
            
            <!-- Baby koala -->
            ${svgComponents.koala(250, 180, { baby: true })}
        </svg>
    `,
    "tower-hill-happy": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky and ground -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#7aa555"/>
            
            <!-- Trees -->
            <g transform="translate(300,150)">
                <rect x="-15" y="0" width="30" height="100" fill="#8B4513"/>
                <path d="M-40,-20 L0,-60 L40,-20 Z" fill="#228B22"/>
                ${svgComponents.koala(-10, -20)} <!-- Mother koala -->
                ${svgComponents.koala(10, -10, { baby: true })} <!-- Baby koala closer to mother -->
            </g>
            
            <!-- Ella and Dad watching -->
            ${svgComponents.dad(150, 220, { pointingArm: true })}
            ${svgComponents.ella(120, 220, { pigtails: true })}
        </svg>
    `,
    "tower-hill-dad": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky and ground -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#7aa555"/>
            
            <!-- Dad explaining -->
            ${svgComponents.dad(150, 220, { pointingArm: true })}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Baby koala -->
            ${svgComponents.koala(250, 180, { baby: true })}
            
            <!-- Speech bubble -->
            <path d="M160,160 Q180,150 200,160 L190,170 L180,160 Q160,150 160,160" 
                fill="white" stroke="#333"/>
        </svg>
    `,
    "tower-hill-wrong": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky and ground -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#7aa555"/>
            
            <!-- Dad stopping Ella -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Startled baby koala -->
            ${svgComponents.koala(250, 180, { baby: true })}
            
            <!-- Stop gesture -->
            <path d="M140,180 L160,200" stroke="red" stroke-width="3"/>
            <path d="M140,200 L160,180" stroke="red" stroke-width="3"/>
        </svg>
    `,
    "tower-hill-reunion": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky and ground -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#7aa555"/>
            
            <!-- Tree with koalas -->
            <g transform="translate(300,150)">
                <rect x="-15" y="0" width="30" height="100" fill="#8B4513"/>
                <path d="M-40,-20 L0,-60 L40,-20 Z" fill="#228B22"/>
                ${svgComponents.koala(-10, -20)} <!-- Mother koala -->
                ${svgComponents.koala(10, -10, { baby: true })} <!-- Baby koala climbing -->
            </g>
            
            <!-- Ella and Dad watching from distance -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Hearts -->
            <g transform="translate(280,140)">
                <path d="M0,0 Q5,-5 10,0 T20,0 T10,10 T0,0" fill="#ff69b4"/>
            </g>
        </svg>
    `,
    "tower-hill-startled": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky and ground -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#7aa555"/>
            
            <!-- Tree with startled koalas -->
            <g transform="translate(300,150)">
                <rect x="-15" y="0" width="30" height="100" fill="#8B4513"/>
                <path d="M-40,-20 L0,-60 L40,-20 Z" fill="#228B22"/>
                ${svgComponents.koala(-10, -20)} <!-- Mother koala -->
                ${svgComponents.koala(10, -10, { baby: true })} <!-- Baby koala -->
                
                <!-- Startled marks -->
                <text x="-20" y="-30" fill="black" font-size="20">!</text>
                <text x="20" y="-30" fill="black" font-size="20">!</text>
            </g>
            
            <!-- Ella and Dad -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Sound waves -->
            <path d="M100,180 Q120,170 100,160" stroke="#333" fill="none"/>
            <path d="M90,180 Q110,170 90,160" stroke="#333" fill="none"/>
        </svg>
    `,
    "tower-hill-end": `
        <svg viewBox="0 0 400 300" style="background-color: #ff7f50">
            <!-- Sunset sky -->
            <rect x="0" y="0" width="400" height="200" fill="#ff7f50"/>
            <rect x="0" y="200" width="400" height="100" fill="#7aa555"/>
            
            <!-- Setting sun -->
            <circle cx="350" cy="50" r="30" fill="#ff4500"/>
            
            <!-- Happy Ella and Dad walking -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Distant tree with koala family -->
            <g transform="translate(300,150)" opacity="0.8">
                <rect x="-15" y="0" width="30" height="100" fill="#8B4513"/>
                <path d="M-40,-20 L0,-60 L40,-20 Z" fill="#228B22"/>
                ${svgComponents.koala(-10, -20)} <!-- Mother koala -->
                ${svgComponents.koala(10, -10, { baby: true })} <!-- Baby koala -->
            </g>
            
            <!-- Stars/sparkles -->
            <g fill="#FFD700">
                <text x="100" y="50" font-size="20">✨</text>
                <text x="200" y="70" font-size="20">✨</text>
                <text x="300" y="40" font-size="20">✨</text>
            </g>
        </svg>
    `,
    "beach-start": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            
            <!-- Ocean with waves -->
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,160 Q100,140 200,160 T400,160" fill="none" stroke="white" stroke-width="2" opacity="0.5"/>
            <path d="M0,170 Q100,150 200,170 T400,170" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
            
            <!-- Beach -->
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Sun -->
            <circle cx="350" cy="50" r="30" fill="#FFD700"/>
            
            <!-- Clouds -->
            <g>
                <ellipse cx="50" cy="40" rx="20" ry="10" fill="white" opacity="0.8"/>
                <ellipse cx="150" cy="60" rx="25" ry="12" fill="white" opacity="0.8"/>
            </g>
            
            <!-- Kite on ground -->
            ${svgComponents.kite(250, 200)}
            
            <!-- Ella and Dad -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
        </svg>
    `,
    "beach-safety-check": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky and ocean -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            
            <!-- Beach -->
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Lifeguard tower -->
            <g transform="translate(300,140)">
                <rect x="-20" y="0" width="40" height="60" fill="#8B4513"/>
                <rect x="-25" y="-20" width="50" height="20" fill="#DEB887"/>
                <path d="M-30,-20 L0,-40 L30,-20" fill="#A0522D"/>
                <!-- Flag pole -->
                <rect x="20" y="-50" width="4" height="30" fill="#696969"/>
                <!-- Green flag -->
                <path d="M24,-50 L44,-40 L24,-30" fill="#32CD32"/>
            </g>
            
            <!-- Ella and Dad looking at flags -->
            ${svgComponents.dad(150, 220, { pointingArm: true })}
            ${svgComponents.ella(120, 220, { pigtails: true, lookingUp: true })}
        </svg>
    `,
    "beach-sunscreen": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Similar background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Beach umbrella -->
            <g transform="translate(180,160)">
                <line x1="0" y1="0" x2="0" y2="-50" stroke="#8B4513" stroke-width="3"/>
                <path d="M-30,-50 Q0,-70 30,-50" fill="#FF6B6B"/>
            </g>
            
            <!-- Beach towel -->
            <rect x="140" y="190" width="80" height="40" fill="#FF69B4" transform="skewX(-10)"/>
            
            <!-- Ella and Dad applying sunscreen -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Sunscreen bottle -->
            <g transform="translate(170,200)">
                <rect x="0" y="0" width="10" height="15" fill="white"/>
                <rect x="2" y="-5" width="6" height="5" fill="yellow"/>
            </g>
        </svg>
    `,
    "beach-kites": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Sun -->
            <circle cx="350" cy="50" r="30" fill="#FFD700"/>
            
            <!-- Ella and Dad with kites -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Kites being untangled -->
            <g transform="translate(180,200)">
                ${svgComponents.kite(0, 0)}
                <path d="M20,20 Q30,30 40,25 Q50,20 45,10" stroke="#333" fill="none"/>
            </g>
        </svg>
    `,
    "beach-wind": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Wind indicators -->
            <g transform="translate(100,100)" opacity="0.3">
                <path d="M0,0 Q20,-10 40,0" stroke="#fff" stroke-width="3"/>
                <path d="M20,20 Q40,10 60,20" stroke="#fff" stroke-width="3"/>
                <path d="M40,40 Q60,30 80,40" stroke="#fff" stroke-width="3"/>
            </g>
            
            <!-- Ella checking wind -->
            ${svgComponents.ella(120, 220, { pigtails: true, lookingUp: true })}
            ${svgComponents.dad(180, 220, { pointingArm: true })}
            
            <!-- Kite ready to launch -->
            ${svgComponents.kite(250, 180)}
        </svg>
    `,
    "beach-success": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Flying kite -->
            ${svgComponents.kite(200, 50, { flying: true, stringLength: 150 })}
            
            <!-- Ella and Dad flying kites -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true, lookingUp: true })}
            
            <!-- Seagulls -->
            <g transform="translate(50,80)">
                <path d="M0,0 Q5,-5 10,0 Q15,-5 20,0" stroke="#333" fill="none"/>
                <path d="M30,20 Q35,15 40,20 Q45,15 50,20" stroke="#333" fill="none"/>
            </g>
        </svg>
    `,
    "beach-end": `
        <svg viewBox="0 0 400 300" style="background-color: #FF7F50">
            <!-- Sunset sky -->
            <rect x="0" y="0" width="400" height="200" fill="#FF7F50"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Setting sun -->
            <circle cx="350" cy="50" r="30" fill="#FF4500"/>
            
            <!-- Happy Ella and Dad -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Shell collection -->
            <g transform="translate(180,200)">
                ${svgComponents.shell(0, 0, { color: '#FFF5EE' })}
                ${svgComponents.shell(30, 5, { color: '#FFE4E1' })}
                ${svgComponents.shell(15, 10, { color: '#FFDAB9' })}
            </g>
            
            <!-- Single kite flying in distance -->
            ${svgComponents.kite(200, 80, { flying: true, stringLength: 100 })}
            
            <!-- Stars/sparkles -->
            <g fill="#FFD700">
                <text x="100" y="50" font-size="20">✨</text>
                <text x="200" y="70" font-size="20">✨</text>
            </g>
        </svg>
    `,
    "beach-shells": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Ella finding shells -->
            ${svgComponents.ella(150, 220, { pigtails: true })}
            ${svgComponents.dad(200, 220)}
            
            <!-- Shells scattered on beach -->
            ${svgComponents.shell(100, 200, { color: '#FFF5EE' })}
            ${svgComponents.shell(160, 210, { color: '#FFE4E1' })}
            ${svgComponents.shell(130, 205, { color: '#FFDAB9' })}
        </svg>
    `,
    "garden-start": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <!-- Garden ground -->
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Tomato plants -->
            ${svgComponents.tomatoPlant(100, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(200, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(300, 170, { withTomatoes: true })}
            
            <!-- Ella and Dad -->
            ${svgComponents.dad(150, 220, { pointingArm: true })}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Butterflies -->
            ${svgComponents.bee(250, 100)}
            ${svgComponents.bee(280, 120)}
        </svg>
    `,
    "garden-watering": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Tomato plants -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(250, 170, { withTomatoes: true })}
            
            <!-- Ella watering -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.wateringCan(140, 200, { watering: true })}
            
            <!-- Dad supervising -->
            ${svgComponents.dad(200, 220)}
        </svg>
    `,
    "garden-bugs": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Plants with ladybugs -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true })}
            ${svgComponents.ladybug(160, 160)}
            ${svgComponents.ladybug(140, 150)}
            
            <!-- Ella and Dad looking at bugs -->
            ${svgComponents.ella(120, 220, { pigtails: true, lookingUp: true })}
            ${svgComponents.dad(180, 220)}
        </svg>
    `,
    "garden-patience": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Plants with green tomatoes -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true, greenTomatoes: true })}
            ${svgComponents.tomatoPlant(250, 170, { withTomatoes: true, greenTomatoes: true })}
            
            <!-- Ella and Dad -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220, { pointingArm: true })}
        </svg>
    `,
    "garden-learning": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Tomato plants in different stages -->
            ${svgComponents.tomatoPlant(100, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(200, 170, { withTomatoes: true, greenTomatoes: true })}
            ${svgComponents.tomatoPlant(300, 170)}
            
            <!-- Ella and Dad -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220, { pointingArm: true })}
            
            <!-- Speech bubble with tomato -->
            <g transform="translate(200,150)">
                <path d="M0,0 Q20,-10 40,0 L30,10 L20,0 Q0,-10 0,0" fill="white" stroke="#333"/>
                <circle cx="20" cy="-5" r="8" fill="#ff6347"/>
            </g>
        </svg>
    `,
    "garden-highfive": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sunset sky -->
            <rect x="0" y="0" width="400" height="200" fill="#FF7F50"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed with flourishing plants -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            ${svgComponents.tomatoPlant(100, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(200, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(300, 170, { withTomatoes: true })}
            
            <!-- Ella and Dad high-fiving -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220, { pointingArm: true })}
            
            <!-- Sparkles -->
            <g fill="#FFD700">
                <text x="100" y="50" font-size="20">✨</text>
                <text x="200" y="70" font-size="20">✨</text>
                <text x="300" y="40" font-size="20">✨</text>
            </g>
        </svg>
    `,
    "garden-growth": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Plants with growing tomatoes -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true, greenTomatoes: true })}
            ${svgComponents.tomatoPlant(250, 170, { withTomatoes: true, greenTomatoes: true })}
            
            <!-- Ella and Dad looking at tomatoes -->
            ${svgComponents.ella(120, 220, { pigtails: true, lookingUp: true })}
            ${svgComponents.dad(180, 220, { pointingArm: true })}
            
            <!-- Magnifying effect over tomato -->
            <g transform="translate(200,150)">
                <circle cx="0" cy="0" r="15" fill="none" stroke="#333" stroke-width="1"/>
                <circle cx="0" cy="0" r="6" fill="#90EE90"/>
            </g>
        </svg>
    `,
    "garden-measuring": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Plants -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true, greenTomatoes: true })}
            ${svgComponents.tomatoPlant(250, 170, { withTomatoes: true, greenTomatoes: true })}
            
            <!-- Ella and Dad with chart -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220)}
            
            <!-- Growth chart -->
            <g transform="translate(200,150)">
                <rect x="-20" y="-30" width="40" height="50" fill="white" stroke="#333"/>
                <line x1="-15" y1="-20" x2="15" y2="-20" stroke="#333"/>
                <line x1="-15" y1="-10" x2="15" y2="-10" stroke="#333"/>
                <line x1="-15" y1="0" x2="15" y2="0" stroke="#333"/>
                <line x1="-15" y1="10" x2="15" y2="10" stroke="#333"/>
            </g>
        </svg>
    `,
    "beach-tumble": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Tumbling kite -->
            ${svgComponents.kite(200, 100, { flying: true, stringLength: 100 })}
            <path d="M200,100 Q220,120 200,140 Q180,160 200,180" 
                stroke="#333" fill="none" stroke-dasharray="5,5"/>
            
            <!-- Ella and Dad -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Oops marks -->
            <g transform="translate(180,80)">
                <text x="0" y="0" font-size="20" fill="#333">❌</text>
                <text x="20" y="20" font-size="20" fill="#333">❌</text>
            </g>
        </svg>
    `,
    "beach-more-shells": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Special spiral shell -->
            <g transform="translate(150,200)">
                ${svgComponents.shell(0, 0, { color: '#FFF5EE' })}
                <!-- Add sparkle effect -->
                <text x="10" y="-10" font-size="15" fill="#FFD700">✨</text>
            </g>
            
            <!-- Wind effect -->
            <g transform="translate(100,100)" opacity="0.3">
                <path d="M0,0 Q20,-10 40,0" stroke="#fff" stroke-width="3"/>
                <path d="M20,20 Q40,10 60,20" stroke="#fff" stroke-width="3"/>
            </g>
            
            <!-- Ella and Dad -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220, { pointingArm: true })}
        </svg>
    `,
    "beach-teamwork": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Swaying kite -->
            ${svgComponents.kite(200, 100, { flying: true, stringLength: 120 })}
            <path d="M200,100 Q210,110 200,120" 
                stroke="#333" fill="none" stroke-dasharray="2,2"/>
            
            <!-- Ella and Dad -->
            ${svgComponents.dad(150, 220, { pointingArm: true })}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Speech bubble with heart -->
            <g transform="translate(160,170)">
                <path d="M0,0 Q10,-10 20,0 L15,10 L10,0 Q0,-10 0,0" 
                    fill="white" stroke="#333"/>
                <text x="5" y="5" font-size="12">❤️</text>
            </g>
        </svg>
    `,
    "garden-tasks": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Tomato plants -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true, greenTomatoes: true })}
            ${svgComponents.tomatoPlant(250, 170, { withTomatoes: true, greenTomatoes: true })}
            
            <!-- Garden tools -->
            <g transform="translate(100,200)">
                ${svgComponents.wateringCan(0, 0)}
                <!-- Trowel -->
                <path d="M30,0 L40,-10 L45,-8 L35,2 Z" fill="#A9A9A9"/>
            </g>
            
            <!-- Ella and Dad -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220, { pointingArm: true })}
            
            <!-- Flower packet -->
            <g transform="translate(200,150)">
                <rect x="-10" y="-15" width="20" height="30" fill="#FFB6C1"/>
                ${svgComponents.flower(0, -5, { type: 'marigold' })}
            </g>
        </svg>
    `,
    "garden-soil": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Tomato plants -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(250, 170, { withTomatoes: true })}
            
            <!-- Ella checking soil -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220)}
            
            <!-- Hand checking soil -->
            <g transform="translate(140,190)">
                <path d="M0,0 Q5,-5 10,0" stroke="#DEB887" fill="none" stroke-width="2"/>
                <circle cx="5" cy="2" r="3" fill="#654321"/>
            </g>
        </svg>
    `,
    "beach-rules": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Similar beach background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Lifeguard tower -->
            <g transform="translate(300,140)">
                <rect x="-20" y="0" width="40" height="60" fill="#8B4513"/>
                <rect x="-25" y="-20" width="50" height="20" fill="#DEB887"/>
                <path d="M-30,-20 L0,-40 L30,-20" fill="#A0522D"/>
                <!-- Flag pole -->
                <rect x="20" y="-50" width="4" height="30" fill="#696969"/>
                <!-- Green flag -->
                <path d="M24,-50 L44,-40 L24,-30" fill="#32CD32"/>
            </g>
            
            <!-- Ella and Dad discussing -->
            ${svgComponents.dad(150, 220, { pointingArm: true })}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Safety zone markers -->
            <g transform="translate(200,170)">
                <rect x="-5" y="0" width="10" height="30" fill="yellow"/>
                <rect x="45" y="0" width="10" height="30" fill="yellow"/>
            </g>
        </svg>
    `,
    "beach-setup": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Similar beach background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Beach umbrella -->
            <g transform="translate(180,160)">
                <line x1="0" y1="0" x2="0" y2="-50" stroke="#8B4513" stroke-width="3"/>
                <path d="M-30,-50 Q0,-70 30,-50" fill="#FF6B6B"/>
            </g>
            
            <!-- Beach towels -->
            <rect x="140" y="190" width="80" height="40" fill="#FF69B4" transform="skewX(-10)"/>
            <rect x="240" y="190" width="80" height="40" fill="#87CEEB" transform="skewX(-10)"/>
            
            <!-- Ella and Dad setting up -->
            ${svgComponents.dad(150, 220)}
            ${svgComponents.ella(120, 220, { pigtails: true })}
            
            <!-- Lifeguard tower in background -->
            <g transform="translate(300,140)" opacity="0.8">
                <rect x="-20" y="0" width="40" height="60" fill="#8B4513"/>
                <rect x="-25" y="-20" width="50" height="20" fill="#DEB887"/>
            </g>
        </svg>
    `,
    "beach-wind-shells": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Similar beach background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <path d="M0,150 Q100,130 200,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Strong wind effects -->
            <g transform="translate(100,100)" opacity="0.3">
                <path d="M0,0 Q20,-10 40,0" stroke="#fff" stroke-width="4"/>
                <path d="M20,20 Q40,10 60,20" stroke="#fff" stroke-width="4"/>
                <path d="M40,40 Q60,30 80,40" stroke="#fff" stroke-width="4"/>
            </g>
            
            <!-- Scattered shells being blown -->
            ${svgComponents.shell(100, 200, { color: '#FFF5EE' })}
            ${svgComponents.shell(160, 210, { color: '#FFE4E1' })}
            <path d="M120,195 Q130,190 140,195" stroke="#fff" stroke-width="2"/>
            <path d="M170,205 Q180,200 190,205" stroke="#fff" stroke-width="2"/>
            
            <!-- Ella and Dad -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220, { pointingArm: true })}
        </svg>
    `,
    "garden-ladybugs": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Plants with lots of ladybugs -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true })}
            ${svgComponents.ladybug(160, 160)}
            ${svgComponents.ladybug(140, 150)}
            ${svgComponents.ladybug(170, 155)}
            ${svgComponents.ladybug(145, 165)}
            
            <!-- Ella and Dad -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220)}
            
            <!-- Magnifying glass effect -->
            <circle cx="160" cy="160" r="20" fill="none" stroke="#333" stroke-width="1"/>
        </svg>
    `,
    "garden-creatures": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Plants with various creatures -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true })}
            ${svgComponents.bee(160, 160)}
            ${svgComponents.bee(180, 150)}
            ${svgComponents.ladybug(140, 165)}
            
            <!-- Worm -->
            <path d="M170,185 Q180,180 190,185 Q200,190 210,185" 
                stroke="#FFA07A" fill="none" stroke-width="3"/>
            
            <!-- Ella and Dad -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220, { pointingArm: true })}
        </svg>
    `,
    "garden-bees": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Plants with bees -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true })}
            ${svgComponents.bee(160, 160)}
            ${svgComponents.bee(180, 150)}
            ${svgComponents.bee(140, 140)}
            
            <!-- Flower patch -->
            ${svgComponents.flower(200, 170, { type: 'marigold' })}
            ${svgComponents.flower(220, 175)}
            
            <!-- Ella and Dad -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220)}
        </svg>
    `,
    "garden-planting": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Existing plants -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(250, 170, { withTomatoes: true })}
            
            <!-- New flower bed -->
            ${svgComponents.flower(180, 175, { type: 'marigold' })}
            ${svgComponents.flower(200, 170)}
            
            <!-- Ella and Dad planting -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220)}
            
            <!-- Garden tools -->
            <g transform="translate(160,190)">
                <path d="M0,0 L10,-10 L15,-8 L5,2 Z" fill="#A9A9A9"/>
            </g>
        </svg>
    `,
    "garden-planning": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Plants -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(250, 170, { withTomatoes: true })}
            
            <!-- Ella and Dad with garden plan -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220)}
            
            <!-- Garden plan/chart -->
            <g transform="translate(200,150)">
                <rect x="-20" y="-30" width="40" height="50" fill="white" stroke="#333"/>
                <line x1="-15" y1="-20" x2="15" y2="-20" stroke="#333"/>
                <line x1="-15" y1="-10" x2="15" y2="-10" stroke="#333"/>
                <line x1="-15" y1="0" x2="15" y2="0" stroke="#333"/>
            </g>
        </svg>
    `,
    "garden-schedule": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Background -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
            
            <!-- Garden bed -->
            <rect x="50" y="180" width="300" height="40" fill="#654321"/>
            
            <!-- Plants -->
            ${svgComponents.tomatoPlant(150, 170, { withTomatoes: true })}
            ${svgComponents.tomatoPlant(250, 170, { withTomatoes: true })}
            
            <!-- Ella and Dad with schedule -->
            ${svgComponents.ella(120, 220, { pigtails: true })}
            ${svgComponents.dad(180, 220)}
            
            <!-- Schedule/Calendar -->
            <g transform="translate(200,150)">
                <rect x="-25" y="-35" width="50" height="60" fill="white" stroke="#333"/>
                <line x1="-20" y1="-25" x2="20" y2="-25" stroke="#333"/>
                <line x1="-20" y1="-15" x2="20" y2="-15" stroke="#333"/>
                <line x1="-20" y1="-5" x2="20" y2="-5" stroke="#333"/>
                <line x1="-20" y1="5" x2="20" y2="5" stroke="#333"/>
                <!-- Checkmarks -->
                <text x="-15" y="-27" font-size="10">✓</text>
                <text x="-15" y="-17" font-size="10">✓</text>
            </g>
        </svg>
    `
}; 