import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../stateManager/store';
import GalleryManager from '../components/Gallery/GalleryManager';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <div className="pb-5 max-w-screen-xl mx-auto w-3/5">
                <GalleryManager />
            </div>
        </Provider>
    )
}
