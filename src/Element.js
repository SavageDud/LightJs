class Lightjs_Node {
    constructor(address , Root , props ){
        

        this.Root = Root
        this.address = address
        this.name = ""


        this.children = []

        this.states = {}
        this.stateupdater = {}
        
        this.Init()

        this.html_result = ""
    }
    
    render_element(props){
        this.html_result = this.render(props)
    }
    

    remove_children_with_name(name){

        this.children.forEach((child , index)=> {
            if(child.name = name){
                this.children.splice(index , 1)
            }
        })
    }
    Init(){
        
    }

    create_child(new_element , props = {}){
        this.children.push( new new_element(this.address + this.children.length.toString() , this.Root , props))
    }
    wrap_result_inside_id(result){
        return `div id = 'LightJS_ID:${this.address}'>${result}</div>`
    }
    rerender(){
        // rerender is a function that will be called when needed to rerender
        // this will either return true or false depending wether the children need to be rerendered
        
        if(this.render() == this.html_result){return false}
        return true
    }

    render(props){
         
    }
    
    

    invoke_rerender(){
       this.Root.rerender(address)
    }
    
    create_state_(key , Init_data){
        if(key != null){
            this.states[key] = Init_data
            this.stateupdater[key] = ()=> {this.invoke_rerender();}
        }
    }
}

export default (Lightjs_Node)