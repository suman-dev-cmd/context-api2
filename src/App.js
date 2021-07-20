import React, { createContext } from 'react'
import ComA from './ComA'

const Name = createContext();
const Title = createContext();
const App = () => {
  return (
    <div>
      <Name.Provider value={'suman'}>
        <Title.Provider value={'jana'}>
          <ComA />
        </Title.Provider>
      </Name.Provider>
    </div>
  )
}
export default App;
export {Name,Title};

