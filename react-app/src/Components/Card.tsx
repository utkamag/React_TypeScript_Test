import React from 'react';

interface CardProps {
    width?: string;
    height?: string;
    onClick: () => void;
    children: React.ReactChild;
}


const Card: React.FC<CardProps> = ({width, height, children, onClick}) => {
    return (
        <div style={{width, height, background: "gray"}} onClick = {onClick} >
        {children}

</div>
)
    ;
};

export default Card;