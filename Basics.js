import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => object => render , then it becoms Html element

const div = React.createElement(
    "div", 
    { id: "parent" },
    [
        React.createElement("div",{id:"child1"},"This is child one"),
        React.createElement(
            "div",
            {id:"child2"},
            React.createElement("div", {id:"grandchild"}, "This is the grand child")
        )
    ]
);

// console.log(div);


const jsxDiv = (<div id="parent">
                    <div id="child1">This is child one</div>
                    <div id="child2">
                        <div id="grandchild">this is the grand child</div>
                    </div>
                </div>);

//JSX
// It is basically HTML or XML like javascript 
// JSX is not html inside javascript 

const jsxHeading = <h1 className="heading1">
    Hello React 🔥
    </h1>;
// console.log(jsxHeading); // it gives us resuld that jsxHeading is an object.

//React Component 

//functional component 

//Syntax
const title = (
    <h1>This is a react course. got it !!</h1>
);
const HeadingComponent = () => (
    <div id="container">
        <div>{title}</div>
        <h1>This is a functional component.....</h1>
    </div>
);

const Heading2 = () => <h1>This is a another react component</h1>; 

// without return with multiple  line of code 
const heading3 = () => (
    <h1 className="heading">This is a functional component</h1>
);

//rendering the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(<HeadingComponent/>);




