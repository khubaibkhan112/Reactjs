import React from "react";

const Mystatment = () => {
    // return <h1>Hello</h1>;
    //to create component without jsx:-
    return React.createElement('div',
        {
            id: 'newdiv',
            className: 'Myfirstclass',
            'div-count': '1'
        },
        React.createElement('h1', null, 'Hello khan this rendered without jsx')
    );
};
export default Mystatment;