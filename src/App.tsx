import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Home from './Home';
import './assets/css/fonts.css';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
