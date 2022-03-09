import { FETCH_COMMENTS,FETCH_COMMENTS_REQUEST,FETCH_COMMENTS_SUCCESS,FETCH_COMMENTS_FAILUE } from "./type";

export const fetchComments = () =>{
    return(dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(comments => console.log(comments))
        .catch(error => console.log(error))
    }
}