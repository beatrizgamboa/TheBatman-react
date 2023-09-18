import React from "react";
import './cards-info.css'

function Info() {
    return(
        <>
        <div className='info-cards-container'>
            <div className='info-cards-content'>
            <div class="card1 info-1">
                <span>Nascimento:</span>
                <span id='info2'>13/05/1986</span>
                <span>Outros filmes:</span>
                <span id='info2'>A Saga Crepúsculo - Edward Cullen</span>
                <span id='info2'>Harry Potter e o Cálice de Fogo - Cedrico Diggory</span>
                <span id='info2'>Lembranças - Tyler Hawkins</span>
            </div>
            <div class="card1 info-2">
            <span>Nascimento:</span>
                <span id='info2'>13/05/1986</span>
                <span>Outros filmes:</span>
                <span id='info2'>X-men: Primeira Classe - Angel Salvadore</span>
                <span id='info2'>Divergente Série - Christina</span>
                <span id='info2'>Animais Fantásticos: Os Crimes de Grindelwald - Leta Lestrange</span>
            </div>
            <div class="card1 info-3">
            <span>Nascimento:</span>
                <span id='info2'>07/12/1965</span>
                <span>Outros filmes:</span>
                <span id='info2'>Jogos Vorazes - Beetee</span>
                <span id='info2'>007 Casino Royalle; Quantum of Solace; No Time do Die - Felix Leiter</span>
                <span id='info2'>Westworld - Bernard Lowe</span>
            </div>
            </div>
        </div>
        </>
    )
}

export default Info;