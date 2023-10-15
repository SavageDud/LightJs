import Lightjs_Node from './LightJs/Element.js'
import Lightjs from './LightJs/LightJs.js'


class App extends Lightjs_Node{
    Init(){
        // create variables
        //create children
    }
    Render(){
        // render chilren 
        
        return "<div>Hello World</div>"
    }
    
}


var module = new Lightjs(App)