import React from "react";
import { useSelector } from "react-redux";


const Response = () => {
    const list = useSelector((state) => state.counter.list)
    const userResponseIndex = useSelector((state) => state.counter.userResponseIndex)
    const questionIndex = useSelector((state) => state.counter.questionIndex)
    const isUserResponsePending = useSelector((state) => state.counter.isUserResponsePending)
    const correctAnswer = list[questionIndex].correctAnswer

    if (isUserResponsePending === true) {
        return null
    }

    if (list[questionIndex].correctAnswer === userResponseIndex) {
        return (
            <div>
                <p>Good answer, well done !</p>
            </div>
        )
    }

    else {
        return (
            <div>
                <p>Wrong answer, the good one was {list[questionIndex].responses[correctAnswer]} . </p>
            </div>
        )
    }
}

export default Response