# glass-box-ui-npm-package

# MaterialGlassBoxUI

MaterialGlassBoxUI is a custom MUI (Material-UI) component that adds a glass effect to a box. It allows users to easily integrate a glassy appearance into their React applications.

## Installation

Install the package via npm:

npm install materialglassboxui

*Pls note I donot take any responsibility for any issue caused during installation or use

## Example

Demo Hosted Link: https://material-glass-box-ui-demo.vercel.app/

![Glass Box Code Demo Preview](./CodeSSDemo.png)


import React from "react";
import GlassBoxUI from "material-react-glass-box";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#9695CB",
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <GlassBoxUI sx={{ width: "300px", height: "300px", margin: "50px" }}>
        {'<h1>Hello, Glass Box!</h1>'}
      </GlassBoxUI>
    </div>
  );
};

export default App;
