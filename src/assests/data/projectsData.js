import codepen from '../images/codepen.png'
import imageGallery from '../images/image-gallery.png'
import movieDb from '../images/movie-db.png'
import musicPlayer from '../images/music-player.png'
import netflix from '../images/netflix.png'
import weather from '../images/weather.png'
import rps from '../images/rps.png'

const projects = [
        {
            id:0,
            name:'Code-pen Clone',
            desc:'A code pen clone in which you can run your html,css & js code. Completely responsive to all devices.',
            ss: codepen,
            stackUsed:['React', 'Code Mirror']
        },
        {
            id:1,
            name:'Image Gallery',
            desc:'A place where you can upload and save pictures just like instagram. Completely responsive to all devices.',
            ss:imageGallery,
            stackUsed:['React', 'Framer Motion','Styled Components', 'Firebase']
        },
        {
            id:2,
            name:'Movie Db',
            desc:'An Imdb like website in which we can browse all movies, their respective details including cast,crew etc.',
            ss:movieDb,
            stackUsed:['React','Redux','Framer Motion','Styled Components']
        },
        {
            id:3,
            name:'Music Player',
            desc:'A fun music player to listen to my favourite sounds.',
            ss:musicPlayer,
            stackUsed:['React', 'Sass']
        },
        {
            id:4,
            name:'Netflix Clone',
            desc:'A netflix clone which gives the exact same feel like netflix',
            ss:netflix,
            stackUsed:['React','Styled Components', 'Firebase']
        },
        {
            id:5,
            name:'Weather App',
            desc:'A weather app in which we can check weather of any city.',
            ss:weather,
            stackUsed:['HTML','CSS','Javascript']
        },
        {
            id:6,
            name:'Rock Paper Scissor',
            desc:'Rock Paper Scissor game',
            ss:rps,
            stackUsed:['HTML','CSS','Javascript']
        },
    ]

export default projects