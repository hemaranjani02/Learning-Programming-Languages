import React from 'react'

function NameList(){
    const names=['Hema','Riley','Mingi']
    const nameList = names.map(a => <h2>{a}</h2>) //jsx
    return(
        <div>{nameList}</div>
    )
}

export default NameList