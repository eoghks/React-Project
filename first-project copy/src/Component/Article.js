import { useParams } from 'react-router-dom';
function Article(props){
  const id = Number(useParams().id);
  const topic = props.topics.find( t => t.id === id);
  return (
    <article>
      <h2>{topic.title}</h2>
      {topic.body}
    </article>
  )
};

export default Article;