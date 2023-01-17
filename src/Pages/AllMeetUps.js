import { useEffect, useState } from "react";
import MeetUpList from "../Components/meetups/MeetUpList";

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [meetUpData, setMeetUpData] = useState([]);
  useEffect(()=>{
    setIsLoading(true);
    //if there is use of props here then we add that to the dependency array of useEffect().
    //fetch('http://localhost:5000/meetups') 
    fetch('https://medical-3391201-344414-default-rtdb.firebaseio.com/reactmeetups.json') 
    .then((response)=>{
      return response.json();
    }).then((data)=>{
      const meetups = []; 
      for(const key in data)
      {
        const meetup = {
          id:key,
          ...data[key] //spread operator
        };
        console.log(meetup);

        meetups.push(meetup);
      }
      setIsLoading(false);
      setMeetUpData(meetups);
    });
  }, []);

  if(isLoading)
  {
    return <section><h1>Loading.....</h1></section>
  }

    return <section>
        <h1>All MeetUps</h1>
        <MeetUpList meetups={meetUpData} />
    </section>
}

export default AllMeetupsPage;