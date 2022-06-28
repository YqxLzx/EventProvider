import {useState,useContext} from 'react'
import {Ctx} from '../event/EventProdiver'
export default function Counter(){
    const e_ctx = useContext(Ctx);
    let [state,setState] = useState(1)
    return(
        <div>
           <button onClick={() => {
            setState(++state)
            e_ctx.distribute('stateChange',state)
           }}>increase</button>
           <h1>Button-value:{state}</h1>
           <p>---------</p>
        </div>
    )
}
