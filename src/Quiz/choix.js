import React from "react";
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import { Paper } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ResponseBox } from "./ResponseBox";



export function Choix() {
    const index = useSelector((state) => state.counter.index)
    const list = useSelector((state) => state.counter.list)

    return (
        <Paper elevation={4}
            sx={{
                width: "95%"
            }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Stack direction="row"
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{ bgcolor: 'primary.main' }}
                    style={{ width: "100%" }}
                >
                    <HelpOutlineIcon style={{ color: "white" }} />
                    <p style={{ color: "white" }}>
                        {list[index].question}
                    </p>
                </Stack>
                <Stack
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    style={{ width: "100%", flex: 1}}
                >
                    <ResponseBox  response={0}/>
                    <ResponseBox  response={1}/>
                    <ResponseBox  response={2}/>
                    <ResponseBox  response={3}/>
                </Stack>
            </Stack>
        </Paper>
    )
}