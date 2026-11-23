import { useState } from 'react';
import { ChevronDown, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import type { Role } from '../types/dental';

const rolePaths: Record<Role, string> = {
  Student: '/dashboard/student',
  Faculty: '/dashboard/faculty',
  HOD: '/dashboard/hod',
  Administrator: '/dashboard/admin'
};

export default function WorkspaceOptions() {
  const [open, setOpen] = useState(false);
  const role = useAppStore(state => state.role);
  const offline = useAppStore(state => state.offline);
  const setRole = useAppStore(state => state.setRole);
  const toggleOffline = useAppStore(state => state.toggleOffline);
  const navigate = useNavigate();

  const changeRole = (nextRole: Role) => {
    setRole(nextRole);
    navigate(rolePaths[nextRole]);
  };

  return (
    <div className="workspace-options">
      <button
        className="nav-item"
        type="button"
        aria-expanded={open}
        aria-controls="workspace-options-panel"
        onClick={() => setOpen(value => !value)}
      >
        <Settings />
        <span>Workspace options</span>
        <ChevronDown className="workspace-options-chevron" size={14} />
      </button>
      {open && (
        <section
          className="workspace-options-panel"
          id="workspace-options-panel"
          aria-label="Workspace options"
        >
          <div className="workspace-options-heading">
            <strong>Workspace options</strong>
            <button type="button" className="text-btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <label className="field-label" htmlFor="workspace-role">
            ACTIVE ROLE
          </label>
          <select
            id="workspace-role"
            className="field"
            value={role}
            onChange={event => changeRole(event.target.value as Role)}
          >
            <option>Student</option>
            <option>Faculty</option>
            <option>HOD</option>
            <option>Administrator</option>
          </select>
          <button
            className="workspace-offline-toggle"
            type="button"
            onClick={toggleOffline}
          >
            <span>Offline simulation</span>
            <strong>{offline ? 'On' : 'Off'}</strong>
          </button>
        </section>
      )}
    </div>
  );
}
