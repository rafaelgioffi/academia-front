import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';

function App () {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Rafael");

    useEffect(() => {
        setCount(1)
    }, []);

    // useEffect(() => {
    //    setTimeout(() => 
    //     setCount(count + 1), 6000)
    // });

    useEffect(() => {
            if(count % 2 === 0) {
                setName(" é par");
            } else {
                setName(" é impar");
            }
        }, [count]);

        useEffect(() => () => console.log('desmontar'));

    const onClickPlus = () => {        
        setCount(count + 1);
    }

    const onClickMinus = () => {
        if (count <= 0) {
            setCount(count, 0);
        }
        else {
            setCount(count - 1);
        }
    }

    return (
        <>        
        <p>{count}{name}</p>
        <Button onClick={onClickMinus} />
        <Button onClick={onClickPlus} />
        </>
    )
}

export default App;