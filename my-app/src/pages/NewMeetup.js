import {useNavigate} from 'react-router-dom';
import NewMeetupform from "../components/meetups/NewMeetupform";


function NewMeetupPage(){
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-96c18-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate("/", {replace:true})
        }); 


        
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupform onAddMeetup={addMeetupHandler} />
    </section>;
}

export default NewMeetupPage;