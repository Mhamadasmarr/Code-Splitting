import React from "react";

export class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
// This lifecycle is invoked after an error has been thrown 
//by a descendant component. 
//It receives the error that was thrown as a parameter and 
//should return a value to update state.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
//This method is used to log errors.
//error:the error that was thrown by the descendant component.
//info:stores the componentStack trace of which component has thrown this error.
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      
      return <div className="center1">
          <span className="fw-bolder fs-3">
        Network Disconnected
      <br/> ERROR MESSAGE :</span><br/>
      <span className="text-danger">{this.state.error.message}
      </span>
      </div>;
    }

    return this.props.children;
  }
}