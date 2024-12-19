const stories = {
    "tower-hill": {
        title: "Tower Hill Tale",
        theme: "nature",
        scenes: {
            start: {
                text: "It's a beautiful sunny day at Tower Hill! Ella and her dad are walking along the path when they spot a baby koala that seems to have wandered away from its mother.",
                illustration: "tower-hill-start",
                choices: [
                    {
                        text: "Look around carefully for the mother koala",
                        next: "search-mother",
                        type: "best"
                    },
                    {
                        text: "Ask dad what to do",
                        next: "ask-dad",
                        type: "good"
                    },
                    {
                        text: "Try to pick up the baby koala",
                        next: "wrong-choice",
                        type: "silly"
                    }
                ]
            },
            "search-mother": {
                text: "Ella looks carefully around the nearby trees. After a few minutes, she spots a larger koala in a gum tree not far away! It must be the baby's mother!",
                illustration: "tower-hill-search",
                choices: [
                    {
                        text: "Tell dad about the mother koala",
                        next: "tell-dad",
                        type: "best"
                    },
                    {
                        text: "Watch quietly from a distance",
                        next: "watch-quietly",
                        type: "good"
                    },
                    {
                        text: "Call out to the mother koala",
                        next: "call-out",
                        type: "silly"
                    }
                ]
            },
            "ask-dad": {
                text: "'Good thinking, sweetheart!' Dad says. 'When we find wild animals, it's best to keep our distance and look for their family nearby.'",
                illustration: "tower-hill-dad",
                choices: [
                    {
                        text: "Look around for the mother koala",
                        next: "search-mother",
                        type: "best"
                    },
                    {
                        text: "Stay and watch the baby",
                        next: "watch-quietly",
                        type: "good"
                    }
                ]
            },
            "wrong-choice": {
                text: "Oops! Dad quickly stops Ella. 'We should never touch wild animals, sweetheart. They might get scared or hurt. Let's think of a better way to help.'",
                illustration: "tower-hill-wrong",
                choices: [
                    {
                        text: "Look around for the mother koala instead",
                        next: "search-mother",
                        type: "good"
                    },
                    {
                        text: "Ask dad what we should do",
                        next: "ask-dad",
                        type: "good"
                    }
                ]
            },
            "tell-dad": {
                text: "Dad smiles proudly. 'Great spotting, Ella! Let's stay quiet and watch what happens. The baby will find its way back to mum if we give them space.'",
                illustration: "tower-hill-happy",
                choices: [
                    {
                        text: "Watch the happy reunion",
                        next: "happy-ending",
                        type: "best"
                    }
                ]
            },
            "watch-quietly": {
                text: "Ella and dad watch patiently. Soon, the baby koala notices its mother and slowly makes its way to her tree. Nature is amazing!",
                illustration: "tower-hill-reunion",
                choices: [
                    {
                        text: "Continue the walk",
                        next: "happy-ending",
                        type: "best"
                    }
                ]
            },
            "call-out": {
                text: "The loud noise startles both koalas! Dad gently reminds Ella that wild animals need peace and quiet to feel safe.",
                illustration: "tower-hill-startled",
                choices: [
                    {
                        text: "Watch quietly instead",
                        next: "watch-quietly",
                        type: "good"
                    },
                    {
                        text: "Step back and give them more space",
                        next: "watch-quietly",
                        type: "good"
                    }
                ]
            },
            "happy-ending": {
                text: "What a wonderful day at Tower Hill! Ella learned that being patient and respectful helps wild animals feel safe. Dad gives her a big thumbs up! 👍",
                illustration: "tower-hill-end",
                choices: [
                    {
                        text: "Start a new adventure",
                        next: "menu",
                        type: "menu"
                    }
                ]
            }
        }
    },
    "beach": {
        title: "Beach Day Fun",
        theme: "beach",
        scenes: {
            start: {
                text: "It's a perfect day at the beach! Ella and her dad are setting up their kite. The wind is just right, and the waves are gently rolling in.",
                illustration: "beach-start",
                choices: [
                    {
                        text: "Help dad set up the kite",
                        next: "setup-kites",
                        type: "best"
                    },
                    {
                        text: "Look for shells first",
                        next: "shell-hunting",
                        type: "good"
                    },
                    {
                        text: "Run straight into the water",
                        next: "water-safety",
                        type: "silly"
                    }
                ]
            },
            "setup-kites": {
                text: "Ella helps dad untangle the string and check the kite. Working together makes everything easier and more fun!",
                illustration: "beach-kites",
                choices: [
                    {
                        text: "Test the wind direction",
                        next: "wind-test",
                        type: "best"
                    },
                    {
                        text: "Start flying right away",
                        next: "quick-start",
                        type: "good"
                    }
                ]
            },
            "wind-test": {
                text: "Ella wets her finger and holds it up, just like dad taught her. 'The wind is coming from the ocean,' she says proudly. Dad beams at her smart thinking!",
                illustration: "beach-wind",
                choices: [
                    {
                        text: "Launch the kite with dad",
                        next: "kite-success",
                        type: "best"
                    },
                    {
                        text: "Show dad how to do it alone",
                        next: "kite-teamwork",
                        type: "good"
                    }
                ]
            },
            "quick-start": {
                text: "The kite tumbles around because they didn't check the wind. 'Let's try that again,' Dad suggests with a smile. 'What should we check first?'",
                illustration: "beach-tumble",
                choices: [
                    {
                        text: "Test the wind direction",
                        next: "wind-test",
                        type: "best"
                    },
                    {
                        text: "Ask dad for help",
                        next: "wind-test",
                        type: "good"
                    }
                ]
            },
            "shell-hunting": {
                text: "Ella finds some beautiful shells! Dad suggests they fly the kite first, then collect shells to take home later when the wind calms down.",
                illustration: "beach-shells",
                choices: [
                    {
                        text: "Help dad with the kite",
                        next: "setup-kites",
                        type: "best"
                    },
                    {
                        text: "Look for one more shell",
                        next: "more-shells",
                        type: "good"
                    }
                ]
            },
            "water-safety": {
                text: "Dad calls Ella back. 'Remember our beach safety rules! We need to check the flags and put on sunscreen first.'",
                illustration: "beach-safety",
                choices: [
                    {
                        text: "Check the safety flags with dad",
                        next: "safety-check",
                        type: "best"
                    },
                    {
                        text: "Put on sunscreen first",
                        next: "sunscreen",
                        type: "good"
                    }
                ]
            },
            "kite-success": {
                text: "The kite soars high into the blue sky! Ella and dad work together, taking turns holding the string. It's a perfect beach day!",
                illustration: "beach-success",
                choices: [
                    {
                        text: "Look for shells while the kite flies",
                        next: "beach-ending",
                        type: "best"
                    }
                ]
            },
            "beach-ending": {
                text: "What a wonderful day! Ella learned about wind, waves, and working together. She has a bag of pretty shells and great memories with dad! 👍",
                illustration: "beach-end",
                choices: [
                    {
                        text: "Start a new adventure",
                        next: "menu",
                        type: "menu"
                    }
                ]
            },
            "safety-check": {
                text: "Ella and dad check the beach flags together. 'Green flag means it's safe to swim!' Dad explains. 'Now let's put on sunscreen before we do anything else.'",
                illustration: "beach-safety-check",
                choices: [
                    {
                        text: "Put on sunscreen carefully",
                        next: "sunscreen",
                        type: "best"
                    },
                    {
                        text: "Ask about swimming rules",
                        next: "swimming-rules",
                        type: "good"
                    }
                ]
            },
            "sunscreen": {
                text: "Dad helps Ella put on sunscreen. 'Don't forget behind your ears!' They make sure every spot is covered. Safety first!",
                illustration: "beach-sunscreen",
                choices: [
                    {
                        text: "Check the beach flags",
                        next: "safety-check",
                        type: "best"
                    },
                    {
                        text: "Look for shells while it dries",
                        next: "shell-hunting",
                        type: "good"
                    }
                ]
            },
            "swimming-rules": {
                text: "'Always swim between the flags,' Dad reminds Ella. 'And stay where I can see you. Want to set up our spot near the lifeguard tower?'",
                illustration: "beach-rules",
                choices: [
                    {
                        text: "Set up near the lifeguard",
                        next: "safe-spot",
                        type: "best"
                    },
                    {
                        text: "Put on sunscreen first",
                        next: "sunscreen",
                        type: "good"
                    }
                ]
            },
            "safe-spot": {
                text: "They find the perfect spot! Close to the lifeguard tower and with plenty of room for kite flying. Time to get ready for a fun day!",
                illustration: "beach-setup",
                choices: [
                    {
                        text: "Help dad with the kite",
                        next: "setup-kites",
                        type: "best"
                    },
                    {
                        text: "Look for shells nearby",
                        next: "shell-hunting",
                        type: "good"
                    }
                ]
            },
            "more-shells": {
                text: "Ella finds a beautiful spiral shell! Dad suggests they collect shells later when the wind dies down - it's perfect for kite flying now!",
                illustration: "beach-more-shells",
                choices: [
                    {
                        text: "Keep the special shell and fly kites",
                        next: "setup-kites",
                        type: "best"
                    },
                    {
                        text: "Look for just one more",
                        next: "shell-lesson",
                        type: "silly"
                    }
                ]
            },
            "shell-lesson": {
                text: "The wind picks up and it's getting harder to find shells. Dad was right - there's a right time for everything!",
                illustration: "beach-wind-shells",
                choices: [
                    {
                        text: "Help dad with the kite now",
                        next: "setup-kites",
                        type: "best"
                    }
                ]
            },
            "kite-teamwork": {
                text: "The kite dips and sways - it's tricky to control alone! 'Let's do it together,' Dad suggests. 'It's more fun that way!'",
                illustration: "beach-teamwork",
                choices: [
                    {
                        text: "Work together with dad",
                        next: "kite-success",
                        type: "best"
                    }
                ]
            }
        }
    },
    "garden": {
        title: "Garden Adventure",
        theme: "garden",
        scenes: {
            start: {
                text: "The garden is full of life today! Dad shows Ella the tomato plants that Luke gave them. 'These plants need special care,' Dad explains.",
                illustration: "garden-start",
                choices: [
                    {
                        text: "Ask dad how to care for the tomatoes",
                        next: "tomato-care",
                        type: "best"
                    },
                    {
                        text: "Look for bugs in the garden",
                        next: "bug-hunting",
                        type: "good"
                    },
                    {
                        text: "Pick the tomatoes right away",
                        next: "not-ready",
                        type: "silly"
                    }
                ]
            },
            "tomato-care": {
                text: "'The tomatoes need water, sunshine, and patience,' Dad says. 'Just like the ones Luke grows! Want to help me water them?'",
                illustration: "garden-watering",
                choices: [
                    {
                        text: "Water the plants carefully",
                        next: "careful-watering",
                        type: "best"
                    },
                    {
                        text: "Check if the soil is dry",
                        next: "soil-check",
                        type: "good"
                    }
                ]
            },
            "careful-watering": {
                text: "Ella carefully waters around the base of each tomato plant, just like dad showed her. 'Perfect!' Dad says. 'The plants will grow strong and healthy.'",
                illustration: "garden-watering",
                choices: [
                    {
                        text: "Ask about the tomatoes Luke grows",
                        next: "luke-tomatoes",
                        type: "best"
                    },
                    {
                        text: "Learn about garden helpers",
                        next: "bug-hunting",
                        type: "good"
                    }
                ]
            },
            "soil-check": {
                text: "Ella touches the soil gently. 'It feels a bit dry, Dad.' 'Good checking!' Dad says. 'That means it's time to water them.'",
                illustration: "garden-soil",
                choices: [
                    {
                        text: "Water the plants carefully",
                        next: "careful-watering",
                        type: "best"
                    }
                ]
            },
            "bug-hunting": {
                text: "Ella spots some ladybugs on the tomato plants! 'Those are garden helpers,' Dad explains. 'They protect our plants from harmful insects.'",
                illustration: "garden-bugs",
                choices: [
                    {
                        text: "Learn about caring for the plants",
                        next: "tomato-care",
                        type: "best"
                    },
                    {
                        text: "Watch the ladybugs work",
                        next: "helpful-bugs",
                        type: "good"
                    }
                ]
            },
            "not-ready": {
                text: "'Not yet, sweetheart,' Dad smiles. 'Just like the ones Luke gave us, these tomatoes need time to grow and turn red. Patience is part of gardening!'",
                illustration: "garden-patience",
                choices: [
                    {
                        text: "Learn how to care for them",
                        next: "tomato-care",
                        type: "good"
                    },
                    {
                        text: "Look for other garden tasks",
                        next: "garden-tasks",
                        type: "good"
                    }
                ]
            },
            "luke-tomatoes": {
                text: "'Luke's tomatoes grew so well because he took good care of them,' Dad explains. 'Now we can grow our own tomatoes using what he taught us!'",
                illustration: "garden-learning",
                choices: [
                    {
                        text: "Promise to help care for them",
                        next: "garden-promise",
                        type: "best"
                    },
                    {
                        text: "Ask about other vegetables",
                        next: "more-veggies",
                        type: "good"
                    }
                ]
            },
            "garden-promise": {
                text: "Ella promises to help take care of the tomato plants every day. Dad gives her a high five! 'Together, we'll grow tomatoes just as good as Luke's!'",
                illustration: "garden-highfive",
                choices: [
                    {
                        text: "Start a new adventure",
                        next: "menu",
                        type: "menu"
                    }
                ]
            },
            "helpful-bugs": {
                text: "The ladybugs crawl around the leaves, eating tiny pests. 'They're like our garden's protectors!' Dad explains. Ella watches them work their magic.",
                illustration: "garden-ladybugs",
                choices: [
                    {
                        text: "Help the ladybugs by watering plants",
                        next: "tomato-care",
                        type: "best"
                    },
                    {
                        text: "Look for more garden helpers",
                        next: "more-bugs",
                        type: "good"
                    }
                ]
            },
            "more-bugs": {
                text: "Ella finds some busy bees and friendly earthworms! Dad explains how each creature helps the garden grow. It's like a tiny city of helpers!",
                illustration: "garden-creatures",
                choices: [
                    {
                        text: "Help the garden grow too",
                        next: "tomato-care",
                        type: "best"
                    },
                    {
                        text: "Watch the bees work",
                        next: "bee-lesson",
                        type: "good"
                    }
                ]
            },
            "bee-lesson": {
                text: "'Bees help flowers make new flowers,' Dad explains. 'And when we grow tomatoes, the bees help them too! Should we plant some flowers near our tomatoes?'",
                illustration: "garden-bees",
                choices: [
                    {
                        text: "Plant flowers for the bees",
                        next: "planting-flowers",
                        type: "best"
                    },
                    {
                        text: "Water the tomatoes first",
                        next: "tomato-care",
                        type: "good"
                    }
                ]
            },
            "planting-flowers": {
                text: "Ella and Dad plant marigolds near the tomatoes. 'These flowers will bring more garden helpers,' Dad says. 'Luke taught me this trick too!'",
                illustration: "garden-planting",
                choices: [
                    {
                        text: "Water both flowers and tomatoes",
                        next: "careful-watering",
                        type: "best"
                    },
                    {
                        text: "Ask about more garden tips",
                        next: "garden-wisdom",
                        type: "good"
                    }
                ]
            },
            "garden-wisdom": {
                text: "'The best gardens take time and love,' Dad shares. 'Luke's tomatoes grew strong because he cared for them every day. Want to make a garden schedule?'",
                illustration: "garden-planning",
                choices: [
                    {
                        text: "Make a daily garden plan",
                        next: "garden-schedule",
                        type: "best"
                    },
                    {
                        text: "Start by watering now",
                        next: "careful-watering",
                        type: "good"
                    }
                ]
            },
            "garden-schedule": {
                text: "Together they plan: morning water checks, watching for helper bugs, and checking the soil. 'This is how we'll grow amazing tomatoes like Luke's!'",
                illustration: "garden-schedule",
                choices: [
                    {
                        text: "Start the schedule now",
                        next: "garden-promise",
                        type: "best"
                    }
                ]
            },
            "spot-tomatoes": {
                text: "Ella notices tiny green tomatoes forming! 'Those will grow big and red like Luke's tomatoes,' Dad says proudly. 'Want to measure them each day?'",
                illustration: "garden-growth",
                choices: [
                    {
                        text: "Start a growth chart",
                        next: "measuring",
                        type: "best"
                    },
                    {
                        text: "Plant flowers to help them grow",
                        next: "planting-flowers",
                        type: "good"
                    }
                ]
            },
            "measuring": {
                text: "Dad helps Ella make a chart to track the tomatoes' growth. 'Luke will be so proud when he sees how well we're taking care of his tomato plants!'",
                illustration: "garden-measuring",
                choices: [
                    {
                        text: "Promise to keep the chart",
                        next: "garden-promise",
                        type: "best"
                    }
                ]
            },
            "garden-tasks": {
                text: "Dad shows Ella other jobs they can do in the garden while they wait for the tomatoes to grow. 'Would you like to help me plant some flowers near the tomatoes?'",
                illustration: "garden-tasks",
                choices: [
                    {
                        text: "Plant flowers for the garden helpers",
                        next: "planting-flowers",
                        type: "best"
                    },
                    {
                        text: "Learn about caring for tomatoes",
                        next: "tomato-care",
                        type: "good"
                    }
                ]
            }
        }
    },
    "aquarium": {
        title: "Aquarium Adventure",
        theme: "nature",
        scenes: {
            start: {
                text: "Ella is excited to visit the aquarium with Dad and Beth! As they walk through the entrance, Ella spots a sign about a special seahorse exhibit.",
                illustration: "aquarium-start",
                choices: [
                    {
                        text: "Go straight to the seahorse exhibit",
                        next: "seahorse-exhibit",
                        type: "good"
                    },
                    {
                        text: "Ask Beth about seahorses first",
                        next: "beth-explains",
                        type: "best"
                    },
                    {
                        text: "Run ahead without waiting",
                        next: "wait-group",
                        type: "silly"
                    }
                ]
            },
            "beth-explains": {
                text: "'Seahorses are amazing creatures!' Beth tells Ella. 'They're actually fish, even though they look so different. Would you like to learn more about them?'",
                illustration: "aquarium-learning",
                choices: [
                    {
                        text: "Learn seahorse facts from Beth",
                        next: "seahorse-facts",
                        type: "best"
                    },
                    {
                        text: "Go see them right away",
                        next: "seahorse-exhibit",
                        type: "good"
                    }
                ]
            },
            "seahorse-facts": {
                text: "'Male seahorses carry the babies,' Beth explains. 'And they change color to hide from predators!' Ella is fascinated by these special creatures.",
                illustration: "seahorse-facts",
                choices: [
                    {
                        text: "Look for color-changing seahorses",
                        next: "color-change",
                        type: "best"
                    },
                    {
                        text: "Ask about baby seahorses",
                        next: "baby-seahorses",
                        type: "good"
                    }
                ]
            },
            "color-change": {
                text: "Beth points to a seahorse that's changing from green to brown to match the seaweed. 'They're masters of camouflage!' she says. Ella watches in amazement.",
                illustration: "color-change",
                choices: [
                    {
                        text: "Try to spot more hidden seahorses",
                        next: "spot-seahorses",
                        type: "best"
                    },
                    {
                        text: "Learn about their habitat",
                        next: "seahorse-home",
                        type: "good"
                    }
                ]
            },
            "spot-seahorses": {
                text: "Ella looks carefully and finds more seahorses hiding in the seaweed! 'They're so good at blending in,' she whispers excitedly.",
                illustration: "spot-seahorses",
                choices: [
                    {
                        text: "Watch them swim around",
                        next: "swimming-seahorses",
                        type: "best"
                    },
                    {
                        text: "Learn about their home",
                        next: "seahorse-home",
                        type: "good"
                    }
                ]
            },
            "baby-seahorses": {
                text: "'Look!' Dad points to a male seahorse with a special pouch. 'That's where he keeps the babies safe until they're ready to swim on their own.'",
                illustration: "baby-seahorses",
                choices: [
                    {
                        text: "Watch for baby seahorses",
                        next: "tiny-seahorses",
                        type: "best"
                    },
                    {
                        text: "Learn about their food",
                        next: "seahorse-food",
                        type: "good"
                    }
                ]
            },
            "tiny-seahorses": {
                text: "Suddenly, tiny baby seahorses emerge from the father's pouch! They're so small and cute, swimming around their dad. 'They stay close to their father until they're bigger,' Beth explains.",
                illustration: "tiny-seahorses",
                choices: [
                    {
                        text: "Watch them swim together",
                        next: "swimming-seahorses",
                        type: "best"
                    },
                    {
                        text: "Learn what they eat",
                        next: "seahorse-food",
                        type: "good"
                    }
                ]
            },
            "seahorse-food": {
                text: "'Seahorses eat tiny sea creatures called plankton,' Beth explains. 'They use their long snouts like straws to suck up their food!' Ella watches as a seahorse catches its lunch.",
                illustration: "seahorse-food",
                choices: [
                    {
                        text: "Watch them swim more",
                        next: "swimming-seahorses",
                        type: "best"
                    },
                    {
                        text: "Look at other sea creatures",
                        next: "other-creatures",
                        type: "good"
                    }
                ]
            },
            "seahorse-home": {
                text: "Beth shows Ella how seahorses wrap their tails around seaweed to anchor themselves. 'This is how they stay safe in strong currents,' she explains.",
                illustration: "seahorse-home",
                choices: [
                    {
                        text: "Watch them swim",
                        next: "swimming-seahorses",
                        type: "best"
                    },
                    {
                        text: "Look for more sea creatures",
                        next: "other-creatures",
                        type: "good"
                    }
                ]
            },
            "swimming-seahorses": {
                text: "The seahorses float gracefully through the water, using their tiny fins. 'They're such gentle swimmers,' Beth says. Ella could watch them all day!",
                illustration: "swimming-seahorses",
                choices: [
                    {
                        text: "Thank Beth for teaching about seahorses",
                        next: "aquarium-end",
                        type: "best"
                    }
                ]
            },
            "aquarium-end": {
                text: "What a wonderful day at the aquarium! Ella learned so much about seahorses from Beth and Dad. She can't wait to tell her friends about these amazing creatures! 👍",
                illustration: "aquarium-end",
                choices: [
                    {
                        text: "Start a new adventure",
                        next: "menu",
                        type: "menu"
                    }
                ]
            },
            "seahorse-exhibit": {
                text: "The seahorse tank is amazing! There are seahorses of different colors and sizes swimming gracefully through the water.",
                illustration: "seahorse-exhibit",
                choices: [
                    {
                        text: "Ask Beth about their colors",
                        next: "color-change",
                        type: "best"
                    },
                    {
                        text: "Look for baby seahorses",
                        next: "baby-seahorses",
                        type: "good"
                    }
                ]
            },
            "other-creatures": {
                text: "There are other sea creatures in the tank too! Ella sees colorful fish and a starfish. 'The seahorses share their home with lots of friends,' Beth explains.",
                illustration: "other-creatures",
                choices: [
                    {
                        text: "Watch the seahorses swim",
                        next: "swimming-seahorses",
                        type: "best"
                    }
                ]
            },
            "wait-group": {
                text: "'Wait for us, Ella!' Dad calls. 'We need to stay together so we don't get lost. Plus, Beth knows lots of interesting things about seahorses!'",
                illustration: "wait-group",
                choices: [
                    {
                        text: "Go back and ask Beth about seahorses",
                        next: "beth-explains",
                        type: "best"
                    },
                    {
                        text: "Wait and walk together",
                        next: "seahorse-exhibit",
                        type: "good"
                    }
                ]
            }
        }
    }
};

