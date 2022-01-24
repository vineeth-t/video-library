import axios from "axios";
import { API } from "./axios.serverRequest";

export async function getNotesFromDB(dispatch, videoId) {
  try {
    const {
      data: {
        response,
        notesFolder: { notes }
      }
    } = await axios.get(`${API}/notes/${videoId}`);
    console.log(response, notes);
    if (response) {
      dispatch({ type: "SET_NOTES", payload: notes });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: "TOAST", payload: "Refresh the Page" });
  }
}
export async function notesHandler(e, videoId, note, dispatch, flag) {
  e.preventDefault();
  // IF NOTES FOR A PARTICULAR VIDEO IS ALREADY PRESENT THEN WE WILL ADD TO IT DIRECTLY
  const {
    data: {
      response,
      notesFolder: { notes }
    }
  } = await axios.post(`${API}/notes/${videoId}`, { note, flag });
  console.log(response, notes);
  if (response) {
    dispatch({ type: "SET_NOTES", payload: notes });
  }
}

export async function deleteNotesByIndex(videoId, notesIndex, dispatch) {
  const {
    data: { response }
  } = await axios.delete(`${API}/notes/${videoId}/${notesIndex}`);
  console.log("s", { response });
  dispatch({ type: "SET_NOTES", payload: response });
}
