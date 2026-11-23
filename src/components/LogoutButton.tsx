import { LogOut } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function LogoutButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const setRole = useAppStore(state => state.setRole);

  if (location.pathname === '/login') return null;

  return (
    <button
      className="logout-button"
      type="button"
      onClick={() => {
        setRole('Student');
        navigate('/login');
      }}
      title="Log out and return to sign in"
    >
      <LogOut size={16} />
      <span>Log out</span>
    </button>
  );
}
