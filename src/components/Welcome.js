import React, { Component } from 'react'

// class Welcome extends Component {
//     render(){
//         return <h1>welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }

// Destructing props in state (class)
class Welcome extends Component {
    render(){
        const {name,heroName}=this.props
        //const {state1, state2}=this.state
        return <h1>welcome {name} a.k.a {heroName}</h1>
    }
}



export default Welcome