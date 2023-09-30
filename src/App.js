// App
import { useSelector } from 'react-redux';
import './App.css';
import AppRouter from './components/navigation/AppRouter';

export default function App() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={isDark ? 'darktheme' : 'lighttheme'}>
      <AppRouter />
    </div>
  );
}
