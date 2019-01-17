/*eslint-disable*/
import React from "react";

import { Table } from "reactstrap";

class GenericDataTable extends React.Component {
    render() {
        if (this.props.items.length === 0) {
            return (
                <div className="table-full-width">
                    <Table>
                        <thead>
                        <tr>
                            {this.props.headers.map(header => (
                                <th className="text-left">{header}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={this.props.headers.length}>
                                    <h4>{this.props.message}</h4>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            );
        } else {
            return (
                <div className="table-full-width">
                    <Table>
                        <thead>
                            <tr>
                                {this.props.headers.map(header => (
                                    <th>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.items.map(item => (
                            <tr key={item.id}>

                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}

export default GenericDataTable;

