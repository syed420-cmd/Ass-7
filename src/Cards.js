import React from "react";
import { useState } from "react";
import personsData from './Components/data.json'
import image1 from './assets/spagetty.png'
import image2 from './assets/pizza.jpg'
import image3 from './assets/chickensalad.png'
import clock from './assets/clock.png'
import cal from './assets/cal.jpg'
const images={
  1:image1,
  2:image2,
  3:image3,
  4:image1,
  5:image2,
  6:image1




}




const Cards = () => {
  const [cookingList, setCookingList] = useState([]);
  const [preparedList, setPreparedList] = useState([]);  
  const prepareItem = (person) => {
    setPreparedList([...preparedList, person]);
    setCookingList(cookingList.filter(p => p.id !== person.id));
  };

  const addToCookingList = (person) => {
    setCookingList([...cookingList, person]);
  };

  
  return (
    <>

       <div className="flex flex-col items-center justify-center">

      <h1 className="text-[#150B2B] text-[40px] font-bold px-[30px] mt-[50px]">
        Our Recipes
      </h1>
      <h1 className="text-[#150B2B] text-[16px] font-medium px-[30px] mt-[10px]">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. 
      </h1>
      <h1 className="text-[#150B2B] text-[16px] font-medium px-[30px]  ">
        Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </h1>
      </div>

      

      <div className="big_container mt-[50px] flex flex-row">
      <div className="card-container grid grid-cols-2 gap-3 mt-[20px] ">
        {personsData.map(person => (
          <div key={person.id} className="card h-[685px] w-[379px]  mt-[40px] border border-gray-300 rounded-md flex flex-col items-center  ">
            <img src={images[person.id]} alt={person.name} className="w-[331px] h-[200px] object-fill rounded-[16px] mt-[10px] " />
            <div className="mb-[30px]">
               <h1 className="text-[20px] font-bold text-[#282828] mt-[25px] ml-[15px] px-[10px]"> {person.name}</h1>
               <h1 className="text-[16px] text-[#282828] mt-[10px] ml-[15px] px-[10px]">{person.des}</h1> 
               
              
            </div>
            <h1 className="text-[18px] text-[#282828] font-bold">Ingrediants 6</h1>
             <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-start">
              {person.ingrediants.map((ingrediant, index) => (
                  <div className="" key={index}>
                   <div className="flex flex-row justify-center items-center mt-[25px]">
                   <div className="h-[7px] w-[7px] rounded-[50%] bg-[#282828] mr-[5px]"></div>
                    <h1 className="text-[18px] text-[#878787] leading-3">{ingrediant}</h1>
                   </div>
                  
                    
                    </div>
                ))}
                </div>
             </div>  
             <div className="flex flex-row justify-center items-center mt-[30px]">
               <div className="flex flex-row justify-center items-center">
                <img className="w-[15px] h-[15px]" src={clock} alt=""></img>
                <h1 className="text-[#282828] text-[16px] ml-[10px]">30 mins</h1>
                </div>       
               <div className="flex flex-row justify-center items-center ml-[20px]">
               <img className="w-[15px] h-[15px]" src={cal} alt=""></img>
                <h1 className="text-[#282828] text-[16px] ml-[10px]">500 cal</h1>
                </div> 

             </div>
            <button  onClick={() => addToCookingList(person)}  className="w-[170px] h-[49px] rounded-[50px] bg-[#0BE58A] mt-[20px] text-gray-900">Want To Cook</button>
          </div>
        ))}
      </div>
      <div className="ml-[30px] mt-[70px] border border-gray-200 rounded-[15px] flex flex-col items-center px-[50px]">
      <h2 className="text-[24px] text-[#282828] font-bold">Cooking List: {cookingList.length}</h2>
      <table>
        <thead>
          <tr className="flex flex-row space-x-[30px]">
          <th className="text-[16px] font-medium text-[#878787]">Serial</th>
            <th className="text-[16px] font-medium text-[#878787]">Name</th>
            <th className="text-[16px] font-medium text-[#878787]">Time</th>
            <th className="text-[16px] font-medium text-[#878787]">Calories</th>
           
          
          </tr>
        </thead>
        <tbody>
          {cookingList.map((person, index) => (
            <tr className="flex flex-row justify-center items-center space-x-[30px] space-y-[10px]" key={person.id}>
              <td>{index + 1}</td>
              <td className="">{person.name}</td>
              <td>{person.time}</td>
              <td>{person.cal}</td>
              
              <td><button className="w-[115px] h-[38px] rounded-[15px] bg-[#0BE58A]" onClick={() => prepareItem(person)}>Prepare</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-[24px] text-[#282828] font-bold">Prepared List: {preparedList.length}</h2>
      <table>
        <thead>
          <tr className="flex flex-row space-x-[30px]">
            <th className="text-[16px] font-medium text-[#878787]">Serial Number</th>
            <th className="text-[16px] font-medium text-[#878787]">Name</th>
            <th className="text-[16px] font-medium text-[#878787]">Time</th>
            <th className="text-[16px] font-medium text-[#878787]">Calories</th>
       
          </tr>
        </thead>
        <tbody>
          {preparedList.map((person, index) => (
            <tr className="flex flex-row space-x-[50px]" key={person.id}>
              <td>{index + 1}</td>
              <td>{person.name}</td>
              <td>{person.time}</td>
              <td>{person.cal}</td>
             
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      </div>
     
    </>
  );
};

export default Cards;
