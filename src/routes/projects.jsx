import {Link} from 'react-router-dom' 
import NavigationSystem from '../components/navigation'
import {
    useState
} from 'react'
import '../styles/sections.css'

/* TODO List:
    TODO: Display project panel with overlay
    TODO: Allow them to be clicked on and route to child route to overlay on top of Projects page

*/
function ProjectPanel(props){

    const projectElement = 
        <div class="project-panel">
            <img class="underneath" src={`../src/assets/img/projects/${props.projectId}.png`}/>
            <div class="overlay">
                <h4>{props.name}</h4>
                <p className={props.hidden ? "hidden" : "showing"}>{props.desc}</p>
            </div>
        </div>

    if (props.link) {
        return (
            <a href={props.link}>
                {projectElement}
            </a>
        ); 
    }
    else if (props.route){
        return (
            <Link to={props.route}>
                {projectElement}
            </Link>
        )
    }
    else {
        return;
    }

    
}


export default function Projects(){
    const navLinks = ["About", "Projects", "Resume", "Contact", "Home"];

    const [projectInformation, setProjectInformation] = useState([
        {
            id: 'notes-app',
            name: 'Notes App',
            desc: 'A CRUD notetaking app created with React.',
            link: 'https://knguye.github.io/notepad-app/'
        },
        {
            id: 'stopper',
            name: 'Stopper',
            desc: 'A reflex-testing game (Android) made in Unity 3D',
            link: 'https://play.google.com/store/apps/details?id=com.GoldMineGames.stopp.er'
        },
        {
            id: 'greenhouse-robot',
            name: 'Greenhouse Robot Imaging',
            desc: 'My capstone project - an autonomous robot running on ROS & Linux',
            route: '/greenhouse-robot' // TODO: Create and elaborate route page
        },
        {
            id: "connect-four",
            name: "Online Connect Four",
            desc: "An online connect four game built with JS, HTML and Websockets",
            link: "https://knguye.github.io/websockets-tutorial/"
        }
    ]);


    const projects = projectInformation.map(({id, name, desc, link, route}) => (
        <ProjectPanel projectId={id} name={name} desc={desc} link={link} route={route}/>
    )); 

    console.log(projects);

    return (
        <>
            <NavigationSystem linkNames={navLinks}/>
            <h1>Projects</h1>
            <div class="projects-body">
                {projects}
            </div>
        </>
    )
}

