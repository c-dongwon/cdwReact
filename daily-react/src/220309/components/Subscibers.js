import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber } from '../redux';

const Subscibers = ({count,addSubscriber}) => {
    return (
        <div className='items'>
            <h3>구독자수 : {count}</h3>
            <button onClick={() => addSubscriber()}>구독</button>
        </div>
    );
};

const mapStateToProps = ({subscribers}) =>{
    return{
        count: subscribers.count
    }
}


const mapDispatchToProps = {
    addSubscriber
}

export default connect(mapStateToProps,mapDispatchToProps)(Subscibers);