import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { //This is a built in lifecycle emthod
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>
        }
        return this.props.children
    
    }
}

export default ErrorBoundry;