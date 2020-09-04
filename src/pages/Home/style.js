import styled from "styled-components"

export const Infos = styled.div`

        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 65%;

        color: ${props => props.theme.colors.txtPrimario};

        margin: 40px auto;

    h1{
        font-size: 47px;
        text-align: left;
        font-weight: 600;

    }

    p{
        font-size: 18px;
        font-weight: 400;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;

    }

`

export const Imagem = styled.div`

    max-width: 100%;
    width: 65%;
    height: 380px;
    margin: 0 auto 100px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

export const Sobre = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 20%;

    height: 100vh;

    background-color: ${props => props.theme.colors.secundaria};

    h1 {
        text-align: center;
        font-weight: 600;
        font-size: 34px;
        margin-bottom: 24px;
        color: ${props => props.theme.colors.titulo};
    }

    p {
        color: ${props => props.theme.colors.txtPrimario};
        text-align: center;
        font-weight: 400;
        font-size: 18px;
    }

`

export const Skills = styled.section`
     padding: 52px 15%;
     margin: 0 auto;
     min-height: 100vh;
     width: 100%;
     
     display: flex;
     flex-direction: column;
     justify-content: center;

     h1 {
        text-align: center;
        font-weight: 600;
        font-size: 34px;
        margin-bottom: 14px;
        color: ${props => props.theme.colors.titulo};
     }

    p {
        color: ${props => props.theme.colors.txtPrimario};
        text-align: center;
        font-weight: 400;
        font-size: 14px;
    }


       > ul {
        color: ${props => props.theme.colors.txtSecundario};
        width: 70%;
        
        margin-top: 24px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
       
        list-style: none;

        }

`

export const ListaItem = styled.li`
            margin: 25px 0px;
            display: flex;
            align-items: center;
            width: 100%;

            > img {
                width: 50px;
                margin-right: 14px;
            }

            > div {
                flex: 1;
                
                display: flex;
                flex-direction: column;
                

                > div {
                    width: ${props => props.porcent}%;
                    background-color: ${props => props.color};
                    height: 14px;
                    border-radius: 8px;
                    margin-top: 5px;

                }
            }

`

export const Websites = styled.section`
     
    padding: 50px 20%;
    background-color: ${props => props.theme.colors.secundaria};

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: 600;
        font-size: 34px;
        margin-bottom: 50px;
        color: ${props => props.theme.colors.titulo};
    }

    ul {
        list-style: none
    }

    ul li + li {
        margin-top: 80px;
    }

    ul img {
        max-width: 100%
    }

    ul a {
        margin-top: 32px;
        text-align: center;
        display: block;
        color: ${props => props.theme.colors.txtPrimario};
        font-weight: 400;
        font-size: 14px;
        cursor: pointer;
    }

`

