import React,{ forwardRef } from 'react'
import { Card, CardContent, Typography} from '@material-ui/core';
import './message.css';
const message = forwardRef( ({ message, username}, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && `message__user`}`}>
        
            <Card className={isUser ? 'message_usercard' : "message_guestcard"}>
                <CardContent>
                    <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                    >
                     {!isUser && `${message.username || 'unknown user'}:`} {message.message}
                    
                    </Typography>
                </CardContent>
            </Card>
            </div>

        
    )
})

export default message