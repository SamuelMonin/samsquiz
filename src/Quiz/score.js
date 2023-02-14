import React from "react";
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack';

export function Score () {
    const score = useSelector((state) => state.counter.score)
    return (
        <Stack>
            <p>Your current score : {score}/10</p>
        </Stack>
    )
}