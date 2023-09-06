import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../stateManager/store';
import GalleryManager from '../components/Gallery/GalleryManager';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <GalleryManager />
        </Provider>
    )
}
