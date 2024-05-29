import Nav from '../Component/Nav.js';
import Header from '../Component/Header.js';
function Main(props){
  return (
    <div>
       <Header title={props.title}/>
       <Nav topics={props.topics}></Nav>
    </div>
  )
}

export default Main;