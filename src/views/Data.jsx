import React from "react";
import GenericDataTable from "../components/DataTable/GenericDataTable";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {headers: ["", "Name", "Active", "Shortcode", "Created At"], items: []};
  }

  render() {
    return (
      // React.Fragment
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">My Collected Data</CardTitle>
                </CardHeader>
                <CardBody>
                  <GenericDataTable headers={this.state.headers} items={this.state.items} message="Looks like you have not collected any data"/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Data;
