const Song = ({ song, index }) => {
    return (
        <>
            <h1>No.{index + 1}</h1>
            <h2>{song.title['label']}</h2>

        </>
    )
}

export default Song;