import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPostsIfNeeded, selectSource, selectSourcesList, invalidateSource, selectAll, unSelectAll } from '../actions';
import Posts from './Posts';
import SideMenu from './side_menu';
import _ from "lodash";




class App extends Component {

    componentWillMount() {
        const { dispatch, selectedSources, postsBySource } = this.props

        Object.entries(selectedSources).map(([key, value]) => {
            if (value.isSelected === true) {
                dispatch(fetchPostsIfNeeded(value.properties))
            }
        })
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSources !== this.props.selectedSources) {
            const { dispatch, selectedSources, postsBySource, posts } = nextProps
            Object.entries(selectedSources).map(([key, value]) => {
                if (value.isSelected) {
                    dispatch(fetchPostsIfNeeded(value.properties))
                }
            })
        }
    }

    handleSelectSource(e, source) {
        const { dispatch } = this.props
        dispatch(selectSource(source))
    }
    handleSelectAll(e, sources) {
        const { dispatch } = this.props
        dispatch(selectAll(sources))
    }
    handleUnselectAll(e, sources) {
        const { dispatch } = this.props
        dispatch(unSelectAll(sources))
    }


    render() {
        const { posts, postsBySource, selectedSources } = this.props

        var isEmpty = true
        Object.values(selectedSources).map(value => {
            if (value.isSelected) {
                return isEmpty = false
            }
        })
        //console.log(selectedSources)

        return (
            <div>
                <div>
                    <nav id="sidebar">
                        <SideMenu onClick={this.handleSelectSource.bind(this)} onSelectAll={this.handleSelectAll.bind(this)} onUnselectAll={this.handleUnselectAll.bind(this)} />
                    </nav>
                </div>

                <div id="content">
                    {isEmpty === true ?

                        <div className="container info">
                            <h5>Select source</h5>
                        </div>

                        : (posts.length === 0 ?
                            <div className="container info">
                                <img src={require('../assets/loading.gif')} />
                            </div>
                            : <div ><Posts posts={posts} /></div>
                        )

                    }
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    const { postsBySource, selectedSources } = state
    var posts = []

    Object.entries(selectedSources).map(([key, value]) => {
        if (value.isSelected) {
            if (!postsBySource[key] || !postsBySource[key].items) {
                return []
            }
            else {
                return postsBySource[key].items.map(item => posts.push(item))
            }
        }
    })

    posts = _.sortBy(posts, [function (o) { return -o.created }])

    return {
        postsBySource,
        selectedSources,
        posts
    }
}


export default connect(mapStateToProps)(App)