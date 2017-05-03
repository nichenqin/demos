import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPost, deletePost } from '../actions/index';

class PostDetail extends Component {

    componentDidMount() {
        console.log(this.props);
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onPostDelete() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if (!post) return <div>Loading...</div>;

        return (
            <div>
                <Link className="btn btn-primary" to="/">Back</Link>
                <button
                    className="btn btn-danger float-right"
                    onClick={this.onPostDelete.bind(this)}
                >Delete</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categeries}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetail);
