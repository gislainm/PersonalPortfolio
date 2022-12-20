import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import sagemaker from "../img/sagemakerFeat.jpeg"

// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(249, 245, 139)", "rgb(71, 97, 61)"];
//rgb(33, 55, 1)
//rgb(164, 180, 219)
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " N. Gislain",
    lastName: "Muhikira",
    initials: "NGM", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Graduate Student in Software Development at MIU"
        },
        {
            emoji: "📧",
            text: "gmuhikira2@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://drive.google.com/file/d/1KZf6jWiaI6rauohSlnrZtWLBS6iAuW5w/view?usp=share_link",
            icon: 'fa fa-file-text',
            label: 'Resume'
        },
        {
            link: "https://github.com/gislainm",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ntwali-gislain-muhikira/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.upwork.com/freelancers/~0172c9b1afaccb3a0a",
            icon: null,
            label: 'upwork'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I am Gislain, I am a versatile full stack software developer. I have substantial training and practical expertise in designing and developing web applications. I like solving problems, creating innovative applications, and learning new technologies.",
    skills:
        {
            proficientWith: ['Javascript', 'Nodejs','Express','AWS','MongoDB','MySQL','DynamoDB','Postman','Typescript', 'Python','React', 'React-Native', 'Angular','Git', 'Github', 'Bootstrap', 'html5', 'css3', 'Tailwind-css','Figma']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Basketball',
            emoji: '🏀'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Traveling',
            emoji: '✈️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "S-Loan Buddy",
            live: "https://vimeo.com/779072790/1c01f524db", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/gislainm/loan_calculator", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "PrePair",
            live: "https://vimeo.com/776467571/08bcbb810f",
            source: "https://github.com/gislainm/funathon-2022",
            image: mock2
        },
        {
            title: "Goal Tracker",
            live: "https://vimeo.com/776461403/fa8ff7459f",
            source: "https://github.com/gislainm/goal-tracking",
            image: mock3
        },
    ],
    blog:[
        {
            title:"Build, Train and Deploy ML models in a very short time using Amazon Sagemaker",
            image:sagemaker,
            link:"https://medium.com/@gmuhikira2/build-train-and-deploy-ml-models-in-a-very-short-time-using-amazon-sagemaker-d9c51624728"
        }
    ]
}