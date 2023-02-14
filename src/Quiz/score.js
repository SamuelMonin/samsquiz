import React from "react";
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack';

export function Score () {
    const score = useSelector((state) => state.counter.score)
    const index = useSelector((state) => state.counter.index)
    return (
        <Stack>
            <p>Your current score : {score}/{index + 1}</p>
        </Stack>
    )
}