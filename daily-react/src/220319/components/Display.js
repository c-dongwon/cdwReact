import React from 'react';
import { connect } from 'react-redux';
const Display = (props) => {
    return (
        <div>
            <p>구독자수 : {props.count}</p>
        </div>
    );
};
const mapStateToProps = ({sub}) =>{
    return{
        count:sub.count
    }
}
export default connect(mapStateToProps)(Display);