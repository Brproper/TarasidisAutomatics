import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#1e1e2f",
            color: "#f7f9fc",
            fontFamily: "'Jura', sans-serif",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              background: "linear-gradient(to right, #00bfff, #5cdb95)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Something went wrong
          </h1>
          <p style={{ marginBottom: "2rem", opacity: 0.8 }}>
            We're sorry for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={this.handleReload}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.1rem",
              fontWeight: "bold",
              background: "#00bfff",
              color: "#1e1e2f",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#5cdb95")}
            onMouseOut={(e) => (e.target.style.background = "#00bfff")}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
