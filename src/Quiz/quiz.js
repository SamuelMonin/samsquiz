import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Choix } from "../Quiz/choix";
import { Response } from "./response";
import { Affiche } from "./afficher";
import { Fin } from "./fin";
import { fetchQuestions } from "../Redux/counter"
import { Header } from "./header";
import { Home } from "./home";
import { Score } from "./score";
import { Stack } from "@mui/material";
import { Suivant } from "./suivant";

export function Quiz() {
    const dispatch = useDispatch()
    const index = useSelector((state) => state.counter.index)
    React.useEffect(() => {
        dispatch(fetchQuestions())
    }, [])
    return (
        <div>
            <Header />
            {(index == -1) && <Home />}
            <Stack
                justifyContent="center"
                alignItems="center">
                {(index != -1 && index != 10) && <Affiche />}
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={3}
                >
                    {(index != -1 && index != 10) && <Choix />}
                    {(index != -1 && index != 10) && <Response />}
                </Stack>
            </Stack>
            <Stack
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                {(index != -1 && index != 10) && <Suivant />}
                {(index != -1 && index != 10) && <Score />}
            </Stack>
            {(index === 10) && <Fin />}
        </div>
    )
}