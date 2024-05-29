import { useState } from "react";
import { useParams } from 'react-router-dom';
function Property(props){
  var id = Number(useParams().id);
  const topic = props.topics.find( t => t.id === id);
  var mode = topic === undefined? "Create": "Update";
  const [title, setTitle] = useState(topic != null ? topic.title: "");
  const [body, setBody] = useState(topic != null ? topic.body: "");
  return (
    <>
      <h2>{mode}</h2>
      <form onSubmit={e => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" value = {title} onChange={(e) => {setTitle(e.target.value)}}/></p>
        <p><textarea name="body" placeholder="body" value = {body} onChange={(e) => {setBody(e.target.value)}}></textarea></p>
        <p><input type="submit" className="ok" value={mode}/></p>
      </form>
    </> 
  );
}

export default Property;