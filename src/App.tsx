import {EventProvider} from './event/EventProdiver'
import Double from '../src/examples/Dobule'
import Counter from './examples/Counter'
export default function App(){
    return (
        <EventProvider>
            <h1>app</h1>
            <Double/>
            <Counter/>
        </EventProvider>
    )
}


