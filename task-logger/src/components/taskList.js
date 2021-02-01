import React from 'react';

class TaskList extends React.Component {
    render() {
        return (

            <li >{this.props.obj.date} <b>{this.props.obj.client}</b> - {this.props.obj.task} : {this.props.obj.minutes} minutes</li>
        )
    }
}

export default TaskList;