type fnArray = ((params:unknown) => unknown)[]
let a:fnArray = []
class EventDispatcher {
    map:Map<string,fnArray>
    constructor(){
        this.map = new Map()
    }
    subscribe(name:string,fn:(params:unknown) => unknown){
        let value = this.map.get(name)
        if(value){
            value.push(fn)
        }else{
            this.map.set(name,[fn])
        }
    }
    distribute(name:string,value:unknown){
        let arr = this.map.get(name)
        if(arr){
            arr.forEach(fn => fn(value))
        }else{
            console.error('params err')
        }
    }
}

export const edis = new EventDispatcher()