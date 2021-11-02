import React from "react";

interface PropTypes {
  children: React.ReactNode;
}

function App({ children }: PropTypes) {
  return <div style={{ backgroundColor: "#181414" }}>{children}</div>;
}

export default App;
