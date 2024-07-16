import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Weather App Using Weather API',
        description: "This project involves creating a web application that displays real-time weather information for various locations. It utilizes the Django framework for backend development, Python for data handling, and a Weather API for fetching weather data. The frontend is built using HTML, CSS, and JavaScript to create a user-friendly interface.",
        tools: ['Python', 'Django', 'Weather API', 'HTML', 'CSS', 'JS', 'Pycham'],
        role: 'Python Django Full Stack Intern',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'E-commerce Using Python Django',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['Python', ' HTML', "CSS", "JS", "SQLlite"],
        role: 'Python Django Full Stack Intern',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Online Art Gallery Python Django',
        description: 'Developed a robust online art gallery platform using Python and Django. Leveraged HTML, CSS, and Bootstrap for a visually appealing and user-friendly interface. Successfully implemented core functionalities including user authentication, art piece management, shopping cart, and secure payment integration.',
        tools: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap'],
        code: '',
        role: 'Python Django Full Stack Intern',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Personal Portfolio Using React',
        description: "Developed a dynamic and visually appealing personal portfolio website using React and Next.js. Effectively utilized Lottie for interactive animations, react-fast-marquee for eye-catching text effects, react-icons for consistent iconography, and react-toastify for non-intrusive notifications. Implemented responsive design principles and Tailwind CSS for efficient styling.",
        tools: ['NextJS', 'lottie-react', 'react-fast-marquee', 'react-icons', "react-toastify","tailwindcss"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Python Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },