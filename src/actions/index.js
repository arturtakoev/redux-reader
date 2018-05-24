import { FETCH_NEWS, INVALIDATE_SOURCE, SELECT_SOURCE, REQUEST_POSTS, RECEIVE_POSTS, SELECT_ALL, UNSELECT_ALL, TOGGLE_MENU } from "./types";
import fetch from 'cross-fetch';
import { SOURCES } from "./sources";

export const toggleMenu = () => ({
    type: TOGGLE_MENU
})

export const selectSource = sources => ({
    type: SELECT_SOURCE,
    sourceList: sources
})

export const selectAll = sources => ({
    type: SELECT_ALL,
    sourceList: sources
})

export const unSelectAll = sources => ({
    type: UNSELECT_ALL,
    sourceList: sources
})


export const invalidateSource = source => ({
    type: INVALIDATE_SOURCE,
    source
})

export const requestPosts = source => ({
    type: REQUEST_POSTS,
    source
})

export const receivePosts = (source, json) => ({
    type: RECEIVE_POSTS,
    source,
    posts: json,
    receivedAt: Date.now()
})

const fetchPosts = source => dispatch => {
    dispatch(requestPosts(source))
    return fetch(source.url)
        .then(response => {
            return response.json()
        })
        .then(json => {
            const posts = responseToPosts(source, json)
            return dispatch(receivePosts(source, posts))
        })
}

const shouldFetchPosts = (state, source) => {
    const posts = state.postsBySource[source]
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
}

export const fetchPostsIfNeeded = source => (dispatch, getState) => {
    if (shouldFetchPosts(getState(), source)) {
        return dispatch(fetchPosts(source))
    }
}

const responseToPosts = (source, json) => {
    let posts = []
    if (source === SOURCES.tmFeed) {
        json.posts.map(post => {
            posts.push(
                {
                    title: post[source.jsonProperties.title],
                    url: post[source.jsonProperties.url],
                    comments: post[source.jsonProperties.comments],
                    site: post[source.jsonProperties.site],
                    created: Date.parse(post[source.jsonProperties.created])
                }
            )
        })
        return posts
    }
    if (source === SOURCES.redditNews) {
        json.map(post => (
            posts.push(
                {
                    title: post[source.jsonProperties.title],
                    url: post[source.jsonProperties.url],
                    comments: post[source.jsonProperties.comments],
                    site: source.jsonProperties.site,
                    created: post[source.jsonProperties.created] * 1000
                }
            )
        ))
        return posts
    }
    if (source.api === 'reddit') {
        json.data.children.map(post => {
            posts.push(
                {
                    title: post.data[source.jsonProperties.title],
                    url: post.data[source.jsonProperties.url],
                    comments: post.data[source.jsonProperties.comments],
                    site: post.data[source.jsonProperties.site],
                    created: post.data[source.jsonProperties.created] * 1000
                })
        })
        return posts
    }
    if (source.api === 'rssfeed') {
        json.items.map(post => {
            (
                posts.push(
                    {
                        title: post[source.jsonProperties.title],
                        url: post[source.jsonProperties.url],
                        comments: post[source.jsonProperties.comments],
                        site: source.jsonProperties.site,
                        created: new Date(post[source.jsonProperties.created].replace(/-/g, "/")),
                    }
                )
            )
        }

        )
        return posts
    }
}