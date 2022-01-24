import { useStateContext } from "../../contexts";
import { AddOrRemoveFromPlaylist } from "../axios";
export function PlaylistModal({ videoId }) {
  const {
    state: { playlists },
    dispatch
  } = useStateContext();
  return playlists.map(({ playListName, _id }) => (
    <label style={{ color: "black" }}>
      <input
        type="checkbox"
        checked={checkBoxChanger(playlists, _id, videoId)}
        onChange={() =>
          AddOrRemoveFromPlaylist(
            playlists,
            _id,
            playListName,
            videoId,
            dispatch
          )
        }
      />
      <span>{playListName}</span>
    </label>
  ));
}

export function checkBoxChanger(playlists, playListId, videoId) {
  console.log(playlists, playListId, videoId);
  const playlistOpened = playlists.find(
    (playlist) => playlist._id === playListId
  );
  return playlistOpened.listOfVideos.some(({ video }) => video._id === videoId)
    ? true
    : false;
}
