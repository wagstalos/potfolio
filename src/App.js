import React from 'react';
import './App.css';

import Portfolio from './components/portfolio';
import Bio from './components/bio';

function App() {
 return(
   <>

    <Bio/>
    <h1 className="text-center">Projetos</h1>
    <Portfolio/>

   </>
 )

}

export default App;