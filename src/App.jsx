import { Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Paipan from './pages/Paipan';
import Jiefu from './pages/Jiefu';
import Xuyuan from './pages/Xuyuan';
import Zeji from './pages/Zeji';
import My from './pages/My';

// Routes where BottomNav should be hidden
const HIDE_NAV_PATHS = ['/xuyuan'];

export default function App() {
  const location = useLocation();
  const showNav = !HIDE_NAV_PATHS.includes(location.pathname);

  return (
    <div className="max-w-md mx-auto min-h-screen bg-rice-50 shadow-2xl relative overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paipan" element={<Paipan />} />
        <Route path="/qifu" element={<Jiefu />} />
        <Route path="/xuyuan" element={<Xuyuan />} />
        <Route path="/zeji" element={<Zeji />} />
        <Route path="/my" element={<My />} />
      </Routes>
      {showNav && <BottomNav />}
    </div>
  );
}
