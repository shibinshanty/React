 import React from "react";
 import ReactDOM from "react-dom/client"

//jsx (transpiled before it reaches the js )- Parcel-Babel(transpiling done)

// jsx => React.CreateElement => ReactElement js Object=> Html Element

//React Element
const TitleComponent=()=>(
<h1 id='heading'>Namaste React Using JSX</h1>
);

// add react element into the functions with curly braces
const heading=(<h1>Namaste React</h1>)

// add variables into function with curly braces
const number=10000


//React Functional Component

//Component composition
const HeadingComponent=()=>(
<div id='top'>
    {heading}
    {10000}
<TitleComponent/>   
<h1 className="heading">Namaste React in Functional Component</h1>
</div>
)




const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>);

