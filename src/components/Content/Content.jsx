const sections = [
    {
        id: 'hero',
        title: 'Anthony Truong',
        subtitle: 'electrical engineering @utoronto',
        descriptions: ['Web Developer', 'Software Developer', 'Animator']

    },
    {
        id: 'about',
        title: 'About',
        contentOne: `I'm a passionate software developer based in Toronto, specializing 
        in full-stack web development. Currently, I'm in my second year of 
        electrical engineering at the University of Toronto. `,
        contentTwo: `In my spare time, I like to tinker with 
        hardware projects, play basketball, and play video games.`
    },
    {
        //I should organize these skills by alpha order (do it manually or through code)
        id: 'skills',
        title: 'Skills',
        languages: ['HTML 5', 'CSS', 'JavaScript', 'C/C++', 'Python', 'Bash', 'Arduino', 'SQL', 'Java'],
        developerTools: ['Git', 'PostgreSQL', 'Node.js', 'VS Code'],
        frameworks: ['React.js', 'Express.js', 'Tailwind CSS'],
        libraries: ['Motion', 'FastLED', 'Adafruit GFX'],
    },
    {
        id: 'projects',
        title: 'Projects',
        items: [
            {
                title: 'Personal Website V1',
                period: '2025',
                image: 'ProjectOne.png',
                techstack: ['React', 'CSS', 'Motion'],
                summary: `The first iteration of my personal website 
                made with React in which I explored animations and responsive layout design `,
                description: `A modern portfolio website built with React and Framer Motion featuring smooth animations, responsive design, and interactive elements. The site includes a dynamic particle background, smooth scroll navigation with URL hash routing, mobile-responsive hamburger menu, and animated project modals with scroll lock functionality. Built using React hooks for state management, CSS Modules for styling, and Framer Motion for smooth transitions throughout the user interface.`,
                url: 'https://www.google.com/',
                github: 'https://github.com/AnthonyX4/portfolio',
            },
    
        ],

    },
    {
        id: 'experience',
        title: 'Experience',
        items: [
            {
                role: 'ECE Executive',
                organization: 'Spark Design Club',
                startDate: 'May 2025',
                endDate: 'Present',
                location: `Toronto, ON`,
                roleDescription: [
                    'Deployed a React-based leaderboard website with real-time score integration.',
                    'Led a subteam, guiding members through research, task delegation, and hardware–software integration.',
                    'Prototyped and implemented game logic in C++/Arduino, programming LEDs and displays for timers, scores, and difficulty indicators.',
                ],
            },
            {
                role: 'ECE Team Member',
                organization: 'Spark Design Club',
                startDate: 'Oct 2024',
                endDate: 'May 2025',
                location: `Toronto, ON`,
                roleDescription: [
                    'Developed control logic for Smart Chess, a joystick-controlled game using magnets and LED backlighting.',
                    'Collaborated with teammates using Git to integrate LED code with game logic.',
                    'Programmed LED animations and logic for an interactive chessboard using C++ and FastLED.',
                ],
            },

        ],
    },
    {
        id: 'contact',
        title: 'Contact',
        email: 'anthonyacara@gmail.com'
    },


]

//Explore using React Hook (useContext) when using darkMode
export default sections;

