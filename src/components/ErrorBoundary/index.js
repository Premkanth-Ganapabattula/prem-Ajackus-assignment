import React, { Component } from 'react';

// ErrorBoundary component to catch errors in any child component and display a fallback UI
class ErrorBoundary extends Component {
  state = {
    hasError: false, // Track if an error has occurred
  };

  // Lifecycle method that is triggered when a child component throws an error
  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update the state to show the error message
  }

  // Lifecycle method to log error details (optional)
  componentDidCatch(error, info) {
    console.error('Error caught by ErrorBoundary:', error, info); // Log error details to the console
  }

  render() {
    if (this.state.hasError) {
      // If an error occurred, display a fallback UI
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    // If no error, render the children components as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
