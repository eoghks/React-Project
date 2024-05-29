import Main from './Main.js';
import Write from '../Component/Write.js';
function Topic(props){
  return (
    <div>
        <>
          <Main title={props.title} topics={props.topics}/>
          <Write topics={props.topics} />
        </>
    </div>
  )
}

export default Topic;