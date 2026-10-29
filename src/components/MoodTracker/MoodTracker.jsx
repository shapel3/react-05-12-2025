import {useState, useEffect} from 'react';

const STORAGEKEY = 'moodHistory'
const moods = ["😄", "🙂", "😐", "😔", "😡"];
const MoodTracker = () => {
    const [selectedMood, setSelectedMood] = useState('');
    const [moodHistory, setMoodHistory] = useState([]);
    const chooseMood = (mood) => {
        setSelectedMood(mood);
        setMoodHistory((prevHistory)=>([...prevHistory,selectedMood]))
    }
    const showMood = (mood) => <span key={mood} onClick={()=>chooseMood(mood)}>{mood}</span>
    useEffect(() => {
       localStorage.setItem(STORAGEKEY , JSON.stringify(moodHistory)  )
    }, [selectedMood]);
    return (
        <section>
            <h2>How are you today?</h2>
            <div>{moods.map(showMood)}</div>
            <p>Your choice:{selectedMood}</p>
        </section>
    );

}

export default MoodTracker;
