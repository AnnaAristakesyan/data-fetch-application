import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignIn from './pages/SignIn/SignIn';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="home/*" element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
    </Provider>  
  );
}

export default App;
