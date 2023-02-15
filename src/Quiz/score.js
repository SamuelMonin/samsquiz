import React from "react";
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack';

const Score = () => {
    const score = useSelector((state) => state.counter.score)
    const questionIndex = useSelector((state) => state.counter.questionIndex)

    return (
        <Stack>
            <p>Your current score : {score}/{questionIndex + 1}</p>
        </Stack>
    )
}

export default Score