import Lightjs_Node from "../Element";


class TaskTrackerPage extends Lightjs_Node{
    Init(){
        this.create_state_("tasks", ["hello worlds", "babaworld"])
        console.log("running init")
        this.create_child(TaskDisplayer_box , {tasks : this.states.tasks})
        this.create_child(TaskUpdate_button , {taskupdater : (param)=> {this.change_number_of_task(param)}})
    }
    render(){
        this.children[0].render_element({tasks : this.states.tasks})
        console.log("rendering aa")
        this.children[1].render_element({taskupdater : (param)=> {this.change_number_of_task(param)}})
        return(
            `<div>
            ${this.children[0].html_result}
            ${this.children[1].html_result}
            </div>`
        )
    }
    change_number_of_task(add_amount){
       console.log("hello world")
       
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
    render(props){
        let data_string = ""
        
        return `<button>${this.Root.name}</button>`
        
    }
    buttonClick(){
        console.log("hello world")
    }
}

export default {TaskTrackerPage,TaskDisplayer_box  , TaskUpdate_button}