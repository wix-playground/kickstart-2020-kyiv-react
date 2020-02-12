import React from 'react'

interface LabelProps {
    text: string | number
}

const Label: React.FC<LabelProps> = React.memo((props) => {
    console.log('Label 🏄‍♀️');
    return (
        <h1>{props.text}</h1>
    )
})

export default Label
