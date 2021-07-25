import React from 'react'
import { BiSearchAlt } from '@react-icons/all-files/bi/BiSearchAlt'

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
        url: `/`
    },
    projects: {
        label: `Projects`,
        url: `/`
    },
    guides: {
        label: `Guides`,
        url: `/`
    },
    about: {
        label: `About`,
        url: `/`
    },
} as NavOptionData

export const Navbar = () => (
    <div id="nav" className="nav">
        <ul>
            {Object.keys(OPTIONS).map(option => <li><a href={OPTIONS[option].url}>{OPTIONS[option].label}</a></li>)}
        </ul>
        <BiSearchAlt className="nav-search-icon" size={30}/>
    </div>
)