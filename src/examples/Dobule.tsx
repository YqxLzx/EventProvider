import {useState,useContext} from 'react'
import {Ctx} from '../event/EventProdiver'
export default function Double(){
    let [doubleState,setDoubleState] = useState(2)
    const e_ctx = useContext(Ctx);
    e_ctx.subscribe('stateChange',(value: number) => setDoubleState(2 * value))
    return(
        <div>
            <h1>Side-value:{doubleState}</h1>
        </div>
    )
}