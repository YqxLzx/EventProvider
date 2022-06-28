import React from 'react';
import {edis} from './index'
export const Ctx = React.createContext(edis);
export function EventProvider(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }){
    return (
        <Ctx.Provider value={edis}>
            {props.children}
        </Ctx.Provider>
    )
}