import React from 'react'
import { Link } from "gatsby"

/**
 * The YearBanner is intended to be a reactive and interactive part of the
 * blog feed UI that should feel "natural" for the user - as they scroll
 * through the feed, the banner should "stick" to the top of the screen,
 * just below the navbar.
 * 
 * As the user scrolls, the year (and maybe month) values will be updated, ideally
 * in a scrolling animation (up or down, depending on the scroll direction)
 */
export const DateBanner = ({ dateString }: { dateString: string }) => {
    return (
        <div className="date-banner">
            <Link to={`#`}>
                <h3 className="date-banner-text">{dateString}</h3>
            </Link>
        </div>
        
    )
}
