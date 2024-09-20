import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{},"Hello World from React!!!");
// const heading=React.createElement("h1",{id:"heading" ,class:"headingClass"},"Hello World from React!!!");

// const rootdom=ReactDOM.createRoot(document.getElementById("root"));
// rootdom.render(heading);

//Case 1: Nested Div in React
/*
<div id="parent">
    <div id="child">
        <h1> Nested Div Implementation </h1>
    </div>
</div>
*/

// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//     React.createElement("h1",{},"Nested Div Implementation"))
// )

// const rootdom=ReactDOM.createRoot(document.getElementById("root"));
// rootdom.render(parent);

//Case 1: Nested Div with siblings children in React
/*
<div id="parent">
    <div id="child">
        <h1> Nested Div Implementation </h1>
        <h2> Nested Div Implementation </h2>
    </div>
</div>
*/

// We need to pass third parameter in a array of elements.

// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//     [React.createElement("h1",{},"Nested Div Implementation h1"),
//     React.createElement("h2",{},"Nested Div Implementation h2")])
// )

// const rootdom=ReactDOM.createRoot(document.getElementById("root"));
// rootdom.render(parent);

//Case 1: Nested Div with siblings children in React
/*
<div id="parent">
    <div id="child1">
        <h1> Nested Div Implementation </h1>
        <h2> Nested Div Implementation </h2>
    </div>
    <div id="child2">
        <h1> Nested Div Implementation </h1>
        <h2> Nested Div Implementation </h2>
    </div>
</div>
*/  
const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"Nested Div Implementation h1"),
    React.createElement("h2",{},"Nested Div Implementation h2")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"Nested Div Implementation h1"),
    React.createElement("h2",{},"Nested Div Implementation h2")])]
)

const rootdom=ReactDOM.createRoot(document.getElementById("root"));
rootdom.render(parent);