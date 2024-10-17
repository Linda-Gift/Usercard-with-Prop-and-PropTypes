import PropTypes from "prop-types";

function Usercard(props){

    return(
        <div className="card-container">
            <div className="topbackground">

            </div>
            <div className="profile-pic">
                <img src="./src/assets/lady.jpeg" alt="profile image" />
            </div>
            <div className="name-and-age">
                <div className="name">
                    <p>{props.Username}</p>
                </div>
                <div className="age">
                    <p>{props.Age}</p>
                </div>
            </div>

            <div className="occupation">
                <p>{props.Occupation}</p>
            </div>

            <div className="buttons">
                <div className="btn1">
                    <button>
                        Follow
                    </button>
                </div>

                <div className="btn2">
                    <button>
                        Message
                    </button>
                </div>
            </div>
        </div>
    )
}

Usercard.propTypes = {
    Username : PropTypes.string.isRequired,
    Age : PropTypes.number.isRequired,
    Occupation : PropTypes.string.isRequired
}

Usercard.defaultProps = {
    Username : "Enter Username",
    Age : "Enter a Number here, that is your age",
    Occupation : "This area is for what you do for a living"
}

export default Usercard