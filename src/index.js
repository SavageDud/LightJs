import Lightjs_Node from './LightJs/Element.js'
import Lightjs from './LightJs/LightJs.js'


class App extends Lightjs_Node{
    Init(){
        // create data
        this.tasks_data = []
        this.Create_Child(tasks, {tasks : this.tasks_data})
        this.Create_Child(Buttons , {add_button : ()=> {this.add_task()} , remove_button : ()=> {this.remove_task()}})
        //create children
    }
    Render(){
        // render chilren 
        this.children[0].Render_Element({tasks : this.tasks_data})
        this.children[1].Render_Element()

        return (`<div class = 'main_container' >
                    <div class = 'display_flex' style = 'width : 100%;'>
                       <h2>Tasks</h2>
                    </div>
                    <div>
                       ${this.children[0].html_result}</div> 
                    <div>
                       ${this.children[1].html_result}</div> 
                    </div>`)
    }
    add_task(){
       this.tasks_data.push("")
       this.Root.Render()
    }
    remove_task(){
      this.tasks_data.splice(this.tasks_data.length - 1 , 1)
      this.Root.Render()
    }
}
class tasks extends Lightjs_Node{
    Init(){
       
    }
    Render(props){
        let tasks = props.tasks
        let html_task_data = ""
        tasks.forEach(element => {
            html_task_data += `<div class = 'display_flex'><input value = '${element}'></input></div>`
        });
        return `<div class = 'display_block'>${html_task_data}</div>`
    }
}
class Buttons extends Lightjs_Node{
    Init(props){

       this.add_task_callback = props.add_button
       this.add_button_id = "add_button"

       this.remove_task_callback = props.remove_button
       this.remove_btn_id = "remove_button"

    }
    Render(){
       this.Root.Add_Effect(()=> {document.getElementById(this.add_button_id).addEventListener("click" , ()=>{this.add_task_callback()})})
       this.Root.Add_Effect(()=> {document.getElementById(this.remove_btn_id).addEventListener("click" , ()=>{this.remove_task_callback()})})
       return (`<div class = 'display_flex'>
                        <div class = 'display_flex' style = 'width : 50%;'>

                           <div class = 'btn' id ='${this.add_button_id}'>Add task</div>

                        </div><div class = 'display_flex' style = 'width : 50%;'>

                           <div class = 'btn' id = '${this.remove_btn_id}'>Remove task</div>

                        </div>
                    </div>`)
    }
}


var module = new Lightjs(App)