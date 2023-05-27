import { Tittle } from "./App"
import logoImg from "./assets/react.svg";
import { MdMenu } from 'react-icons/md'

function App() {

  return (
    <>
      <img src={logoImg} className="menu" />
      
      <Tittle >Hello World! <MdMenu className="menu" /> </Tittle>
    </>
  )
}

export default App