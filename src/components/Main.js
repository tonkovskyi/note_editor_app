import bin from "../images/bin.png";
import magnifier from "../images/magnifier.png";

const Main = ({ onDeleteNote, activeNote, onUpdateNote, notes }) => {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
    });
  };

  if (!activeNote)
    return <div className="no-active-note">List of notes is empty</div>;

  return (
    <div className="app-main">
      <div className="search">
        <input
          type="text"
          placeholder="Search by title"
          className="search-input"
        />
        <img src={magnifier} alt="search" />
      </div>
      <div className="app-main-note-edit">
        <div className="main-title-block">
          <p>Title</p>
          {notes.map((note) => (
          <img src={bin} alt="Delete" height={50} width={41} onClick={() => onDeleteNote(note.id)}/>
          ))}
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
          <button onClick={onEditField} className="button-new-save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
