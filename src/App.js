import React, {Suspense} from 'react'
import './custom.css';
import Loader from'./components/Loader'

const RocketButton = React.lazy(() => import("./components/RocketButton"))
const Home = React.lazy(() => import("./components/Home"))
const Search = React.lazy(() => import("./components/Search"))

function App() {
  return (
    <div class="container" id='all' style={{ width: '100%' }}>       
      <Suspense id='all' fallback={<Loader id='all' />}>
        <div class="row justify-content-center">
          
          <RocketButton/>

          <Home/>
          
          <Search/>

        </div>
      </Suspense>
    </div>
  );
}

export default App;
