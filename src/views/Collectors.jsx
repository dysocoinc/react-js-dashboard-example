import React from "react";

import CollectorDataTable from "../components/DataTable/CollectorDataTable";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";

class Collectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {headers: ["", "Name", "Active", "Shortcode", "Created At"], items: [] };
    this.buildFakeCollectors = this.buildFakeCollectors.bind(this);
  }

  buildFakeCollectors() {
    this.setState(state => ({
        items: state.items.concat({
            id: Date.now(),
            name: "Test Collector",
            active: true,
            shortCode: "COLLECTORONETEST",
            createdAt: new Date()
        })
    }));
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
                  <CardTitle tag="h4">My Dynamix Collectors</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button className="btn-primary" onClick={this.buildFakeCollectors}>Add A Collector</Button>
                  <CollectorDataTable headers={this.state.headers} items={this.state.items} message="You do not have any collectors"/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Collectors;
