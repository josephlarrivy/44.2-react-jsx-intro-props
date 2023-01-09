const Tweet = (props) => {
    return (
        <div>
            <h1>Tweet</h1>
            <p>{props.username}</p>
            <p>{props.name}</p>
            <p>{props.date}</p>
            <p>{props.message}</p>
            <br></br>
        </div>
    )
}