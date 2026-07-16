import { useState } from "react";
export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    let [arr, SetArr] = useState(["no moves"]);

    //spread = copy create hoti hai and vo pass hoti hai 
    let updateBlue = () => {


        //         setMoves((prevMoves) => {
        //    return {...moves , blue : moves.blue + 1};
        //         });
        SetArr((prevArr) => {
            return [...prevArr, "blue moves"]
        });
        console.log(arr);

    };
    let updateYellow = () => {

        console.log(`moves yellow = ${moves.yellow}`);
        setMoves((prevMoves) => {
            return { ...moves, yellow: moves.yellow + 1 };
        });

    };

    return (
        <>
            <div>
                <p>Game begins</p>
                <div className="board">
                    <p>Blue moves = {moves.blue}</p>
                    <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>+1</button>
                    <p>Yellow moves = {moves.yellow}</p>
                    <button onClick={updateYellow} style={{ backgroundColor: "yellow" }}>+1</button>
                    <p>Green moves = {moves.green} </p>
                    <button style={{ backgroundColor: "green" }}>+1</button>
                    <p>Red moves = {moves.red}</p>
                    <button style={{ backgroundColor: "red" }}>+1</button>
                </div>
            </div>
        </>
    );
}
