class Lightjs_Node {
    constructor(address , Root , props ){
        

        this.Root = Root
        this.Address = address
        this.Name = ""


        this.children = []
        this.html_result = ""
        
        this.Init(props)

    }
    
    Render_Element(props){
        this.html_result = this.Render(props)
    }
    

    Remove_Children_With_Name(name){

        this.children.forEach((child , index)=> {
            if(child.name = name){
                this.children.splice(index , 1)
            }
        })
    }
    Init(){
        
    }

    Create_Child(new_element , props = {}){
        this.children.push( new new_element(this.address + this.children.length.toString() , this.Root , props))
    }
    Wrap_result_inside_id(result){
        return `div id = 'LightJS_ID:${this.address}'>${result}</div>`
    }
    
    Render(props){
         
    }
    
    

    Invoke_Rerender(){
       this.Root.rerender(address)
    }
    
   
}

export default (Lightjs_Node)