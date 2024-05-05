
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

export default Nav;