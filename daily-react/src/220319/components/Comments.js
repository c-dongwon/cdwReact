import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from "../redux"

const Comments = ({fetchComments,loading,comments}) => {
    useEffect(() =>{
        fetchComments()
    },[])
    const commentsItems = loading ? (<div>loading...</div>) : (
        comments.map(comments =>(
            <div key={comments.id}>
                <h3>{comments.id}. {comments.name}</h3>
                <p>{comments.body}</p>    
            </div>
        ))
    )
    return (
        <div className='items'>
            {commentsItems}
        </div>
    );
};

const mapStateToProps = ({comments}) =>{
    return{
        comments:comments.items
    }
}
const mapDispatchToProps = {
    fetchComments
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);