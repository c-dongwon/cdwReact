import React, { createContext, useMemo, useState } from 'react';

export const ChangeColorContext = createContext()

const ChangeColorProvider = ( props ) => {
    const [ color , setColor ] = useState('skyblue')

    const onColor = ( text )  => {
        setColor( text )
    }

    // useMemo( () =>() , [])
    const value = useMemo( () => ({ color , onColor }),[color , onColor])

    return (
        <ChangeColorContext.Provider value={ value }>
            { props.children }
        </ChangeColorContext.Provider>
    );
};
export default ChangeColorProvider;