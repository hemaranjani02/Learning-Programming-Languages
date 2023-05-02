import React, {Component} from 'react'

class UserGreetings extends Component{
    constructor (props)
    {
        super(props)
        this.state={
            isLoggedin:false
        }
    }
    render()
    {
        if (this.state.isLoggedin){
            return(
                <div>
                    <div>welcome</div>
                </div>
            )
        }
        else {
            return(
                <div>
                    <div>Guest</div>
                </div>
            )
        }
    }
}

export default UserGreetings