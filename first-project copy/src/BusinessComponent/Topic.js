import Main from './Main.js';
import Article from '../Component/Article.js';
function Topic(props){
  return (
    <div>
        <>
           <Main title={props.title} topics={props.topics}/>
           <Article topics={props.topics} />
        </>
    </div>
  )
}

export default Topic;