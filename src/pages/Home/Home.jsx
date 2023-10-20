/* eslint-disable react/jsx-key */

import { useLoaderData } from "react-router-dom";
import banner from "../../assets/img/banner.jpg";
import Cards from "./card/Cards";
import Services from "./services/Services";
import OnlineRequ from "./onlineRequ/OnlineRequ";



const Home = () => {
  const data = useLoaderData()
  

 
  return (
    <div>
      <div>
        <div>
          <img
            className="relative bg-cover w-[1392px] h-[600px]"
            src={banner}
            alt=""
          />

          <div className="absolute text-center top-72 ml-[400px] ">
            <p className="text-orange-400 text-5xl font-bold">We Create</p>
            <p className="text-white text-5xl font-bold">You Celebrate</p>
            <p className="bottom-90 text-xl text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              culpa.
            </p>
          </div>
        </div>



        <div className="bg-orange-400 rounded-lg w-full h-20">
          <h2 className="text-2xl mt-8">See Our Services</h2>
        </div>





       
       <div className="grid gap-6 grid-cols-3 ml-14 mt-4 justify-center">
         {data.map(user=><Cards key={user.id} data={user}></Cards>)}
       </div>
    
    
      <Services></Services>
      <OnlineRequ></OnlineRequ>


      </div>
      
    </div>
  );
};

export default Home;
