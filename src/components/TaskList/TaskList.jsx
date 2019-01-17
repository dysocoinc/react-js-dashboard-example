/*eslint-disable*/
import React from "react";
import GenericTasks from "./GenericTasks";
import GenericErrorBoundary from "../ErrorBoundary/GenericErrorBoundary";

// reactstrap components
import { Input, Button, Label } from "reactstrap";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [
            {
                text: "Create your first collector",
                id: Date.now(),
                priority: 10,
                created: new Date()
            },
            {
                text: "Add collector to your web site",
                id: Date.now(),
                priority: 10,
                created: new Date()
            },
            {
                text: "Watch the data flow",
                id: Date.now(),
                priority: 5,
                created: new Date()
            }], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <>
              <form onSubmit={this.handleSubmit}>
                <Label htmlFor="new-task">
                  You have {this.state.items.length } open tasks.
                </Label>
                <Input
                    id="new-task"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <Button className="btn-block">
                  Add New Task
                </Button>
              </form>
              <GenericErrorBoundary error_message="It looks like a developer broke the Configuration task list" >
                <GenericTasks items={this.state.items} />
              </GenericErrorBoundary>
            </>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        // Stop event bubbling
        e.preventDefault();

        // If no text in task list field... then nothing to do
        if (!this.state.text.length) {
            return;
        }

        // Build new task from submitted text
        const newTask = {
            text: this.state.text,
            id: Date.now(),
            priority: 5,
            created: new Date()
        };

        this.setState(state => ({
            items: state.items.concat(newTask),
            text: ''
        }));
    }
}

export default TaskList;
