import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id,message: doc.data()})))
    });
  
  },[])
  useEffect(() =>{ 
    setUsername(prompt('please enter your name'));


  },[] )

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
     setInput('');


   }
   
 
  return (
    <div className="App">
      <img src="https://www.macworld.co.uk/cmsdata/features/3654385/messages_ios_9_icon_800home_thumb1200_4-3.jpg" width="125" height="90"/>
      <h2>Welcome {username}</h2>
      <form className="app__form">
      <FormControl className="app__formControl">
        
        <Input className="app__input" placeholder='type here' value={input} onChange={event => setInput(event.target.value )} />
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
           <SendIcon />
        </IconButton>






        
      </FormControl>
      
     
      </form>

      <FlipMove>
      {
        messages.map(({id, message}) =>(
          <Message key={id} username={username} message={message}/>
          
        ))
      }

      </FlipMove>
      
      
     
    </div>
  );
}

export default App;