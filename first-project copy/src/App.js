import './App.css';
import {useState} from 'react';
import Main from './BusinessComponent/Main.js';
import Topic from './BusinessComponent/Topic.js';
import Property from './BusinessComponent/Property.js';
import NotFound from './Component/NotFound.js';

import {BrowserRouter, Routes, Route} from'react-router-dom';

function App() {
  const title ='React';
  const [topics, setToipcs] = useState([
    {id: 1, title: 'html', body:"html is ..."},
    {id: 2, title: 'javascript',  body:"javascript is ..."},
    {id: 3, title: 'css', body:"css is ..."},
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main title={title} topics={topics}/>}/> 
          <Route path='/topic/:id' element={<Topic title={title} topics={topics}/>}/>
          <Route path='/property' element={<Property title={title} topics={topics}/>}/>
          <Route path='/property/:id' element={<Property title={title} topics={topics}/>}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
