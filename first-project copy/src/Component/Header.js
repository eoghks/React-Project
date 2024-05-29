import {Link} from 'react-router-dom';
function Header(props) {
  return (
    <header>
      <Link to="/" className="noUnderline"><h1 kety={props.title}>{props.title}</h1></Link>
    </header>
  )
}

export default Header;