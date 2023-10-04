import Lightjs_Node from './LightJs/Element.js'
import TaskTrackerPage from './Test_app/main_test_component.js'
import Lightjs from './LightJs/LightJs.js'


class App extends Lightjs_Node{
    Init(){
        this.name = "APP_main"
        this.create_child(TaskTrackerPage.TaskTrackerPage)
    }
    render(){
        console.log('rendering app')
        this.children[0].render_element()
        return (`<div>
            <p>123</p>
            ${this.children[0].html_result}
        </div>`)
    }
}

var module = new Lightjs(App)