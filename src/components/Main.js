import bin from "../images/bin.png";
import magnifier from "../images/magnifier.png";

const Main = ({ onDeleteNote, activeNote, onUpdateNote }) => {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
    });
  };

  if (!activeNote)
    return (
      <div className="app-main">
        <div className="search">
          <input
            type="text"
            placeholder="Search by title"
            className="search-input"
          />
          <img src={magnifier} alt="search" style={{cursor: 'pointer'}} />
        </div>

        <div className="no-active-note">No Active Note</div>
      </div>
    );

  return (
    <div className="app-main">
      <div className="search">
        <input
          type="text"
          placeholder="Search by title"
          className="search-input"
        />
        <img src={magnifier} alt="search" style={{cursor: 'pointer'}} />
      </div>
      <div className="app-main-note-edit">
        <div className="main-title-block">
          <p>Title</p>
          <img
            src={bin}
            alt="Delete"
            height={50}
            width={41}
            onClick={() => onDeleteNote(activeNote.id)}
            style={{cursor: 'pointer'}}
          />
        </div>
        <input
          type="text"
          id="title"
          placeholder="Note title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <p>Description</p>
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
        <div className="app-buttons">
          <button onClick={onUpdateNote} className="button-new-save">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
