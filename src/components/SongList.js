import Song from "./Song";

const SongList = ({ songs }) => {
    return (<>
        {songs.map((song, index) => <Song song={song} index={index} />)}

    </>);
}

export default SongList;