// Updated koala illustration components
const koalaDetails = `
    <!-- Base -->
    <circle cx="0" cy="0" r="15" fill="#808080"/>
    <!-- Ears -->
    <circle cx="-12" cy="-10" r="6" fill="#696969"/>
    <circle cx="12" cy="-10" r="6" fill="#696969"/>
    <!-- Inner Ears -->
    <circle cx="-12" cy="-10" r="3" fill="#A9A9A9"/>
    <circle cx="12" cy="-10" r="3" fill="#A9A9A9"/>
    <!-- Face -->
    <circle cx="0" cy="-2" r="8" fill="#A9A9A9"/>
    <!-- Eyes -->
    <circle cx="-4" cy="-4" r="2" fill="black"/>
    <circle cx="4" cy="-4" r="2" fill="black"/>
    <!-- Eye Shine -->
    <circle cx="-3" cy="-5" r="0.5" fill="white"/>
    <circle cx="5" cy="-5" r="0.5" fill="white"/>
    <!-- Nose -->
    <circle cx="0" cy="0" r="3" fill="#4a4a4a"/>
    <!-- Fur Details -->
    <path d="M-15,-5 Q-12,-8 -9,-5" stroke="#696969" fill="none"/>
    <path d="M9,-5 Q12,-8 15,-5" stroke="#696969" fill="none"/>
`;

