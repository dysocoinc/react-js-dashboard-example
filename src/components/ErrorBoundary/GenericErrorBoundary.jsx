/*eslint-disable*/
import React from "react";

class GenericErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false};
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Throw an alert on an error... just for fun
        alert(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.props.error_message}</h1>;
        }

        return this.props.children;
    }
}

export default GenericErrorBoundary;
