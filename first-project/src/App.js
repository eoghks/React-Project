import './App.css';
import {useState} from 'react';
import Header from './Header.js';
import Article from './Article.js';
import Nav from './Nav.js';
import Create from './Create.js';
import Update from './Update.js';
//className = class를 의미 ==> css사용
//const => 다른 함수에서 수정 불가
function App() {
  const [mode, setMode] = useState('WELCOME');//0번째 상태의 데이터, 1번째는 상태를 변경할때 사용하는 함수
  const [id , setId] = useState(null);
  const [nextId , setNextId] = useState(4);
  const [topics, setToipcs] = useState([
    {id: 1, title: 'html', body:"html is ..."},
    {id: 2, title: 'javascript',  body:"javascript is ..."},
    {id: 3, title: 'css', body:"css is ..."},
  ]);

  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcom" body="Hello, WEB"/>
  } else if(mode === 'READ') {
    const topic = topics.find((t) => t.id === id);
    content =<Article title={topic.title} body={topic.body}/> 
    contextControl =
    <li>
      <a href={"/update/" + id} onClick={(e)=>{
        e.preventDefault();
        setMode('UPDATE');
      }}>Update
      </a>
    </li>;
  } else if(mode === 'CREATE') {
    content =<Create onCreate={(title, body)=>{
      const newTopic = {id: nextId, title: title, body: body};
      const newTopics =[...topics];
      newTopics.push(newTopic);
      setToipcs(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}/>
  } else if(mode === 'UPDATE') {
    const topic = topics.find((t) => t.id === id);
    content =<Update title = {topic.title} body = {topic.body} onUpdate={(title, body) => {
      const newTopics =[...topics];
      const topic = newTopics.find((t) => t.id === id);
      topic.title = title;
      topic.body = body;
      setToipcs(newTopics);
      setMode('READ');
    }}></Update>
  }

  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        setMode('WELCOME');
      }}/>
      <Nav topics={topics} onChangeMode={(id) =>{
        setMode('READ');
        setId(Number(id));//tag의 속성으로 넘긴건 문자이다.
      }}/>
      {content}
      <ul>
        <li>
          <a href="/create" onClick={(e)=>{
            e.preventDefault();
            setMode('CREATE');
            }}>Create
          </a>
        </li>
        {contextControl}
      </ul>
      </div>
  );
}

export default App;
