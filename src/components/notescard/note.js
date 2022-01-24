import { useParams } from "react-router";
import { useStateContext } from "../../contexts/index";
import { notesHandler } from "../axios";
import "./note.css";

export function Notes() {
  const {
    state: { note, notesFolder },
    dispatch
  } = useStateContext();
  console.log({ notesFolder });
  const { videoId } = useParams();
  return (
    <div className="notes-container">
      <div style={{ borderBottom: "2px solid red" }}>
        <h3>Take Notes here</h3>
      </div>

      {notesFolder?.length !== 0 &&
        notesFolder.map((notesTaken) => {
          return (
            <div className="notes-child">
              {notesTaken}
              <button
                className="btn-remove"
                onClick={(e) =>
                  notesHandler(e, videoId, notesTaken, dispatch, "DELETE")
                }
              >
                x
              </button>
            </div>
          );
        })}
      <div className="form-container">
        <form
          onSubmit={(event) => notesHandler(event, videoId, note, dispatch)}
        >
          <input
            value={note}
            onChange={(event) =>
              dispatch({
                type: "SET_NOTE_CONTENT",
                payload: event.target.value
              })
            }
            className="notes-input"
            type="text"
            placeholder="Key points to be noted"
          />
        </form>
      </div>
    </div>
  );
}
