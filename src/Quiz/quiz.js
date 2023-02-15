import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionBlock from "./QuestionBlock";
import Response from "./Response";
import QuestionNumber from "./QuestionNumber";
import End from "./End";
import { fetchQuestions } from "../Redux/counter"
import Header from "./Header";
import Home from "./Home";
import Score from "./Score";
import { Stack } from "@mui/material";
import Next from "./Next";

const Quiz = () => {
    const dispatch = useDispatch()
    const questionIndex = useSelector((state) => state.counter.questionIndex)
    React.useEffect(() => {
        dispatch(fetchQuestions())
    }, [dispatch])
    
    return (
        <div>
            <Header />
            {(questionIndex === -1) && <Home />}
            <Stack
                justifyContent="center"
                alignItems="center">
                {(questionIndex !== -1 && questionIndex !== 10) && <QuestionNumber />}
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={3}
                >
                    {(questionIndex !== -1 && questionIndex !== 10) && <QuestionBlock />}
                    {(questionIndex !== -1 && questionIndex !== 10) && <Response />}
                </Stack>
            </Stack>
            <Stack
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                {(questionIndex !== -1 && questionIndex !== 10) && <Next />}
                {(questionIndex !== -1 && questionIndex !== 10) && <Score />}
            </Stack>
            {(questionIndex === 10) && <End />}
        </div>
    )
}

export default Quiz