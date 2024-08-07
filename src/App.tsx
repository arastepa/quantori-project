import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import '@/app.module.css';
import '@/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
