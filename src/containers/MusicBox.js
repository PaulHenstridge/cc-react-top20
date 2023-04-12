import { useState, useEffect } from 'react'
import SongList from "../components/SongList";

const MusicBox = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs()
    }, [])

    const getSongs = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(data => setSongs(data.feed.entry))
    }

    console.log(songs)

    return (<SongList songs={songs} />);
}

export default MusicBox;