/*eslint-disable*/
import React from "react";

import { Table, FormGroup, Label, Input } from "reactstrap";

class GenericTasks extends React.Component {
    render() {
        return (
            <div className="table-full-width">
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Due</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input defaultValue="0" type="checkbox" />
                                            <span className="form-check-sign">
                                                <span className="check" />
                                            </span>
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td>
                                    #{item.id}
                                </td>
                                <td>
                                    {item.created.toDateString()}
                                </td>
                                <td>
                                    <p className="title">{item.text}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        );
    }
}

export default GenericTasks;

