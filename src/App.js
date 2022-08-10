// import { State } from "./hooks/State";
// import { Effect} from './hooks/Effect'
import {Books} from './components/Books'

import { Context } from "./hooks/Context"; 

function App() {
  return <Context>
    <Books /> 
  </Context>
}

export default App;
