import { useState,
            useRef, 
            useEffect} from "react";
import { Outlet,
            Link
        } from 'react-router-dom';
import NavigationSystem from '../components/navigation'

/* Helper functions */
const sortSectionHeaders = (arrOfHeaderNames, topHeaderName) => {
    var sortedNames = arrOfHeaderNames;
    sortedNames = sortedNames.filter(item => item !== topHeaderName);
    sortedNames.unshift(topHeaderName);
    return sortedNames;
}
/* End Helper functions */

/*
* Root page component
*/
export default function Root(){
    const catMenu = useRef(""); // Refers to whatever section is clicked at the time
    const navLinks = ["About", "Projects", "Resume", "Contact"];


    const [sectionSelected, setSectionSelected] = useState("");
    const [sectionHeaderNames, setSectionHeaderNames] = useState(["About", "Projects", "Resume", "Contact"]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleMouseOver = (e) => {
        if (screenWidth > 1080){
            setSectionSelected(e.target.id);
        }

    }

    const handleMouseClick = (e) => {
        /* TODO: Add back once I figure out dropdown menu on main page.. just reroute for now.
        if (screenWidth <= 1080){
            setSectionSelected(e.target.id);
            var sortedNames = sortSectionHeaders(sectionHeaderNames, e.target.id);
            setSectionHeaderNames(sortedNames); // TODO: Figure out how to put it back in order once done
        }
        */


    }

    /* TODO: Remove? Unused */
    const handleMouseOut = (e) => {

    }

    const closeOpenMenus = (e) => {
        if (sectionSelected && sectionSelected !== e.target.id && !catMenu.current.contains(e.target)){
            setSectionHeaderNames(["About", "Projects", "Resume", "Contact"])
        }
    }

    document.addEventListener('mousedown', closeOpenMenus);

    var sectionHeaders = sectionHeaderNames.map((val) => (
        <SectionHeader name={val} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} handleMouseClick={handleMouseClick}/>
    ));

    return (
        <>
        <NavigationSystem linkNames={navLinks}/>
        <PageTitle/>
        <div id="body">
            <div id="headings" ref={catMenu}> 
                {sectionHeaders}
            </div>
            {<ExpandDisplay headerName={sectionSelected}/>}
        </div>
    </>
    );
}


/*  Section previews/dropdowns functionality 
    TODOs:
        TODO: Add expand display instead of direct linK? {<ExpandDisplay headerName={sectionSelected}/>}
*/
const AboutPreview = () => {
    return (
        <div class="expand-display">
            <h3>About</h3>
            <Link to='/about'>Expand</Link>
        </div>

    )
} 

const ExpandDisplay = ({headerName}) => {
    if (headerName){
        switch (headerName){
            case "About":
                return <AboutPreview/>
            case "Projects":
                return <div class="expand-display">Projects</div>
            case "Resume":
                return <div class="expand-display">Resume</div>
            case "Contact":
                return <div class="expand-display">Contact</div>
            default:
                return <div class="expand-display">Header</div>;
        }
    }

    return;
}

const ExpandableContainer = ({handleMouseOver, handleMouseOut, handleMouseClick, text, isHeader}) => {

    if (isHeader){
        return (
            <div onClick={handleMouseClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`expandable-container heading-container .noselect`}>
                <Link to={`/${text}`}>
                    <h2 id={text} className={`section-header`}>{text}</h2>
                </Link>
            </div>
        )
    }

    return (
        <div onClick={handleMouseClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`expandable-container .noselect`}>
            {text}
        </div>
    )

}
/* Section previews end */

function PageTitle(props){
    return (
        <div>
            <h1>Kevin Nguyen</h1>
        </div>
    )
}

function SectionHeader(props){
    return (
        <ExpandableContainer isHeader={true} 
                            text={props.name} 
                            handleMouseOver={props.handleMouseOver} 
                            handleMouseOut={props.handleMouseOut}
                            handleMouseClick={props.handleMouseClick}/>
    );
}

