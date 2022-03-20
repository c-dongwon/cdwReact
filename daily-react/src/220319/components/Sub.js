import React from 'react';
import { connect } from 'react-redux';
import { addSub } from '../redux';

const Sub = ({count,addSub}) => {
    return (
        <div className='items'>
            <p>구독자수 : {count}</p>
            <button onClick={()=>addSub()}>구독!</button>
        </div>
    );
};

const mapStateToProps = ({sub}) =>{
    return{
        count:sub.count
    }
}
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         addSub: ()=>dispatch(addSub())
//     }
// }

const mapDispatchToProps = {
    addSub
}
export default connect(mapStateToProps,mapDispatchToProps)(Sub);