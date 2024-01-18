
{/* <div id =root>
<h1> hello world form react</h1>
</div>
*/}
// const heading =React.createElement("h1" ,{ id:"nameid"} ,"hello world from React")
// const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading) 
// console.log(heading) // heading-- js object

{/* <div id =root>
<div id=parent>
<div id child>
    <h1>
hello i am nestetd structure of react but just 1 siblling
    </h1>
</div>
</div>
</div> */}

// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"hello i am nestetd structure of react but just 1 siblling")))
// const root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)
// console.log(parent)

{/* <div id =root>
<div id=parent>
<div id child>
    <h1>
hello i am nestetd structure of react <h1>
    </h1>
      <h2>
hello i am nestetd structure of react <h2>
    </h2>
</div>
</div>
</div> */}

// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},[
// React.createElement("h1",{},"hello i am nestetd structure of react but just 1 siblling"),
// React.createElement("h2",{},"hello i am nestetd structure of react but just 1 siblling"),
// ])
// )
// const root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)
// console.log(parent)

{/* <div id =root>
<div id=parent>
<div id child>
    <h1>
hello i am nestetd structure of react <h1>
    </h1>
      <h2>
hello i am nestetd structure of react <h2>
    </h2>
</div>
<div id child2>
    <h1>
hello i am nestetd structure of react <h1>
    </h1>
      <h2>
hello i am nestetd structure of react <h2>
    </h2>
</div>
</div>
</div> */}
const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"hello i am nestetd structure of react but just 1 siblling"),
React.createElement("h2",{},"hello i am nestetd structure of react but just 1 siblling"),
]),React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"hello i am nestetd structure of react but just 1 siblling"),
    React.createElement("h2",{},"hello i am nestetd structure of react but just 1 siblling"),
    ])

])
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
console.log(parent)