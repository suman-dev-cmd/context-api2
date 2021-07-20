import React from 'react'
import { Name,Title } from './App'
const ComC = () => {
    return (
        <div>
            <Name.Consumer>
                {(name)=>{
                    return(
                        <>
                         <Title.Consumer>
                            {(title)=>{
                                return <h1>My Name is {name} {title}</h1>
                            }}
                         </Title.Consumer>
                        </>
                    )
                }}
            </Name.Consumer>
        </div>
    )
}

export default ComC
