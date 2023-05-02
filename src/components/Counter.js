import React, {Component} from 'react'




class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increaseCount(){
        // this.state.count=this.state.count+1

        // this.setState({   // two parameters - count,callBack
        //     count:this.state.count
        // },
        // () => {console.log('callback value',this.state.count)})

        this.setState((prevState,props) => ({
            count:prevState.count+1
        }))
       
        console.log(this.state.count) //don't use this to get update after setState value
    }

    increaseFive(){
        this.increaseCount()
        this.increaseCount()
    }

    render(){
        return (
            <div>count-{this.state.count}
            <button onClick={() => this.increaseFive()}>IncreaseCount</button>
            </div>
        )
    }
}


export default Counter