import { Component } from "react";
import empty from "./empty.png"
import checkbox from "./checkbox.png"

export class ToDoList extends Component{
    constructor(){
        super();
    this.state ={
        textField : "",
        listOfTasks: [],
        image: empty
    }
}

    changedEvent(e){
        this.setState({textField: e});
        console.log(e)
    }

    addItem(userText){
        if(userText===''){
            alert('Please enter a to do!')
        }
        else{
        let listArray = this.state.listOfTasks;
        listArray.push(userText);
        this.setState({listOfTasks: listArray, textField: ''})
        }
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
        
    }

    // changeImg(){
    //     this.setState({image: checkbox})
    // }

    deleteItem(){
        let listArray = this.state.listOfTasks;
        listArray = [];
        this.setState({listOfTasks: listArray})
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                    <input type="text" placeholder="Add To Do" 
                    onChange={(e) => {this.changedEvent(e.target.value)}}
                    value={this.state.textField}/>
                    </div>

                    <div className="container">
                    <button className="btn add" onClick={() => this.addItem(this.state.textField)}>Add</button>
                    </div>

                    <div className="container">
                        <button className="btn delete" onClick={() => this.deleteItem()}>Delete</button>
                    </div>
                    
                        <ul>
                            {this.state.listOfTasks.map((item, index) =>(
                                <li  onClick={this.crossedWord} key={index}>
                                    <img src={checkbox}  width="20px" alt="empty checkbox"/>
                                    {item}</li>
                            ))}
                        </ul>

                        </form>
            </div>
        )
    }
}