const babyKoalaDetails = `
    <!-- Base -->
    <circle cx="0" cy="0" r="10" fill="#808080"/>
    <!-- Ears -->
    <circle cx="-8" cy="-7" r="4" fill="#696969"/>
    <circle cx="8" cy="-7" r="4" fill="#696969"/>
    <!-- Inner Ears -->
    <circle cx="-8" cy="-7" r="2" fill="#A9A9A9"/>
    <circle cx="8" cy="-7" r="2" fill="#A9A9A9"/>
    <!-- Face -->
    <circle cx="0" cy="-1" r="6" fill="#A9A9A9"/>
    <!-- Eyes -->
    <circle cx="-3" cy="-2" r="1.5" fill="black"/>
    <circle cx="3" cy="-2" r="1.5" fill="black"/>
    <!-- Eye Shine -->
    <circle cx="-2.5" cy="-2.5" r="0.5" fill="white"/>
    <circle cx="3.5" cy="-2.5" r="0.5" fill="white"/>
    <!-- Nose -->
    <circle cx="0" cy="1" r="2" fill="#4a4a4a"/>
    <!-- Fur Details -->
    <path d="M-10,-3 Q-8,-5 -6,-3" stroke="#696969" fill="none"/>
    <path d="M6,-3 Q8,-5 10,-3" stroke="#696969" fill="none"/>
`;

