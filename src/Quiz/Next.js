import React from "react";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { moveToNextQuestion } from "../Redux/counter";
import { Stack } from "@mui/material";

const Click = (isUserResponsePending) => {
    if (isUserResponsePending === true) {
        return "not-allowed"
    }

    return "pointer"
}

const Next = () => {
    const dispatch = useDispatch()
    const isUserResponsePending = useSelector((state) => state.counter.isUserResponsePending)
    
    return (
        <Stack
            style={{ cursor: Click(isUserResponsePending) }}
        >
            <Button variant="outlined" disabled={isUserResponsePending === true}
                onClick={(() => {
                    dispatch(moveToNextQuestion(-1))
                })}>
                {"Next question"}
            </Button>
        </Stack>
    )
}

export default Next