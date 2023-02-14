import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Stack from '@mui/material/Stack';
import { fetchQuestions } from "../Redux/counter";
import Button from '@mui/material/Button';


export function Fin () {
    const score = useSelector((state) => state.counter.score)
    const dispatch = useDispatch()
    return (
        <div>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            >
            <h1>End of the quiz</h1>
            <p>Your score : {score}/10</p>
            <Button variant="outlined" onClick={() => dispatch(fetchQuestions())}>
                Try again
            </Button>
            </Stack>
        </div>
    )
}