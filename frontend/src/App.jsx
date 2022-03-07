import { AuthProvider } from './context/AuthProvider';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ProtectedRoute from './utils/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/chat/' element={<ChatPage />} />
            </Route>

            <Route path='/login/' element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
