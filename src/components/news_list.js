import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NewsListItem from './news_list_item';

class NewsList extends Component {

    componentWillMount(){
        this.props.fetchNews();
    }

    renderList() {
        const posts = this.props.news.data.posts;

        return (
            posts.map(post => {
                return (
                    <NewsListItem post={post} key={post.id} />
                );
            })
        );
    }

    render() {

        if (!this.props.news) {
            return <div>Loading</div>
        }
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return { news: state.items.news }
}

export default connect(mapStateToProps, actions)(NewsList);
