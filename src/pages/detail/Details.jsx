import { useEffect, useState } from "react";

const Details = () => {

    const [cardData,setCardData] = useState([])
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res=>res.json())
        .then(data=>setCardData(data))
    },[])

    
    // const price = cardData[0].price
    // const short_description = cardData[0].short_description
    

    return (
        <div>
            {/* {console.log(cardData)} */}
        </div>
    );
};

export default Details;