import { useState, useEffect } from "react";
import Filmes from "./Filmes";
import Header from "./Header";

export default function Filme(){
    

    return(
        <>
            <Header text='selecione seu filme' />
            <Filmes />
        </>

    )
}

