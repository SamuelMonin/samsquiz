import React from "react";
import { useSelector } from "react-redux";


export function Response () {
    const list = useSelector((state) => state.counter.list)
    const userResponseIndex = useSelector((state) => state.counter.userResponseIndex)
    const index = useSelector((state) => state.counter.index)
    const isUserResponsePending = useSelector((state) => state.counter.isUserResponsePending)
    const responseJuste = list[index].responseJuste

    if (isUserResponsePending == true) {
        return null
    }

    if (list[index].responseJuste == userResponseIndex) {
        return (
            <div>
            <p>Good answer, well done !</p>
            </div>
        )
    }

    else {
    return (
        <div>
        <p>Wrong answer, the good one was {list[index].responses[responseJuste]} . </p>
        </div>
    )
    }
}