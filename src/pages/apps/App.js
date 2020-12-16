import Router from '../route/router';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
