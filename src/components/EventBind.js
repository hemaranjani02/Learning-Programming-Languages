import React, {Component} from "react"

class EventBind extends Component {
    constructor(props) {
     super(props)

     this.state = {
        message:'Hello'
     }

     this.changeMessage=this.changeMessage.bind(this) //constructor
    }
    // changeMessage(){ // render method, arrow functions
    //     this.setState({
    //      message:'good bye' //undefined in event handler, so event binding is necessary.
    //     })
    //     // console.log(this)
    // }

    changeMessage = () => { // class property
        this.setState({
            message:'good bye'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */} render method
                {/* <button onClick={() => this.changeMessage()}>Click</button> */} arrow functions
                {/* <button onClick={this.changeMessage}>Click</button> */} constructor
                <button onClick={this.changeMessage}>Click</button> class property
            </div>
        )
    }
}

export default EventBind