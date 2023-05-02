import React from 'react'

//JSX version of Hello component
// const Hello = () => { return (<div><h1>hello Hema1</h1></div>)}

//without JSX
const Hello = () => {
    return React.createElement(
        'div', 
        {id:'hello', className:'dummy'}, 
        React.createElement('h1', null, 'Hey')) // React library 3 params Html Element, Optional properties(object key pair values), Childern for div tag
}

export default Hello