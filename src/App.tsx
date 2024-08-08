import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import '@/app.module.css';
import '@/App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
