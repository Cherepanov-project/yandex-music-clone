import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBound } from './errorBoundaryStyle';
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorBound>
          <h1>Something went wrong...</h1>
          <p>Please reload and try again</p>
        </ErrorBound>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
