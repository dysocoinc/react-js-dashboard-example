/*eslint-disable*/
import React from "react";

import { Table } from "reactstrap";

class CollectorDataTable extends React.Component {
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
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.active.toString()}</td>
                                <td>{item.shortCode}</td>
                                <td>{item.createdAt.toDateString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}

export default CollectorDataTable;

