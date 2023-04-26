import React, { useState/*, useEffect*/ } from 'react';
import "./styles/Buttons.css";
import "./styles/text.css";
import { Button } from 'react-bootstrap';
function TestPage(searchElement, fromIndex) {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [showResult, setShowResult] = useState(false);
    //const [elapsedTime, setElapsedTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(0);




    // useEffect(() => {
    //     let intervalId;
    //     if (startTime !== null && endTime === null) {
    //         intervalId = setInterval(() => {
    //             setElapsedTime(Date.now() - startTime);
    //         }, 1);
    //     }
    //     return () => clearInterval(intervalId);
    // }, [startTime, endTime]);


    const handleStartTest = async () => {
        setIsPlaying(1);
        setStartTime(Date.now());
    }

    const handleStopTest = () => {
        setIsPlaying(2);
        setEndTime(Date.now());
        setShowResult(true);
    };

    const handleRestartTest = () => {
        setStartTime(null);
        setEndTime(null);
        setShowResult(false);
        //setElapsedTime(0);
        setIsPlaying(0);
    }


    const result = showResult && `Ваш результат: ${endTime - startTime} мс`;
    const divStyle0 = {
        backgroundColor: 'yellow',
        backgroundSize: 'cover',
        borderRadius: '50%',
        borderColor: 'white',
        borderWidth: '3px',
        backgroundPosition: 'center',
        marginLeft: '25px',
        width: '250px',
        height: '250px',
        id: 0
    };
    const divStyle1 = {
        position: 'absolute',
        backgroundColor: 'red',
        backgroundSize: 'cover',
        borderRadius: '50%',
        borderColor: 'white',
        borderWidth: '3px',
        backgroundPosition: 'center',
        width: '250px',
        height: '250px',
        marginLeft: '-520px',
        id: 1
    };
    const divStyle2 = {
        position: 'absolute',
        backgroundColor: 'green',
        backgroundSize: 'cover',
        borderRadius: '50%',
        borderColor: 'white',
        borderWidth: '3px',
        backgroundPosition: 'center',
        width: '250px',
        height: '250px',
        marginLeft: '20px',
        id: 2
    };
    const divStyle3 = {
        position: 'absolute',
        backgroundColor: 'blue',
        backgroundSize: 'cover',
        borderRadius: '50%',
        borderColor: 'white',
        borderWidth: '3px',
        backgroundPosition: 'center',
        width: '250px',
        height: '250px',
        marginLeft: '-790px',
        id: 3
    };
    const divStyle4 = {
        position: 'absolute',
        backgroundColor: 'purple',
        backgroundSize: 'cover',
        borderRadius: '50%',
        borderColor: 'white',
        borderWidth: '3px',
        backgroundPosition: 'center',
        width: '250px',
        height: '250px',
        marginLeft: '290px',
        id: 4
    };

    const phrases = ['ЖЕЛТЫЙ', 'КРАСНЫЙ', 'ЗЕЛЕНЫЙ', 'СИНИЙ', 'ФИОЛЕТОВЫЙ'];
    const [phrase, setPhrase] = useState('');
    const newArray = [
        { id: 0, value: 'ЖЕЛТЫЙ' },
        { id: 1, value: 'КРАСНЫЙ' },
        { id: 2, value: 'ЗЕЛЕНЫЙ' },
        { id: 3, value: 'СИНИЙ' },
        { id: 4, value: 'ФИОЛЕТОВЫЙ' }
    ];
    newArray.map(item => item.id).includes(divStyle0.id, divStyle1.id, divStyle2.id, divStyle3.id, divStyle4.id);

    function checker(color) {
        if (color == phrase) {
            return console.log('norm')
        } else {
            return console.log('ne norm')
        }
    }
    function colorClick() {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setPhrase(phrases[randomIndex]);
    }
    function randomColor() {
        colorClick();
        handleStartTest();
    }

    return (
        <div>
            {isPlaying === 0 ? (
                <Button role={Button} onClick={randomColor} disabled={startTime !== null}>
                    Начать тест
                </Button>
            ) : isPlaying === 1 ? (
                <div>
                    <Button role={Button} onClick={handleStopTest} disabled={endTime !== null}>
                        Стоп
                    </Button>
                    <div className="lolkek">
                        <p>{phrase}</p>
                    </div>
                    <Button onClick={checker("КРАСНЫЙ")} disabled={endTime !== null} style={divStyle0}></Button>
                    <Button onClick={checker("КРАСНЫЙ")} disabled={endTime !== null} style={divStyle1}></Button>
                    <Button onClick={checker("КРАСНЫЙ")} disabled={endTime !== null} style={divStyle2}></Button>
                    <Button onClick={checker("КРАСНЫЙ")} disabled={endTime !== null} style={divStyle3}></Button>
                    <Button onClick={checker("КРАСНЫЙ")} disabled={endTime !== null} style={divStyle4}></Button>
                </div>
            ) : <Button role={Button} onClick={handleRestartTest}>
                Перезапустить
            </Button>
            }


            <div className="showResult">
                <style>
                    {`
                .showResult {
                    color: #c7edef;
                }
                `}
                </style>
                <br />
                {showResult && result}
                <br />
                {/*{startTime !== null && (*/}
                {/*    <div className="result">*/}
                {/*        <style>*/}
                {/*            {`*/}
                {/*.result {*/}
                {/*    color: #c7edef;*/}
                {/*}*/}
                {/*`}*/}
                {/*        </style>*/}
                {/*        Прошло времени: {elapsedTime} мс ({new Date(elapsedTime).toISOString().substr(14, 9)})*/}
                {/*    </div>*/}
                {/*)}*/}

            </div>

        </div>
    );
}

export default TestPage;
