import React from "react";
import "./LeaderBoard.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function LeaderBoard() {
    const rows = [
        {
            id: 1,
            name: 'Vaibhav Gupta',
            image: 'https://media.licdn.com/dms/image/C4D03AQHX2CE9ILVhpQ/profile-displayphoto-shrink_800_800/0/1656349971912?e=2147483647&v=beta&t=ZREDoAM0EaHoA8-U2RtDhenYUZqLWuSK9Qm6H0Oln1k',
            Streak:467,
            Meditation:469,
            Gratitude:468,
            Affirmation:467,
        },
        {
            id: 2,
            name: 'Gurmeet Singh',
            image: 'https://media.licdn.com/dms/image/D4D03AQGVVxpbw568ag/profile-displayphoto-shrink_800_800/0/1690284769047?e=2147483647&v=beta&t=8EAZmE2Pos1xV_jwgqR23eGnLIUpRNE8-mZSr956x3U',
            Streak: 400,
            Meditation: 200,
            Gratitude: 220,
            Affirmation: 400,
        },
        {
            id: 3,
            name: 'Varun Jain',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            Streak: 300,
            Meditation: 100,
            Gratitude: 300,
            Affirmation: 200,
        },
        {
            id: 4,
            name: 'Varnik Gupta',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            Streak: 250,
            Meditation: 250,
            Gratitude: 300,
            Affirmation: 200,
        },
        {
            id: 5,
            name: 'Pranjal Jain',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            Streak: 200,
            Meditation: 200,
            Gratitude: 100,
            Affirmation: 200,
        },
        {
            id: 6,
            name: 'Aishwarya',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            Streak: 190,
            Meditation: 190,
            Gratitude: 100,
            Affirmation: 180,
        },
        {
            id: 7,
            name: 'Ram',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            Streak: 180,
            Meditation: 180,
            Gratitude: 100,
            Affirmation: 180,
        },
        {
            id: 8,
            name: 'Shyam',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            Streak: 150,
            Meditation: 150,
            Gratitude: 100,
            Affirmation: 150,
        },
        {
            id: 9,
            name: 'Sita',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            Streak: 120,
            Meditation: 120,
            Gratitude: 100,
            Affirmation: 110,
        }
    ];
    return (
        <div className="Leaders-container">
            <div className="Leader-Header"> 🏆 Today's LeaderBoard</div>
            <div className="topLeadersList">
                {rows.map((leader, index) => (
                    <div className="leader" key={leader.id}>
                        {index + 1 <= 3 && (
                            <div className="containerImage">
                                <img className="image" loading="lazy" src={leader.image} />
                                <div className="crown">
                                    <svg
                                        id="crown1"
                                        fill="#0f74b5"
                                        data-name="Layer 1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 50"
                                    >
                                        <polygon
                                            className="cls-1"
                                            points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                                        />
                                    </svg>
                                </div>
                                <div className="leaderName">{leader.name}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="playerslist">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor:'rgb(183, 183, 239)',color:'white'}}>
                                <TableCell>Rank</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Total Streak Days</TableCell>
                                <TableCell align="center">Meditation Count</TableCell>
                                <TableCell align="center">Gratitude Count</TableCell>
                                <TableCell align="center">Affirmation Count</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">
                                        <img className="List-Image-Fixer" src={row.image} ></img>&nbsp;&nbsp;
                                        {row.name}</TableCell>
                                    <TableCell align="center">{row.Streak}</TableCell>
                                    <TableCell align="center">{row.Meditation}</TableCell>
                                    <TableCell align="center">{row.Gratitude}</TableCell>
                                    <TableCell align="center">{row.Affirmation}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default LeaderBoard;