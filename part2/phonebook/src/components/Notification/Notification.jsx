import React from 'react';
import './Notification.css'

export const Success = ({message}) => {

    if (message === null) {
        return null
    }

    return (
        <div className='success-message'>
            <p>
                {message}
            </p>
        </div>
    )
}

export const Error = ({message}) => {
    
    if (message === null) {
        return null
    }

    return (
        <div className='error-message'>
            <p>
                {message}
            </p>
        </div>
    )
}

export default ({Success, Error}) 