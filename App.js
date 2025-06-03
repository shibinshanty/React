 import React from "react";
 import ReactDOM from "react-dom/client"

                     // (render) 
 //React.CreateElement => ReactElement js Object=> Html Element


const heading=React.createElement("h1",{id:"heading"},"Namaste React")

console.log(heading);

//jsx (transpiled before it reaches the js )- Parcel-Babel(transpiling done)

// jsx => React.CreateElement => ReactElement js Object=> Html Element


const jsxHeading=<h1 id='heading'>Namaste React Using JSX</h1>

console.log(jsxHeading);

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading);
