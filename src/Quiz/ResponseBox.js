import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserResponse } from "../Redux/counter";
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';



export function ResponseBox(props) {
    const dispatch = useDispatch()
    const index = useSelector((state) => state.counter.index)
    const list = useSelector((state) => state.counter.list)
    const userResponseIndex = useSelector((state) => state.counter.userResponseIndex)
    const isUserResponsePending = useSelector((state) => state.counter.isUserResponsePending)
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}
            style={{
                border: "2px solid black", width: "90%", margin: "15px",
                borderRadius: "5px",
                backgroundColor: Couleur(list, userResponseIndex, index, isUserResponsePending, props.response),
                cursor: "pointer"
            }}
            onClick={() => {
                dispatch(selectUserResponse(props.response))
            }}
        >
            <p style={{ paddingLeft: "80px" }}>
                {list[index].responses[props.response]}
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


function Couleur(list, userResponseIndex, index, isUserResponsePending, checked) {
    if (isUserResponsePending === true || userResponseIndex !== checked) {
        return "white"
    }

    if (list[index].responseJuste === userResponseIndex) {
        return "#4caf50"
    }
    else {
        return "#f44336"
    }
}