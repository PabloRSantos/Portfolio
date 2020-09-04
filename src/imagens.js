//SKILS

import AE from "./assets/Icons/AE.png"
import AI from "./assets/Icons/AI.png"
import Figma from "./assets/Icons/Figma.png"
import JS from "./assets/Icons/JS.png"
import LR from "./assets/Icons/LR.png"
import PR from "./assets/Icons/PR.png"
import React from "./assets/Icons/React.png"
import ReactNative from "./assets/Icons/ReactNative.png"
import NodeJS from "./assets/Icons/NodeJS.png"



//PORTFOLIO

import Proffy1 from "./assets/Web/Proffy/landing.png"
import Proffy2 from "./assets/Web/Proffy/login.png"
import Proffy3 from "./assets/Web/Proffy/cadastro.png"
import Proffy4 from "./assets/Web/Proffy/forgot password.png"
import Proffy5 from "./assets/Web/Proffy/profile.gif"
import Proffy6 from "./assets/Web/Proffy/teacherlist.png"
import Proffy7 from "./assets/Web/Proffy/teacherlist2.png"

import Ecoleta1 from "./assets/Web/Ecoleta/home.png"
import Ecoleta2 from "./assets/Web/Ecoleta/form1.png"
import Ecoleta3 from "./assets/Web/Ecoleta/form2.png"


import reebok from "./assets/reebok_web.png"


//CONTATOS

import LinkeIn from "./assets/LinkeIn.png"

export const skills = [
    {
        nome: "Premiere",
        imagem: PR,
        color: '#E579FF',
        porcent: 80,
    },

    {
        nome: "After Effects",
        imagem: AE,
        color: '#D8A1FF',
        porcent: 85,
    },
    
    {
        nome: "Illustrator",
        imagem: AI,
        color: '#FF7F18',
        porcent: 70
    },

    /*{
        nome: "Figma",
        imagem: Figma
    },
*/
    {
        nome: "React",
        imagem: React,
        color: '#74D9F5',
        porcent: 87,
    },
/*
    {
        nome: "React Native",
        imagem: ReactNative
    },
*/
    {
        nome: "NodeJS",
        imagem: NodeJS,
        color: '#539E43',
        porcent: 83,
    },

    {
        nome: "JavaScript",
        imagem: JS,
        porcent: 90,
        color: '#FBDA21'
    },

  
]

export const portfolio = [
    
    {
        spam: "NLW#1 Ecoleta",
        capa: Ecoleta1,
        imagem: [Ecoleta1, Ecoleta2, Ecoleta3],
        id: 1
    },
    {
        spam: "NLW#2 Proffy",
        capa: Proffy1,
        imagem: [Proffy2, Proffy3, Proffy4, Proffy5, Proffy6, Proffy7],
        id: 2
    },
    {
        spam: "Rebook Store - Concept",
        capa: reebok,
        imagem: [reebok, reebok, reebok, reebok, reebok],
        id: 3
    },

    {
        spam: "Rebook Store - Concept",
        capa: reebok,
        imagem: [reebok, reebok, reebok, reebok, reebok],
        id: 4
    },
]

export const contatos = [
    
    {
        imagem: LinkeIn
    },

    {
        imagem: LinkeIn
    },

    {
        imagem: LinkeIn
    },

    {
        imagem: LinkeIn
    },

]
