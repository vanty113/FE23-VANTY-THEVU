import { HomePage } from "../feature/homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import { React } from 'react';

export function RouterApp() {
    return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
    </Routes>
    )
}