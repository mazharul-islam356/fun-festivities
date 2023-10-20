import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const Cards = ({data}) => {
    console.log(data);
   
    const {id,name,price,image,short_description} = data
    
    
  return (
    <div>
        
      {/* card-01 */}

    <div>

    <div className="card h-[500px] w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/XxC7rRv/create-youtube-thumbnail-and-banner-1b97.jpg"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short_description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={`/details/${id}`}>Click for Details</Link></button>
          </div>
        </div>
      </div>

    </div>

      

     
    </div>
  );
};

export default Cards;
