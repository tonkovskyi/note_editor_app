const Sidebar = ({ notes, onAddNote, activeNote, setActiveNote }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <button>Title ⇅</button>
        <button>Date ⇅</button>
      </div>
      <div className="app-buttons">
        <button onClick={onAddNote} className="button-new-save">
          + New
        </button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div key={note.id} className="app-sidebar-note">
            <div
              className={`sidebar-note-title ${
                note.id === activeNote && "active"
              }`}
              onClick={() => setActiveNote(note.id)}
            >
              <strong className="note-title">{note.title}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
