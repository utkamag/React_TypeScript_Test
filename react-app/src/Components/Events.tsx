import React, {useRef, useState} from 'react';


const Events: React.FC = () => {

    const [value, setValue] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)

    let changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    let clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        console.log(inputRef.current?.value)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый"/>
            <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
            <button onClick={clickHandler}>Кнопка</button>
        </div>
    );
};

export default Events;