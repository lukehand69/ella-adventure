// Reusable SVG components
const svgComponents = {
    // Characters
    ella: (x, y, options = {}) => `
        <g transform="translate(${x},${y})">
            <!-- Ella -->
            <rect x="-7" y="-40" width="15" height="30" fill="#9932CC"/>
            <circle cx="0" cy="-48" r="8" fill="#DEB887"/>
            <!-- Face details -->
            ${options.lookingUp ? `
                <circle cx="-3" cy="-50" r="1" fill="black"/>
                <circle cx="3" cy="-50" r="1" fill="black"/>
            ` : `
                <circle cx="-3" cy="-48" r="1" fill="black"/>
                <circle cx="3" cy="-48" r="1" fill="black"/>
            `}
            <!-- Smile -->
            <path d="M-3,-45 Q0,-43 3,-45" stroke="black" fill="none"/>
            ${options.pigtails ? `
                <!-- Pigtails -->
                <path d="M-8,-55 Q-15,-50 -12,-45" stroke="black" fill="none" stroke-width="2"/>
                <path d="M8,-55 Q15,-50 12,-45" stroke="black" fill="none" stroke-width="2"/>
            ` : ''}
        </g>
    `,

    dad: (x, y, options = {}) => `
        <g transform="translate(${x},${y})">
            <!-- Dad -->
            <rect x="-10" y="-50" width="20" height="40" fill="#4169E1"/>
            <circle cx="0" cy="-60" r="10" fill="#FFE4B5"/>
            <!-- Face details -->
            <circle cx="-4" cy="-62" r="1" fill="black"/>
            <circle cx="4" cy="-62" r="1" fill="black"/>
            <!-- Smile -->
            <path d="M-4,-58 Q0,-56 4,-58" stroke="black" fill="none"/>
            ${options.pointingArm ? `
                <line x1="10" y1="-45" x2="30" y2="-60" stroke="#4169E1" stroke-width="4"/>
            ` : ''}
        </g>
    `,

    // Environments
    beach: `
        <!-- Sky -->
        <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
        <!-- Ocean with waves -->
        <path d="M0,150 Q50,140 100,150 T200,150 T300,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
        <path d="M0,160 Q50,150 100,160 T200,160 T300,160 T400,160" fill="none" stroke="white" stroke-width="2" opacity="0.5"/>
        <!-- Beach -->
        <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
    `,

    garden: `
        <!-- Sky -->
        <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
        <!-- Garden Ground -->
        <rect x="0" y="200" width="400" height="100" fill="#8b4513"/>
        <!-- Garden Bed -->
        <rect x="50" y="180" width="300" height="40" fill="#654321"/>
    `,

    // Objects
    tomatoPlant: (x, y, options = {}) => `
        <g transform="translate(${x},${y})">
            <!-- Stem -->
            <rect x="-5" y="0" width="10" height="40" fill="#228B22"/>
            <!-- Leaves -->
            <path d="M-20,-10 Q-10,-20 0,-10" fill="#228B22"/>
            <path d="M0,-10 Q10,-20 20,-10" fill="#228B22"/>
            ${options.withTomatoes ? `
                <!-- Tomatoes -->
                <circle cx="10" cy="0" r="8" fill="#ff6347"/>
                <circle cx="-8" cy="-5" r="8" fill="#ff6347"/>
                ${options.greenTomatoes ? `
                    <circle cx="5" cy="15" r="6" fill="#90EE90"/>
                ` : ''}
            ` : ''}
        </g>
    `,

    ladybug: (x, y) => `
        <g transform="translate(${x},${y})">
            <circle cx="0" cy="0" r="3" fill="#FF0000"/>
            <circle cx="-1" cy="-1" r="0.5" fill="black"/>
            <circle cx="1" cy="-1" r="0.5" fill="black"/>
            <path d="M0,0 L0,3" stroke="black" fill="none"/>
        </g>
    `,

    bee: (x, y, options = {}) => `
        <g transform="translate(${x},${y})">
            <!-- Body -->
            <ellipse cx="0" cy="0" rx="4" ry="3" fill="#FFD700"/>
            <ellipse cx="0" cy="0" rx="4" ry="3" fill="none" stroke="black"/>
            <!-- Stripes -->
            <line x1="-2" y1="-2" x2="-2" y2="2" stroke="black"/>
            <line x1="0" y1="-3" x2="0" y2="3" stroke="black"/>
            <line x1="2" y1="-2" x2="2" y2="2" stroke="black"/>
            <!-- Wings -->
            <ellipse cx="-3" cy="-3" rx="2" ry="3" fill="white" opacity="0.6"/>
            <ellipse cx="3" cy="-3" rx="2" ry="3" fill="white" opacity="0.6"/>
        </g>
    `,

    flower: (x, y, options = {}) => `
        <g transform="translate(${x},${y})">
            <!-- Stem -->
            <line x1="0" y1="0" x2="0" y2="20" stroke="#228B22" stroke-width="2"/>
            <!-- Petals -->
            ${options.type === 'marigold' ? `
                <circle cx="0" cy="0" r="5" fill="#FFA500"/>
                <circle cx="-4" cy="-4" r="4" fill="#FFD700"/>
                <circle cx="4" cy="-4" r="4" fill="#FFD700"/>
                <circle cx="-4" cy="4" r="4" fill="#FFD700"/>
                <circle cx="4" cy="4" r="4" fill="#FFD700"/>
            ` : `
                <circle cx="0" cy="0" r="5" fill="#FF69B4"/>
                <circle cx="-5" cy="0" r="4" fill="#FFB6C1"/>
                <circle cx="5" cy="0" r="4" fill="#FFB6C1"/>
                <circle cx="0" cy="-5" r="4" fill="#FFB6C1"/>
                <circle cx="0" cy="5" r="4" fill="#FFB6C1"/>
            `}
        </g>
    `,

    wateringCan: (x, y, options = {}) => `
        <g transform="translate(${x},${y})">
            <!-- Can body -->
            <path d="M0,0 L20,0 L25,-15 L-5,-15 Z" fill="#A9A9A9"/>
            <!-- Spout -->
            <path d="M-5,-10 L-15,-5 L-20,-8" stroke="#A9A9A9" stroke-width="2" fill="none"/>
            <!-- Handle -->
            <path d="M5,-15 Q10,-25 15,-15" stroke="#A9A9A9" stroke-width="2" fill="none"/>
            ${options.watering ? `
                <!-- Water drops -->
                <circle cx="-22" cy="-6" r="1" fill="#4a90e2"/>
                <circle cx="-19" cy="-4" r="1" fill="#4a90e2"/>
                <circle cx="-24" cy="-4" r="1" fill="#4a90e2"/>
            ` : ''}
        </g>
    `,

    shell: (x, y, options = {}) => `
        <g transform="translate(${x},${y})">
            <path d="M0,0 Q5,-8 10,-0 T20,0" 
                fill="${options.color || '#FFF5EE'}" 
                stroke="#DEB887" 
                stroke-width="1"/>
            <path d="M5,-2 Q10,-6 15,-2" 
                fill="none" 
                stroke="#DEB887" 
                stroke-width="0.5"/>
        </g>
    `,

    kite: (x, y, options = {}) => `
        <g transform="translate(${x},${y})">
            <!-- Kite diamond -->
            <path d="M0,0 L20,-20 L40,0 L20,20 Z" 
                fill="${options.color || '#ff6b6b'}"
                stroke="#333"/>
            <!-- Tail -->
            <path d="M20,20 Q25,30 20,40 Q15,50 20,60" 
                stroke="#333" 
                stroke-width="1"
                fill="none"/>
            <!-- String -->
            <line x1="20" y1="0" x2="20" y2="${options.stringLength || 100}" 
                stroke="#333" 
                stroke-width="1"
                stroke-dasharray="${options.flying ? '2,2' : '0'}"/>
        </g>
    `,

    koala: (x, y, options = {}) => `
        <g transform="translate(${x},${y})">
            <!-- Base -->
            <circle cx="0" cy="0" r="${options.baby ? 10 : 15}" fill="#808080"/>
            
            <!-- Ears -->
            <g transform="translate(${options.baby ? -8 : -12},${options.baby ? -7 : -10})">
                <!-- Left Outer Ear -->
                <circle cx="0" cy="0" r="${options.baby ? 4 : 6}" fill="#696969"/>
                <!-- Left Inner Ear -->
                <circle cx="0" cy="0" r="${options.baby ? 2 : 3}" fill="#A9A9A9"/>
            </g>
            <g transform="translate(${options.baby ? 8 : 12},${options.baby ? -7 : -10})">
                <!-- Right Outer Ear -->
                <circle cx="0" cy="0" r="${options.baby ? 4 : 6}" fill="#696969"/>
                <!-- Right Inner Ear -->
                <circle cx="0" cy="0" r="${options.baby ? 2 : 3}" fill="#A9A9A9"/>
            </g>
            
            <!-- Face -->
            <circle cx="0" cy="${options.baby ? -1 : -2}" r="${options.baby ? 6 : 8}" fill="#A9A9A9"/>
            
            <!-- Eyes -->
            <g>
                <!-- Left Eye -->
                <circle cx="${options.baby ? -3 : -4}" cy="${options.baby ? -2 : -4}" r="${options.baby ? 1.5 : 2}" fill="black"/>
                <!-- Right Eye -->
                <circle cx="${options.baby ? 3 : 4}" cy="${options.baby ? -2 : -4}" r="${options.baby ? 1.5 : 2}" fill="black"/>
                <!-- Eye Shine -->
                <circle cx="${options.baby ? -2.5 : -3}" cy="${options.baby ? -2.5 : -4.5}" r="${options.baby ? 0.5 : 0.7}" fill="white"/>
                <circle cx="${options.baby ? 3.5 : 4.5}" cy="${options.baby ? -2.5 : -4.5}" r="${options.baby ? 0.5 : 0.7}" fill="white"/>
            </g>
            
            <!-- Nose -->
            <circle cx="0" cy="${options.baby ? 1 : 0}" r="${options.baby ? 2 : 3}" fill="#4a4a4a"/>
            
            <!-- Fur Details -->
            <path d="M${options.baby ? -10 : -15},${options.baby ? -3 : -5} Q${options.baby ? -8 : -12},${options.baby ? -5 : -8} ${options.baby ? -6 : -9},${options.baby ? -3 : -5}" stroke="#696969" fill="none"/>
            <path d="M${options.baby ? 6 : 9},${options.baby ? -3 : -5} Q${options.baby ? 8 : 12},${options.baby ? -5 : -8} ${options.baby ? 10 : 15},${options.baby ? -3 : -5}" stroke="#696969" fill="none"/>
            
            ${options.sleeping ? `
                <!-- Closed Eyes -->
                <path d="M${options.baby ? -4 : -5},${options.baby ? -2 : -4} Q${options.baby ? -2 : -3},${options.baby ? -3 : -5} ${options.baby ? 0 : -1},${options.baby ? -2 : -4}" stroke="black" fill="none"/>
                <path d="M${options.baby ? 0 : 1},${options.baby ? -2 : -4} Q${options.baby ? 2 : 3},${options.baby ? -3 : -5} ${options.baby ? 4 : 5},${options.baby ? -2 : -4}" stroke="black" fill="none"/>
            ` : ''}
        </g>
    `
}; 