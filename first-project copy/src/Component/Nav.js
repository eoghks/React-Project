
import {Link} from 'react-router-dom';
function Nav(props){
  const list = props.topics.map((t) => {
    const path = '/topic/' + t.id;
      return <Link to={path} key={t.id} className="noUnderline"><li>{t.title}</li></Link>
      });

  return (
    <nav>
      <ul>
        {list}
      </ul>
    </nav>
  )
}

export default Nav;