import React from "react";
import { Button } from "antd";
import "./App.css";
import "antd/dist/antd.min.css";

const App: React.FC = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);

// function App (){
//   return (
//     <div className="App">
//       <h1 className="text-3xl font-bold text-purple underline">Hello world!</h1>
//       <>
//         <Button type="primary">Primary Button</Button>
//         <Button>Default Button</Button>
//         <Button type="dashed">Dashed Button</Button>
//         <br />
//         <Button type="text">Text Button</Button>
//         <Button type="link">Link Button</Button>
//       </>
//     </div>
//   );
// }

export default App;
