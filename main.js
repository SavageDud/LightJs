//pre plan
`
Name : Light.js

// this will be a simple framework

// this framework will handle state changes , routing and api integration

this framework will pair each object wi  

// whenever a Light detects a state change it will rerender all the way day

// to handle state changes  
`

class Lightjs_Virtual_DOM { 
    constructor(){
        this.tree = []
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
        this.virtualDom = Lightjs_Virtual_DOM()
        

        //for rerender
        
    }
    render(){
         
    }
    rerender(address){
       // first rerender the adress
       let rerenderroot = address
    }

}

class Lightjs_Node {
    constructor(address , Root ){

        this.Root = Root
        this.address = address

        this.children = []

        this.states = {}
        this.stateupdater = {}
        
        this.html_result = ""

    }
    

    rerender(){
        // rerender is a function that will be called when needed to rerender
        // this will either return true or false depending wether the children need to be rerendered
        let oldresult = this.html_result
        this.render()
        if(oldresult == this.html_result){return false}
        return true
    }

    render(){
         
    }
    
    

    invoke_rerender(){
       this.Root.rerender(address)
    }
    
    add_state_(key , Init_data){
        if(key != null){
            this.states[key] = Init_data
            this.stateupdater[key] = ()=> {this.invoke_rerender();}
        }
    }
}

