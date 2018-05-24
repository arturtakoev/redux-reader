import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    fetchPostsIfNeeded,
    selectSource,
    selectSourcesList,
    invalidateSource,
    selectAll,
    unSelectAll,
    toggleMenu
} from '../actions';
import Posts from './Posts';
import SideMenu from './side_menu';
import _ from "lodash";




class App extends Component {

    constructor(props) {
        super(props);
        this.state = {swipe: 250};
      }

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
    handleToggle() {
        const { dispatch } = this.props
        dispatch(toggleMenu())
    }

    onSwipeMove(position, event) {
        this.setState({swipe: position.x})
        console.log(this.state)
      }
    
    render() {
        const { posts, postsBySource, selectedSources, toggleMenu } = this.props

        var isEmpty = true
        Object.values(selectedSources).map(value => {
            if (value.isSelected) {
                return isEmpty = false
            }
        })
        

        return (
            <div>
                <div>
                    <SideMenu onClick={this.handleSelectSource.bind(this)}
                        onSelectAll={this.handleSelectAll.bind(this)}
                        onUnselectAll={this.handleUnselectAll.bind(this)} 
                        />
                </div>
                
                <div id="content" 
                className={toggleMenu.isVisible ? 'visible' : 'hidden'} 
                style={{transform: `translateX(${this.state.swipe})`}}
                >
                    <div class="hamburger" onClick={this.handleToggle.bind(this)} className={toggleMenu.isVisible ? 'change' : 'visible'}>
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                    
                        
                   
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
    const { postsBySource, selectedSources, toggleMenu } = state
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
        posts,
        toggleMenu
    }
}


export default connect(mapStateToProps)(App)