import React,{useContext} from 'react'
import ComC from './ComC'
import { Name,Title } from './App'

const ComB = () => {
    const fname = useContext(Name);
    const title = useContext(Title);
    return (
        <div>
            <h1>My Name is {fname} {title}</h1>
            {/* <ComC /> */}
        </div>
    )
}

export default ComB
