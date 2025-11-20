import { Bookmark } from "lucide-react";

const card = (props) => {


  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
            <img src={props.Logo} alt="" />
            <button>
              Save <Bookmark className="icon" />
            </button>

          </div>

          <div className="center">
            <h3>{props.Company} <span>{props.datePosted}</span></h3>
            <h2>{props.Post}</h2>
            <div className='tag'>
              <h4>{props.Tag}</h4>
              <h4>{props.Tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className='tag2'>
            <h3>{props.Pay}</h3>
            <p>{props.Location}</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>

    </div>
  )
}

export default card
