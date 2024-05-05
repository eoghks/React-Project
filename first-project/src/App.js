import logo from './logo.svg';
import './App.css';

//Component
function Header() {
  return (
    <header>
      <h1><a href="/">WEB</a></h1>
    </header>
  )
}

function Nav(){
  return (
    <nav>
      <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">javascript</a></li>
        <li><a href="/read/3">css</a></li>
      </ol>
    </nav>
  )
}

function Article(){
  return (
    <article>
      <h2>Welcom</h2>
      Hello, WEB
    </article>
  )
}
//className = class를 의미 ==> css사용
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Article />
      </div>
  );
}

export default App;
