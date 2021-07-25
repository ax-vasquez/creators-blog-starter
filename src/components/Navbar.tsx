import React from 'react'
import { BiSearchAlt } from '@react-icons/all-files/bi/BiSearchAlt'
import { Link } from "gatsby"

type NavOptionData = {
    [key: string]: {
        label: string
        url: string
    }
}

const OPTIONS = {
    home: {
        label: `Home`,
        url: `/`
    },
    blog: {
        label: `Blog`,
        url: `/blog`
    },
    projects: {
        label: `Projects`,
        url: `/projects`
    },
    guides: {
        label: `Guides`,
        url: `/guides`
    },
    about: {
        label: `About`,
        url: `/about`
    },
} as NavOptionData

export const Navbar = () => (
    <div id="nav" className="nav">
        <ul>
            {Object.keys(OPTIONS).map(option => <li><Link to={OPTIONS[option].url}>{OPTIONS[option].label}</Link></li>)}
        </ul>
        <BiSearchAlt className="nav-search-icon" size={30}/>
    </div>
)