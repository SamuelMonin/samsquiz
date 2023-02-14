import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from "react-redux";
import { startQuiz } from "../Redux/counter";


export function Home() {
    const dispatch = useDispatch()
    const consigne = "This is a general knowledge quiz in 10 questions. Good luck and enjoy !"
    return (
        <div>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                style={{ padding: "100px" }}
            >
                <h1>
                    Welcome to Sam's quiz !
                </h1>
                <p>
                    {consigne}
                </p>
                <Button variant="outlined" onClick={(() => {
                    dispatch(startQuiz())
                })}>
                    {"Begin"}
                </Button>
            </Stack>
        </div>
    )
}