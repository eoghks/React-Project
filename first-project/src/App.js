import logo from './logo.svg';
import './App.css';

//Component
//props = argument
function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={(e) => {
        e.preventDefault();//a tag default action not work
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )//{}=> var를 쓸때 필수
}

function Nav(props){
  /*
  const lis =[];
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }*/
  //used map function
  const list = props.topics.map((t) => {
      return <li key={t.id}>
              <a id ={t.id} href={'/read/'+t.id} onClick ={(e)=>{
                e.preventDefault();
                props.onChangeMode(e.target.id);//e.target = event를 발생시킨 tag (여기서는 a)
              }}>{t.title}</a>
              </li>
      });

  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}
//className = class를 의미 ==> css사용
//const => 다른 함수에서 수정 불가
function App() {
  const topics = [
    {id: 1, title: 'html', body:"html is ..."},
    {id: 2, title: 'javascript',  body:"javascript is ..."},
    {id: 3, title: 'css', body:"css is ..."},
  ];

  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        alert('Header changed');
      }}/>
      <Nav topics={topics} onChangeMode={(id) =>{
        alert(id);
      }}/>
      <Article title="Welcom" body="Hello, React"/>
      </div>
  );
}

export default App;