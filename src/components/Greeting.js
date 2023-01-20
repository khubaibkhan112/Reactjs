import React from "react";
// function greet(){
//     return <h1>Hello, Khan</h1>;
// }
export const Greet = (props) => {
    return (
    <div>
    <h1>Hello ,{props.name} {props.lastname}</h1>
    {props.children}
    </div>
    );
};

//export default Greet;