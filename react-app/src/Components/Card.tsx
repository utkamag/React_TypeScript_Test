import React, {FC} from 'react';

interface CardProps {
    width?: string;
    height?: string;
    children: React.ReactChild
}

const Card: FC<CardProps> = ({width, height, children}) => {
    return (
        <div style={{width, height, background: "gray"}}>
            {children}
        </div>
    );
};

export default Card;