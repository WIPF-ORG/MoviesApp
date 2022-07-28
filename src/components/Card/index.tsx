import React from "react";
import style from "./Card.module.scss";

function Card(props: {imgSrc: string, imgAlt: string, titulo: string, generos: string, diretor: string, avaliacao: string, duracao:string}) {
    let generos;
    let diretor;
    let avaliacao;
    let duracao;

    if (props.generos) {
        generos = 
            <div className="me-auto mt-3">
                <p className="fs-5 mb-0 text-warning fw-bold">Generos</p>
                <p className="card-text">{props.generos}</p>
            </div>;
    }
    
    if (props.diretor) {
        diretor = 
            <div className="me-auto mt-3">
                <p className="fs-5 mb-0 text-warning fw-bold">Diretor</p>
                <p className="card-text">{props.diretor}</p>
            </div>;
    }

    if (props.avaliacao) {
        avaliacao = 
            <div className="me-auto mt-3">
                <p className="fs-5 mb-0 text-warning fw-bold">Avaliação IMDB</p>
                <p className="card-text">{props.avaliacao}</p>
            </div>;
    }

    if (props.duracao) {
        duracao = 
            <div className="me-auto mt-3">
                <p className="fs-5 mb-0 text-warning fw-bold">Duração</p>
                <p className="card-text">{props.duracao}</p>
            </div>;
    }

    return (
        <div className={"card shadow rounded-0 border-0 " + style.card}>
            <img src={props.imgSrc} className="card-img-top rounded-0" alt={props.imgAlt} />
            <div className={"card-body " + style['card-body']}>
                <h2 className="card-title text-center">{props.titulo}</h2>
                {generos || ''}
                {diretor || ''}
                {avaliacao || ''}
                {duracao || ''}
            </div>
        </div>
    )
}

export default Card;