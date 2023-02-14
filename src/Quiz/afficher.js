import React from "react";
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack';


export function Affiche() {
    const index = useSelector((state) => state.counter.index)


    return (
        <div>
            <p>
                Question {index + 1}/10
            </p>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
            </Stack>
        </div>
    )
}
