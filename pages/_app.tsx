import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '@/store/store';
import GalleryManager from '../components/Gallery/GalleryManager';

export default function App() {
  return (
    <Provider store={store}>
      <div className="pb-5 max-w-screen-xl mx-auto w-3/5">
        <GalleryManager />
      </div>
    </Provider>
  );
};
