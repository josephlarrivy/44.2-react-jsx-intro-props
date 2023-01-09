const Person = (props) => {
    let msg;
    if (props.age < 18) {
        msg = "you are not old enough to vote"
    } else if (props.age >= 18) {
        msg = "please go vote"
    }

    let abbreviatedName;
    if (props.name.length <= 7) {
        abbreviatedName = props.name
    } else {
        let name = props.name;
        abbreviatedName = name.slice(0,6)
    }

    return (
        <div>
            <h2>name: {abbreviatedName} - age: {props.age}</h2>
            <p>{msg}</p>
            <h4>hobbies:</h4>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>

            <hr></hr>
        </div>
    );
}