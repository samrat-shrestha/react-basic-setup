import MeetupItem from './MeetUpItem';
import classes from './MeetUpList.module.css'

function MeetUpList(props){
    return <ul className={classes.list}>
        {props.meetups.map((meetup)=>{
            return <MeetupItem key={meetup.id} 
            id={meetup.id} 
            image={meetup.image} 
            title={meetup.title} 
            description={meetup.description} 
            address={meetup.address}/>
        })}
    </ul>;
}

export default MeetUpList;