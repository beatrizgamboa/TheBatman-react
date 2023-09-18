import React from "react";
import './styles.css'
import { BsTelephone , BsSend } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { Ri24HoursFill } from 'react-icons/ri'

function Formulario(){

    return(
        <>
        <div className="div">
            <div id='d1'>
                <div id='contato'>
                    <BsTelephone id='icon' />
                    <div id='info'>
                        <span>Ligue para nós</span>
                        <span>(xx)xxxxx-xxxx</span>
                    </div>
                </div>
                <div id='contato'>
                    <FiMapPin id='icon' />
                    <div id='info'>
                        <span>Localização</span>
                        <span>Endereço, N., Recife - PE</span>
                    </div>
                </div>
                <div id='contato'>
                    <Ri24HoursFill id='icon' />
                    <div id='info'>
                        <span>Horário</span>
                        <span>seg-sex: 8h-18, sáb-dom: fechado</span>
                    </div>
                </div>
            </div>
            <div id='d2'>
                <h1>CONTATE-NOS</h1>
                <div id='form'>
                    <input placeholder="    Seu Nome" type="name"></input>
                    <input placeholder="    Seu e-mail" type="email"></input>
                    <input id='text' placeholder="" type="textarea"></input>
                <button>
                    <BsSend id='icon2' />
                    Enviar
                </button>
                </div>
            </div>
            <div id='d3'> </div>      
        </div>
        </>
    )
}

export default Formulario