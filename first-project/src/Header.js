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

export default Header;