import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
    const {id} = useParams()
    const [cardDataa, setCard] = useState();

    const [cardData,setCardData] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setCardData(data))
    },[])

    useEffect(() => {
        const findCard = cardData?.find((card) => card.id == id);
        setCard(findCard);
      }, [id, cardData]);
    console.log(cardDataa);

    const {name,image,long_description

    } = cardDataa || {}

    
    // const price = cardData[0].price
    // const short_description = cardData[0].short_description

    const handleBook = () => {
      swal("Confirmed!", "You booking this event", "success");
    }
    

    return (
    <div className="card mt-10 bg-base-100 lg:ml-[325px] lg:w-[750px] h-[400px] shadow-xl">
  <figure className="px-10  pt-20">
    <img src={image} alt="" className="rounded-2xl w-[500px] h-[250px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className=" text-2xl font-bold card-title">{name}</h2>
    <p>{long_description}</p>
    <div className="card-actions">
      <button onClick={handleBook} className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default Details;