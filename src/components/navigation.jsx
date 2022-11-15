import '/src/styles/navigation.css'

import {
        Link,
    } from 'react-router-dom';

import {
    useState,
    setState,
} from 'react';

import menuicon from '/src/assets/img/menu-icon.png';

export default function NavigationSystem(props){
    const [collapsed, setCollapsed] = useState(true);
    
    var navLinks = props.linkNames.map((val) => (
        (val === "Home") ? 
            <NavLink link={`/`} name={val}/>
        :
            <NavLink link={val} name={val}/>
    ));

    const handleMouseClick = (e) => {
        setCollapsed(!collapsed);
    }
    
    if (!collapsed){
        return (
            <div class={`navigation`}>
                <nav>
                    <button onClick={handleMouseClick}>X</button>
                    {navLinks}
                </nav>
            </div>
        )
    }

    return (
        <div class={`collapsed navigation`}>
            <CollapsedNav handleMouseClick={handleMouseClick}/>
        </div>
    )
}

const NavLink = (props) => {
    return (
        <Link to={`../${props.link}`} className={`nav-link`}>{props.name}</Link>
    )
}

const CollapsedNav = ({handleMouseClick}) => {
    return (
        <button onClick={handleMouseClick}>
            <img src={menuicon}/>
        </button>
    )
}