// Let's create a new beach scene with more detail:
const illustrations = {
    "beach-safety-check": `
        <svg viewBox="0 0 400 300" style="background-color: #87CEEB">
            <!-- Sky -->
            <rect x="0" y="0" width="400" height="200" fill="#87CEEB"/>
            <!-- Ocean with waves -->
            <path d="M0,150 Q50,140 100,150 T200,150 T300,150 T400,150 L400,300 L0,300 Z" fill="#4a90e2"/>
            <path d="M0,160 Q50,150 100,160 T200,160 T300,160 T400,160" fill="none" stroke="white" stroke-width="2" opacity="0.5"/>
            <path d="M0,170 Q50,160 100,170 T200,170 T300,170 T400,170" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
            
            <!-- Beach -->
            <path d="M0,180 Q100,160 200,180 T400,180 L400,300 L0,300 Z" fill="#f5e6d3"/>
            
            <!-- Lifeguard Tower -->
            <g transform="translate(300,160)">
                <!-- Tower Base -->
                <rect x="-15" y="0" width="30" height="40" fill="#8B4513"/>
                <!-- Tower Top -->
                <rect x="-20" y="-20" width="40" height="20" fill="#DEB887"/>
                <!-- Roof -->
                <path d="M-25,-20 L0,-35 L25,-20" fill="#A0522D"/>
                <!-- Flag Pole -->
                <rect x="15" y="-40" width="2" height="20" fill="#696969"/>
                <!-- Green Flag -->
                <path d="M17,-40 L32,-35 L17,-30" fill="#32CD32"/>
            </g>
            
            <!-- Ella and Dad looking at flags -->
            <g transform="translate(200,220)">
                <!-- Dad -->
                <rect x="0" y="-50" width="20" height="40" fill="#4169E1"/>
                <circle cx="10" cy="-60" r="10" fill="#FFE4B5"/>
                <!-- Dad's pointing arm -->
                <line x1="20" y1="-45" x2="40" y2="-60" stroke="#4169E1" stroke-width="4"/>
                
                <!-- Ella -->
                <rect x="-30" y="-40" width="15" height="30" fill="#9932CC"/>
                <circle cx="-22" cy="-48" r="8" fill="#DEB887"/>
                <!-- Ella's eyes looking up -->
                <circle cx="-24" cy="-50" r="1" fill="black"/>
                <circle cx="-20" cy="-50" r="1" fill="black"/>
            </g>
            
            <!-- Sun -->
            <circle cx="50" cy="50" r="30" fill="#FFD700"/>
            <g transform="translate(50,50)">
                <!-- Sun rays -->
                <line x1="-40" y1="0" x2="-60" y2="0" stroke="#FFD700" stroke-width="4"/>
                <line x1="40" y1="0" x2="60" y2="0" stroke="#FFD700" stroke-width="4"/>
                <line x1="0" y1="-40" x2="0" y2="-60" stroke="#FFD700" stroke-width="4"/>
                <line x1="0" y1="40" x2="0" y2="60" stroke="#FFD700" stroke-width="4"/>
            </g>
            
            <!-- Beach Umbrella in background -->
            <g transform="translate(100,190)">
                <line x1="0" y1="0" x2="0" y2="-40" stroke="#8B4513" stroke-width="3"/>
                <path d="M-20,-40 Q0,-50 20,-40" fill="#FF6B6B"/>
            </g>
        </svg>
    `,
    // ... more beach scenes to follow
}; 