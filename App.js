 import React from 'react'
 import ReactDOM from "react-dom/client"
import { jsx } from 'react/jsx-runtime'


//Creating React.createElement to create a react element

const header=React.createElement("div",{id:"title"},
    [React.createElement("h1",{id:"head1",key:"h1"},"This is H1"),
     React.createElement("h2",{id:"head2",key:"h2"},"This is H2"),
     React.createElement("h2",{id:"head3",key:"h3"},"This is H3")
    ],
)

// creating React element using jsx
const JsxHeader=
(
   <div>
    <h1>This is h1</h1>
    <h2>This is h2</h2>
    <h3>This is h3</h3>
   </div>
)


//creating React element using functional component with jsx

const TitileComponent=()=>{
    <div id="header" style={{color:"blue"}}>
     <h1>This is h1</h1>
    <h2>This is h2</h2>
    <h3>This is h3</h3>   
    </div>
}


const Subtitile=()=>
(<h4>This is a SubTitle inside TitleComponent</h4>)


const SubtitileComponent=()=>
    (<div id="Header">
     <h1>This is h1</h1>
    <h2>This is h2</h2>
    <h3>This is h3</h3> 
    <Subtitile/> 
    </div>)


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<SubtitileComponent/>);


const ParentComponent = () => (
  <div>
    {TitleComponent}          // ❌ Won’t render, just function reference
    {TitleComponent()}        // ⚠️ Works, but not JSX standard
    <TitleComponent />        // ✅ Recommended
    <TitleComponent></TitleComponent> // ✅ Same as above
  </div>
);
