            
import profilePic from "./assets/ai-generated-8284506_640.jpg";

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="This is an image" />
            <h2 className="card-title">Todd Chaswe</h2>
            <p className="card-text">Homeless Loser Bum</p>


        </div>
    );
}

export default Card