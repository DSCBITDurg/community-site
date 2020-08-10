import React, {useState} from 'react';
import cx from 'classnames';


//components
import EventCard from '../components/EventCard/EventCard';
// import css file
import styles from './EventsPage.module.css';

function EventsPage() {
    const fakeEvents = [
        {
            img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Event 1',
            desc: 'LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ',
            date: '9th august'
        },
        {
            img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Event 1',
            desc: 'LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ',
            date: '9th august'
        },
        {
            img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Event 1',
            desc: 'LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ',
            date: '9th august'
        },
        {
            img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Event 1',
            desc: 'LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ',
            date: '9th august'
        },
        {
            img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Event 1',
            desc: 'LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ',
            date: '9th august'
        },
        {
            img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Event 1',
            desc: 'LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ',
            date: '9th august'
        },
        {
            img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            title: 'Event 1',
            desc: 'LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ',
            date: '9th august'
        },
    ];
    const [activeButtons,setActiveButtons] = useState({upcoming_events:true,past_events:false,gallery:false});
    const handleButtonClick = (e) => {
        const name = e.target.name;
        console.log('name',name);
        const obj = {};
        Object.keys(activeButtons).forEach((key) => {
            if(key === name){

                obj[key] = true;
            }
            else{
                obj[key] = false;
            }
        });
        console.log(obj);
        setActiveButtons(obj);
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <button onClick={handleButtonClick} className={cx(styles.button, { [styles.active] : activeButtons.upcoming_events} )} name="upcoming_events">Upcoming Events</button>
                <button onClick={handleButtonClick} className={cx(styles.button, { [styles.active] : activeButtons.past_events} )} name="past_events">Past Events</button>
                <button onClick={handleButtonClick} className={cx(styles.button, { [styles.active] : activeButtons.gallery} )} name="gallery">Gallery</button>
            </div>
            <div className={styles.events}>
                { activeButtons['upcoming_events'] &&
                    fakeEvents.map((event,index) => 
                        <EventCard img={event.img} title={event.title} desc={event.desc} date={event.date} key={index}/>
                    )
                }
                {
                    activeButtons['past_events'] &&
                    <h1>Past Events</h1>
                    
                }
                {
                    activeButtons['gallery'] &&
                    <h1>gallery</h1>
                }
            </div>
        </div>
    );
}

export default EventsPage;
