import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Schedule.scss';

function Schedule() {
    const [team1, setTeam1] = useState([])
    useEffect(() => {
        axios.get('https://cricapi.com/api/matches?apikey=WIK2725II2gC5IhPJYAvUmYcj762')
        .then(res => console.log(res))
        .catch(error => console.log(error))
        console.log(team1.toString())
    },[])
    return (
        <div className="scheduleTable">
            <h1>{team1}</h1>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>TEAM 1</th>
                        <th>TEAM 2</th>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </table>
            </div>
    )
}

export default Schedule
