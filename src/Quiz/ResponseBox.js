import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserResponse } from "../Redux/counter";
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';


const Color = (list, userResponseIndex, questionIndex, isUserResponsePending, checked) => {
    if (isUserResponsePending === true || userResponseIndex !== checked) {
        return "white"
    }

    if (list[questionIndex].correctAnswer === userResponseIndex) {
        return "#4caf50"
    }
    else {
        return "#f44336"
    }
}


const ResponseBox = (props) => {
    const dispatch = useDispatch()
    const questionIndex = useSelector((state) => state.counter.questionIndex)
    const list = useSelector((state) => state.counter.list)
    const userResponseIndex = useSelector((state) => state.counter.userResponseIndex)
    const isUserResponsePending = useSelector((state) => state.counter.isUserResponsePending)
    
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}
            style={{
                border: "2px solid black", width: "90%", margin: "15px",
                borderRadius: "5px",
                backgroundColor: Color(list, userResponseIndex, questionIndex, isUserResponsePending, props.response),
                cursor: "pointer"
            }}
            onClick={() => {
                dispatch(selectUserResponse(props.response))
            }}
        >
            <p style={{ paddingLeft: "80px" }}>
                {list[questionIndex].responses[props.response]}
            </p>
            <Checkbox checked={userResponseIndex === props.response}
                sx={{
                    color: "black",
                    '&.Mui-checked': {
                        color: "black",
                    },
                }}
            />
        </Stack>
    )
}


export default ResponseBox