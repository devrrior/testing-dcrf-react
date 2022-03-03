import ChatPage from './pages/ChatPage';
import CardUser from './components/CardUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<CardUser />} />
          <Route path='/chat/' element={<ChatPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
