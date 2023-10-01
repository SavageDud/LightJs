//pre plan
`
Name : Light.js

// this will be a simple framework

// this framework will handle state changes , routing and api integration

this framework will pair each object wi  

// whenever a Light detects a state change it will rerender all the way day

// to handle state changes  
`

import App from './app.js'
import Lightjs_Node from './Element.js'



class Lightjs_Virtual_DOM extends Lightjs_Node { 
    Set_root(object_){
        this.Root = object_
    }
    Init(){
        this.name = "ROOT"
        this.create_child(App)

    }
    render(){
        this.children[0].render_element()
        
        return(`
            <div>${this.children[0].html_result}</div>
        `)
    }
    Get_node_with_adress (address) {
       let pointer;
       for (let char_ind; char_ind < address.lenght ; char_ind++){
           pointer = pointer.children[parseInt(address[char_ind])]
       }
       return pointer
    }
    UpdateRealDom(pointer){

    }

}

class Lightjs { 
    constructor(){
        this.virtualDom = new Lightjs_Virtual_DOM()
        this.virtualDom.Set_root(this)

        //for rerender
        console.log(this.virtualDom.html_result)
        document.body.innerHTML = this.virtualDom.html_result
        
    }
    

    add_effect(function_){

    }

    run_effects(){

    }

    render(){
        this.virtualDom.render_element()
        run_effects()
    }

    rerender(address){
       // first rerender the adress
       let rerenderroot = address
    }

}


const receiveInput = ()=>{
    console.log('hello world')  
}

console.log('hellaao world')
var module = new Lightjs()