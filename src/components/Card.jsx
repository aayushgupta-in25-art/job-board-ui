import React from "react";
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="Card">
      <div className="top">
        <img
          src={props.brandLogo}
          alt="logo"
        />
        <button>
          Save <Bookmark color="#111"/>
        </button>
      </div>

      <div className="center">
        <h3>
          {props.name}<span>{props.days}</span>
        </h3>
        <h2>{props.designation}</h2>
        <div>
          <h4>{props.time}</h4>
          <h4>{props.position}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <div>
            <h3>${props.salary}</h3>
            <p>{props.city}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
