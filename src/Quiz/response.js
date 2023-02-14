import React from "react";
import { useSelector } from "react-redux";


export function Response () {
    const list = useSelector((state) => state.counter.list)
    const userResponseIndex = useSelector((state) => state.counter.userResponseIndex)
    const index = useSelector((state) => state.counter.index)
    const isUserResponsePending = useSelector((state) => state.counter.isUserResponsePending)
    const correctAnswer = list[index].correctAnswer

    if (isUserResponsePending === true) {
        return null
    }

    if (list[index].correctAnswer === userResponseIndex) {
        return (
            <div>
            <p>Good answer, well done !</p>
            </div>
        )
    }

    else {
    return (
        <div>
        <p>Wrong answer, the good one was {list[index].responses[correctAnswer]} . </p>
        </div>
    )
    }
}