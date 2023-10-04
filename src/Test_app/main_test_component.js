import Lightjs_Node from "../LightJs/Element.js";


// next thing we want to build is navigation and routing
// also a cool idea will be a way for the app to make web calls 
// maybee in the futur I will add cyber-security

class TaskTrackerPage extends Lightjs_Node{
    Init(){

        this.create_state_("tasks", ["hello worlds", "babaworld"])
        console.log("running init")
        this.create_child(TaskDisplayer_box , {tasks : this.states.tasks})
        this.create_child(TaskUpdate_button , {taskupdater : (param)=> {this.change_number_of_task(param)} , delete_func : ()=> { this.delete_task()}})
    }
    render(){

        this.children[0].render_element({tasks : this.states.tasks})
        console.log("rendering aa")

        this.children[1].render_element({taskupdater : (param)=> {this.change_number_of_task(param)} , delete_func : ()=> { this.delete_task()}})
        return(
            `<div>
            ${this.children[0].html_result}
            ${this.children[1].html_result}
            </div>`
        )
    }
    change_number_of_task(add_amount){
       this.states["tasks"].push("")
       this.Root.render()
    }
    delete_task(){
        this.states["tasks"].splice(this.states["tasks"].length - 1 , 1)
       this.Root.render()
    }
}

class TaskDisplayer_box extends Lightjs_Node{
    
    render(props){

        let data_string = ""
        let number = props.tasks.length;
        props.tasks.forEach(element => {
            data_string = data_string + `<input value = '${element}'></input>`
        });
        

        return "<div>"+ data_string+" </div>"
        
    }

}
class TaskUpdate_button extends Lightjs_Node{
    Init(props){
      

    }
    render(props){
        
        this.Root.add_effect(()=>{
            document.getElementById('next_button').addEventListener("click", ()=>{
                props["taskupdater"]()
            })
        })

        this.Root.add_effect(()=>{
            document.getElementById('delete_btn').addEventListener("click", ()=>{
                props["delete_func"]()
            })
        })

        let data_string = ""
        return `<button id = 'next_button'>Create</button> <button id = 'delete_btn'>delete</button>`
        
    }
    buttonClick(){
        console.log("hello world")
    }
}

export default {TaskTrackerPage,TaskDisplayer_box  , TaskUpdate_button}