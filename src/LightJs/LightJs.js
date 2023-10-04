//pre plan
`
Name : Light.js

// this will be a simple framework

// this framework will handle state changes , routing and api integration

this framework will pair each object wi  

// whenever a Light detects a state change it will rerender all the way day

// to handle state changes  
`


import Lightjs_Node from './Element.js'



class Lightjs_Virtual_DOM extends Lightjs_Node { 
    Set_root(object_){
        this.Root = object_
    }
    Init(props){
        this.name = "ROOT"
        this.create_child(props._app_class)

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

}

class Lightjs { 
    constructor(app_class){
        this.rout = this.get_currentrout()
        this.effects = []
        this.virtualDom = new Lightjs_Virtual_DOM("",this,{_app_class : app_class})
        
        
        //for rerender
        this.render()
        
        
    }

    get_currentrout(){
        let location = window.location.href
        console.log(location)
       return location
    }
    
    async Root_fetch(address_ , callback_){
        let result_ = fetch(address_)
        result_.then((data) => {callback_()})
    }

    add_effect(function_){
       this.effects.push(function_)
    }

    run_effects(){
      this.effects.forEach((effect) => {
        effect()
      })
      this.effects = []
    }

    render(){
        this.virtualDom.render_element()
        document.body.innerHTML = this.virtualDom.html_result
        this.run_effects()
    }
    
    rerender(address){
       // first rerender the adress
       let rerenderroot = address
    }

}



export default Lightjs