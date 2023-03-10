import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../Components/meetups/NewMeetUpForm";

function NewMeetUpsPage() {
    const history = useHistory();//Used for routing and this stores the browser history i.e the pages loaded.
    function handleAddMeetup(meetupData) {
        debugger;
        //by default fetch sends a GET request.
        fetch('http://localhost:5000/meetups', //'https://react-getting-started-48dec-default-rtdb.firebase.io/meetups.json'
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then(()=>{
            history.replace('/');
        }); 
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetUpForm onAddMeetupValue={handleAddMeetup}></NewMeetUpForm>
    </section>
}

export default NewMeetUpsPage;