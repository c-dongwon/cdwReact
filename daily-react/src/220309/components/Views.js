import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addView } from '../redux';

const Views = ({count,addView}) => {
    const [number,setNumber] = useState(0)
    return (
        <div className='items'>
            <h3>조회수 : {count}</h3>
            <input type='text' value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => addView(number)}>조회</button>
        </div>
    );
};

const mapStateToProps = ({views}) =>{
    return{
        count: views.count
    }
}


const mapDispatchToProps = {
    addView: (number) => addView(number)
}

export default connect(mapStateToProps,mapDispatchToProps)(Views);