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
        this.Create_Child(props._app_class)

    }
    Render(){
        this.children[0].Render_Element()
        
        return(`
            <div>${this.children[0].html_result}</div>
        `)
    }
    

}

class Lightjs { 
    constructor(app_class){
        this.effects = []
        this.virtualDom = new Lightjs_Virtual_DOM("",this,{_app_class : app_class})
        
        
        //for rerender
        this.Render()
        
        
    }

    
    Add_Effect(function_){
       this.effects.push(function_)
    }

    Run_Effects(){
      this.effects.forEach((effect) => {
        effect()
      })
      this.effects = []
    }

    Render(){
        this.virtualDom.Render_Element()
        document.body.innerHTML = this.virtualDom.html_result
        this.Run_Effects()
    }
    
}



export default Lightjs