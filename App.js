 import React from "react";
 import ReactDOM from "react-dom/client"

//jsx (transpiled before it reaches the js )- Parcel-Babel(transpiling done)

// jsx => React.CreateElement => ReactElement js Object=> Html Element

//React Element
const jsxHeading=<h1 id='heading'>Namaste React Using JSX</h1>


//React Functional Component

const HeadingComponent=()=>(
<div id='top'>
<h1 className="heading">Namaste React in Functional Component</h1>
</div>
)




const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>);

