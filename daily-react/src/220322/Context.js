import React, { createContext, useContext } from 'react';
const test = {border:'5px solid red',margin:30}
const testContext = createContext(test)
const Context = () => {
    const theme = useContext(testContext)
    return (
        <testContext.Provider value={{border:"10px solid black"}}>
        <div style={theme}>
            <h1>Sub0</h1>
            <Sub1/>
        </div>
        </testContext.Provider>
    );
};
const Sub1 = () =>{
    const theme = useContext(testContext)
    
    return(
        <testContext.Provider value={{border:"10px solid green",margin:30}}>
        <div style={theme}>
            <h1>sub1</h1>
            <Sub2/>
        </div>
        </testContext.Provider>
        
    )
}
const Sub2 = () =>{
    const theme = useContext(testContext)

    return(
        <div style={theme}>
            <h1>sub2</h1>
            <Sub3/>
        </div>
    )
}
const Sub3 = () =>{
    const theme = useContext(testContext)

    return(
        <div style={theme}>
            <h1>sub3</h1>
        </div>
    )
}
export default Context;