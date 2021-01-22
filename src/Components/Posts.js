import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import {GET_POSTS} from "../Actions/index";

function Posts(props) {
    useEffect(() => {
      props.GET_POSTS();
    }, [])
    return (
        <div>
            <h1>This is Posts Component</h1>
            {props.store.posts.map((post, index)=>{
                return(
                    <div key={index} className="m-3 p-3">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {store : state};
};

export default connect(mapStateToProps, {GET_POSTS}) (Posts);
