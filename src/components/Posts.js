import React from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { SOURCES } from '../actions/sources';

const TIMEBEFORE_NOW = 'Just now'
const TIMEBEFORE_MINUTE = ' minute ago'
const TIMEBEFORE_MINUTES = ' minutes ago'
const TIMEBEFORE_HOUR = ' hour ago'
const TIMEBEFORE_HOURS = ' hours ago'
const TIMEBEFORE_YESTERDAY = 'yesterday'
const TIMEBEFORE_DAYS = ' days ago'

function time_ago(time) { //milliseconds
    let out = ''
    let now = Date.now() //milliseconds
    let diff = (now - time) / 1000 // in seconds

    var optionsThisYear = { month: 'long', day: 'numeric' }
    var optionsPrevYear = { month: 'long', day: 'numeric', year: 'numeric' }

    if (diff < 60) {
        return TIMEBEFORE_NOW
    }
    if (diff < 3600) {
        return `${out = Math.round(diff / 60)}${out === 1 ? TIMEBEFORE_MINUTE : TIMEBEFORE_MINUTES}`
    }
    if (diff < 3600 * 24) {
        return `${out = Math.round(diff / 3600)}${out === 1 ? TIMEBEFORE_HOUR : TIMEBEFORE_HOURS}`
    }
    if (diff < 3600 * 24 * 2) {
        return TIMEBEFORE_YESTERDAY
    }
    if (diff < 360 * 24 * 7) {
        return `${out = Math.round(diff / 3600 * 24)}${TIMEBEFORE_DAYS}`
    }
    else {
        out = new Date(time)
        return `${out.getFullYear() < new Date(now).getFullYear() ? out.toLocaleDateString("en-US", optionsPrevYear) : out.toLocaleDateString("en-US", optionsPrevYear)}`
    }


}


const Posts = ({ posts, selectedSource }) => {

    return (
        <div>
            <div className="title">
                <h4>{selectedSource}</h4>
            </div>
            <ul className="list-group list-group-flush">
                {posts.map((post, i) =>

                    <a href={post.url} target="_blank" className="list-group-item list-group-item-action flex-column align-items-start" key={i}>
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1 col-10">{post.title}</h6>
                            <small>{time_ago(post.created)}</small>
                        </div>
                        <div className="d-flex w-100 justify-content-between">
                            <small>{post.site}</small>
                        </div>
                    </a>
                )}
            </ul>
        </div>
    )
}




Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return { selectedSource: state.selectedSource }
}

export default connect(mapStateToProps)(Posts);