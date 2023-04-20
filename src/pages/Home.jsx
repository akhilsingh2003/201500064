
import React, { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const [Train, setTrain] = useState([]);

    const fetchTrains = async () => {
      const response = await axios.get("http://localhost:3000/trains");
      return setTrain(response.data);
    }
      useEffect(() => {
        fetchTrains();
      }, []);
  return (
    <div>
       <div className="container m-auto mt-5 table-responsive   table-responsive-sm table-responsive-md ">
          <table className="table table-dark table-striped">
            <thead className=" text-success fs-4">
              <tr>
              <th scope="col">Sr.No</th>
                <th scope="col">Train name</th>
                <th scope="col">Train Number</th>
                <th scope="col">Departure Time</th>
                <th scope="col">Seat Available</th>
                <th scope='col'>Delayed by</th>

              </tr>
            </thead>
          
            <tbody>
              {Train.map((train,index) => (
                <tr>
                <td>{index+1}</td>
                  <td>{train.trainName}</td>
                  <td>{train.trainNumber}</td>
                  <td>{train.departureTime}</td>
                  <td>{train.seatAvailable}</td>
                  <td>{train.price}</td>
                </tr>
              ))}
             
            </tbody>
          </table>
      </div>
      </div>
  )
}

export default Home
