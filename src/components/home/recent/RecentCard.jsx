import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { list } from "../../data/Data";

export default function RecentCard({ location }) {
  // var { location } = useParams();
  const [List, setList] = useState([]);
  useEffect(() => {
    async function getRooms() {
      let response;
      if (location === "" || location===undefined) {

        response = await fetch("http://localhost:4000/api/rooms");
      } else {
        response = await fetch(`http://localhost:4000/api/room/${location}`);
      }
      const data = await response.json();
      setList(data);
    }
    getRooms();
  }, [location]);
  return (
    <>
      <div className="content grid3 mtop">
        {List.map((val, index) => {
          console.log(val)
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <a className="location" href="Login">
                  <div>
                    <button className="btn2">{price}</button>{" "}
                    <label htmlFor="">/sqft</label>
                  </div>
                </a>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// const RecentCard = () => {
//   return (
//     <>
//       <div className='content grid3 mtop'>
//         {list.map((val, index) => {
//           const { cover, category, location, name, price, type } = val
//           return (
//             <div className='box shadow' key={index}>
//               <div className='img'>
//                 <img src={cover} alt='' />
//               </div>
//               <div className='text'>
//                 <div className='category flex'>
//                   <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
//                   <i className='fa fa-heart'></i>
//                 </div>
//                 <h4>{name}</h4>
//                 <p>
//                   <i className='fa fa-location-dot'></i> {location}
//                 </p>
//               </div>
//               <div className='button flex'>
//               <a className="location" href="Login">
//                 <div>
//                   <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
//                 </div>
//                 </a>
//                 <span>{type}</span>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default RecentCard
