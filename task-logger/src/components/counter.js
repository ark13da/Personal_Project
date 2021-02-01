import axios from "axios";
import React from 'react';
import TaskList from "./taskList";


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            message: '',
            taskName: '',
            taskTime: 0,
            taskDate: '',
            taskCollection: [],
            newTasks: []

        };
        this.addTask = this.addTask.bind(this);
        this.taskNameChange = this.taskNameChange.bind(this);
        this.minuteCountChange = this.minuteCountChange.bind(this);
        this.objParser = this.objParser.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.tasklisting = this.tasklisting.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.clientNameChange = this.clientNameChange.bind(this);
        this.taskDateChange = this.taskDateChange.bind(this);


    }

    fetchData(e) {
        e.preventDefault();
        axios.get("/fetch")
            .then(res => {
                let result = res.data;
                result.forEach(x => {
                    x.date = x.date.slice(0, 10);
                })

                this.setState({
                    taskCollection: result
                })
            })
            .catch((error) => {
                console.log(error);
            })
      
    }

    tasklisting() {

        return this.state.taskCollection.map((data) => {
            
            return <TaskList obj={data} key={data._id} />
        });
    }

    dateItem() {
        
        if (this.state.taskDate.length) {
            return this.state.taskDate;
        } else {
            let date = Date();
            return date.slice(4, 15);
        }
    };

    addTask() {


        const taskObject = {
            client: this.state.clientName,
            task: this.state.taskName,
            minutes: this.state.taskTime,
            date: this.dateItem()
        };

        if (/^\d*$/.test(taskObject.minutes) && parseInt(taskObject.minutes) > 0 && taskObject.task.length && taskObject.client.length) {

            axios.post("/add", taskObject)
                .then((res) => {
                                 
                    this.setState({
                        newTasks: [...this.state.newTasks, `${taskObject.date} ${taskObject.client} ${taskObject.task} : ${taskObject.minutes} minutes logged!`],
                        clientName: '',
                        taskName: '',
                        taskDate: '',
                        taskTime: 0,
                        message: 'Success!'
                    })
                }).catch((err) => {
                    console.log(err);
                    this.setState({
                        clientName: '',
                        taskName: '',
                        taskDate: '',
                        taskTime: 0,
                        message: 'Something went wrong!'
                    })
                })

        } else {
            this.setState({
                clientName: '',
                taskName: '',
                taskDate: '',
                taskTime: 0,
                message: 'Invalid entry!'
            })
        }

    };

    taskNameChange(e) {
        this.setState({
            taskName: e.target.value
        });
    };

    minuteCountChange(e) {
        this.setState({
            taskTime: e.target.value
        });
    };

    clientNameChange(e) {
        this.setState({
            clientName: e.target.value
        });
    };

    taskDateChange(e) {
        this.setState({
            taskDate: e.target.value
        });
    };

    objParser() {
        
        if (this.state.newTasks.length) {
            return this.state.newTasks.map((x) =>
                <li key={x}> {x} </li>);
        } else {
            return <p>No new task is logged yet!</p>;
        }
        
    };

    formSubmit(e) {
        e.preventDefault();
        this.addTask();
        e.target.reset();

    };

    render() {
        return (
            <div>
                <div className="mainTitle">
                    <span className="titleSpan">Task logger </span>
                    
                </div>

                <div id="inputTask">
                    <h4>Log your work</h4>
                    <form className="form-inline" onSubmit={this.formSubmit}>
                        <label className="mr-sm-2" htmlFor="taskDate">Date:</label>
                        <input className="form-control mr-sm-2 mb-2" type='date' name='date' id='taskDate' onChange={this.taskDateChange} placeholder="Task date" />
                        <label className="mr-sm-2" htmlFor="clientName">Client:</label>
                        <input className="form-control mr-sm-2 mb-2" type='text' name='client' id='clientName' onChange={this.clientNameChange} placeholder="Client name" />
                        <label className="mr-sm-2" htmlFor="taskName">Task:</label>
                        <input className="form-control mr-sm-2 mb-2" type='text' name='task' id='taskName' onChange={this.taskNameChange} placeholder="Task name" />
                        <label className="mr-sm-2" htmlFor="minuteCount">Minutes:</label>
                        <input className="form-control mr-sm-2 mb-2" type='number' name='minutes' id='minuteCount' onChange={this.minuteCountChange} placeholder="Duration in minutes" />
                        <input className="mr-sm-2 btn btn-success mb-2" type='submit' value='Add' />
                        <span className="ml-sm-2"> {this.state.message}</span>
                    </form>
                    <ul>
                        {this.objParser()}
                    </ul>
                </div>

                <hr />

                <div id="TaskList">
                    <button type="button" className="btn btn-primary" onClick={this.fetchData}>Logged tasks</button>
                    <ul>
                        {this.tasklisting()}
                    </ul>
                </div>

                <div id="pivot">
                </div>

                <div id="stats">
                </div>

                <h3>Remaining tasks:</h3>
                <p>Great UI (animation, background image)</p>
                <p>Push to git</p>
                <p>Diploy to glith</p>
                <p>allow pivoting</p>
                <p>make chart with chart.js</p>
            </div>
        );
    }


};
export default Counter;