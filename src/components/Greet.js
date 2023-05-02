import React from 'react'

// function Greet(){
//     return <h1>Hello Hema</h1>
// }

// ES6 Arrow functions (rewrite)

// const Greet = (props) => { 
   // console.log(props)
//     return(
//         <div>
//         <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//         {props.children}
//         </div>
//     )
// }


// destructing props with parameter.

// const Greet = ({name,heroName}) => { 
//     return(
//         <div>
//         <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }

// destructing props with function body.

const Greet = props => { 
    const {name,heroName}=props
    return(
        <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

export default Greet;