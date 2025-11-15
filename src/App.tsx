import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Home from './Home';
import NotFoundPage from '@/components/page/NotFound.tsx';
import './assets/css/fonts.css';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <div className="flex flex-col h-screen">
                    <Navbar />
                    <div className="flex-1 overflow-auto">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
