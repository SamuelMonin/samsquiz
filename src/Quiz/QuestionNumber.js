import React from "react";
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack';


const QuestionNumber = () => {
    const questionIndex = useSelector((state) => state.counter.questionIndex)

    return (
        <div>
            <p>
                Question {questionIndex + 1}/10
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

export default QuestionNumber