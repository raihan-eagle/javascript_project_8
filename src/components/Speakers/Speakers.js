import React, { useEffect, useState } from 'react';
import Speaker from '../../Speaker/Speaker';
import List from '../List/List';
import './Speakers.css'

const Speakers = () => {

    const [speaker,setSpeaker] = useState([])

    const [list, setList] = useState([])

    useEffect(()=>{
        fetch('./speaker.JSON')
        .then(res=>res.json())
        .then(data=>setSpeaker(data))
    },[])

    const handleSpeakerAdd = (speaker)=>{
        const newList = [...list, speaker];
        setList(newList)
    }
    
    return (
        <div className='speaker-container'>
            <div className="speaker-details">
                {
                    speaker.map(speaker=><Speaker 
                        speaker={speaker}
                        handleSpeakerAdd={handleSpeakerAdd}
                        key={speaker.key}></Speaker>)
                }
            </div>
            <div className="speaker-list">
                <List
                list={list}></List>
            </div>
        </div>
    );
};

export default Speakers;