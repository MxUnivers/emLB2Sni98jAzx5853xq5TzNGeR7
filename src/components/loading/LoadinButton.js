import React from 'react'

const LoadinButton = ({text}) => {
    return (
        <div class="flex justify-center space-x-2">
            <div style={{ borderTopColor: "transparent" }} class="w-8 h-8 border-4 border-blue-300 rounded-full animate-spin"></div>
            <p class="ml-2">{text}</p>
        </div>
    )
}

export default LoadinButton;