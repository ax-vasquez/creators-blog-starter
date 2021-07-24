import React from 'react'

export const Layout = (props) => {
    return (
        <div className="layout">
            <div id="nav" className="nav">
                <ul>
                    {[`Home`, `Blog`, `Projects`, `Guides`, `About`].map(topic => <li><a href="/">{topic}</a></li>)}
                </ul>
            </div>
            <main>
                {props.children}
            </main>
        </div>
    )   
}