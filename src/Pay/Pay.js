import React, { useState, useEffect } from 'react';
import './Pay.scss';
// import { IconButton } from "@material-ui/core"

import db from '../firebase'
import CancelIcon from '@material-ui/icons/Cancel';
import Header from '../Header/Header';
import firebase from 'firebase';



function Pay() {

    const [error, setError] = useState('')
    const [check, setCheck] = useState(true)
    const [password, setPassword] = useState('')
    const [mplayer1runs, setMplayer1runs] = useState()
    const [mplayer2runs, setMplayer2runs] = useState()
    const [rplayer1runs, setRplayer1runs] = useState()
    const [rplayer2runs, setRplayer2runs] = useState()
    const [splayer1runs, setSplayer1runs] = useState()
    const [splayer2runs, setSplayer2runs] = useState()
    const [runs, setRuns] = useState([])
    // console.log(runs)

    const today = new Date();
    const time = today.getDate();
    const month = today.getMonth() + 1;

    const mSum = (+mplayer1runs) + (+mplayer2runs)
    const rSum = (+rplayer1runs) + (+rplayer2runs)
    const sSum = (+splayer1runs) + (+splayer2runs)

    let totalMRuns = 0
    let totalRRuns = 0
    let totalSRuns = 0

    runs.map((run) => {
        totalMRuns = totalMRuns + run.data.Manya;
        totalRRuns = totalRRuns + run.data.Rashi;
        totalSRuns = totalSRuns + run.data.Shrey;
    })

    let names = ["Manya", "Rashi", "Shrey"];

    let score = [totalMRuns, totalRRuns, totalSRuns];

    function bblSort(score) {

        for (var i = 0; i < score.length; i++) {

            // Last i elements are already in place  
            for (var j = 0; j < (score.length - i - 1); j++) {

                // Checking if the item at present iteration 
                // is greater than the next iteration
                if (score[j] > score[j + 1]) {

                    // If the condition is true then swap them
                    var temp = score[j]
                    score[j] = score[j + 1]
                    score[j + 1] = temp

                    var temp1 = names[j]
                    names[j] = names[j + 1]
                    names[j + 1] = temp1
                }
            }
        }
        // Print the sorted array
        // console.log(score);
        // console.log(names)
    }



    // Now pass this array to the bblSort() function
    bblSort(score);
    // score.sort((a,b) => b-a)
    let first = score[2]
    let second = score[1]
    let third = score[0]

    let first_name = names[2]
    let second_name = names[1]
    let third_name = names[0]

    // console.log(first_name);
    // console.log(first_name);

    const sendData = () => {     //Adding runs
        db.collection("Runs").add({
            Manya: mSum,
            Rashi: rSum,                     //Score 1 + Score 2                       
            Shrey: sSum,                    //Score 1 + Score 2
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            date: time,
            month: month
        }
        )

        setMplayer1runs('');
        setMplayer2runs('')
        setRplayer1runs('')
        setRplayer2runs('')
        setSplayer1runs('')
        setSplayer2runs('')
    }

    useEffect(() => {     //Fetching runs
        db.collection('Runs').orderBy("timestamp", "asc").onSnapshot(snapshot => {
            setRuns(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })


    })


    let add_data = (                      //Runs input
        <div className="runsForm">
            <div className="cancelIcon">
                <CancelIcon onClick={() => {
                    setCheck(!check)
                }}
                />
            </div>

            <h3>Manya</h3>
            <input value={mplayer1runs}
                onChange={(e) => setMplayer1runs(e.target.value)}
                type="text"
                placeholder="Player 1" >
            </input>
            <input
                value={mplayer2runs}
                type="text"
                onChange={(e) => setMplayer2runs(e.target.value)}
                placeholder="Player 2" >
            </input>
            <h3>Rashi</h3>
            <input value={rplayer1runs}
                onChange={(e) => setRplayer1runs(e.target.value)}
                type="text"
                placeholder="Player 1" >
            </input>
            <input value={rplayer2runs}
                onChange={(e) => setRplayer2runs(e.target.value)}
                type="text"
                placeholder="Player 2" >
            </input>
            <h3>Shrey</h3>
            <input value={splayer1runs}
                onChange={(e) => setSplayer1runs(e.target.value)}
                type="text"
                placeholder="Player 1" >
            </input>
            <input value={splayer2runs}
                onChange={(e) => setSplayer2runs(e.target.value)}
                type="text"
                placeholder="Player 2" >
            </input>
            <button onClick={sendData} type="submit">Add</button>
        </div>
    )

    if (check) {                   //password input
        add_data = (

            <form>
                <div className="passwordForm">
                    <h1>Enter Password</h1>
                    <input value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                        placeholder="Password" required>
                    </input>
                    <div className="error">{error}</div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        if (password === "1234") {
                            setCheck(!check)
                            setError('')
                        } else {
                            setError("Incorrect Password. Try again.")
                        }
                        setPassword('')
                    }} type="submit">Enter</button>
                </div>
            </form>

        )
    }

    return (
        <div className="pay">
            {/* <div className="payImg">
                <img src="../assets/payImage/bg4.jpeg"></img>
            </div> */}
            {/* <Header></Header> */}
            <div className="payBodyPartOne">
                <h1>PAY SCHEDUAL</h1>
            </div>
            {/* password form or runs input form */}
            {add_data}

            <div className="payTable">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>{first_name}</th>
                        <th>{second_name}</th>
                        <th>{third_name}</th>
                    </tr>

                    {runs.map((run) => {
                        return (
                            <tr>
                                <td>{run.data.date}-{run.data.month}-2021</td>

                                <td>{run.data[first_name]}</td>
                                <td>{run.data[second_name]}</td>
                                <td>{run.data[third_name]}</td>
                            </tr>
                        )
                    })}

                    <tr>
                        <td>Total</td>
                        <td>{first}</td>
                        <td>{second}</td>
                        <td>{third}</td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default Pay
