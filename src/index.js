import Lightjs_Node from './LightJs/Element.js'
import Lightjs from './LightJs/LightJs.js'


class App extends Lightjs_Node{
    Init(){

    }
    render(){
        return (`<div>
            <p>Hello world</p>
            
        </div>`)
    }
}

var module = new Lightjs(App)