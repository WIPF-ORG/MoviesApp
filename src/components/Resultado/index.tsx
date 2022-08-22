import React from "react";
import { isPropertySignature } from "typescript";
import Card from "../Card";

function Resultado(props: {pesquisar: string|null}) {
    let filmes = [
        {
            nome: "Turning Red",
            generos: ["Animation", "Family", "Comedy", "Fantasy"],
            imgCapaPath: "https://image.tmdb.org/t/p/w300/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
            diretor: 'Domee Shi',
            duracao: '1h 40m',
            avaliacao: '7,2',
        },
        {
            nome: "Spider-Man: No Way Home",
            generos: ["Action", "Adventure", "Science Fiction"],
            imgCapaPath: "https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
            diretor: 'Jon Watts',
            duracao: '2h 28m',
            avaliacao: '8,2',
        },
        {
            nome: "Black Crab",
            generos: ["Action", "Thriller"],
            imgCapaPath: "https://image.tmdb.org/t/p/w300/mcIYHZYwUbvhvUt8Lb5nENJ7AlX.jpg",
            diretor: 'Adam Berg',
            duracao: '1h 49m',
            avaliacao: '6,1',
        },
        {
            nome: "The Adam Project",
            generos: ["Action", "Adventure", "Comedy", "Science Fiction", "Drama"],
            imgCapaPath: "https://image.tmdb.org/t/p/w300/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
            diretor: 'Shawn Levy',
            duracao: '1h 46m',
            avaliacao: '7,1',
        },
        {
            nome: "Encanto",
            generos: ["Animation", "Comedy", "Family", "Fantasy"],
            imgCapaPath: "https://image.tmdb.org/t/p/w300/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
            diretor: 'Byron Howard',
            duracao: '1h 42m',
            avaliacao: '9',
        }
    ];

    if (props.pesquisar) {
        const regex = new RegExp('(.*)' + props.pesquisar + '(.*)', 'gi');
        filmes = filmes.filter(({nome}) => nome.match(regex));
    }

    return (
        <section>
            <div className="row">
                {filmes.map((item, index) => (
                    <div className="col-3 mb-4" key={index}>
                        <Card 
                            imgSrc={item.imgCapaPath}
                            imgAlt={item.nome}
                            titulo={item.nome}
                            generos={item.generos ? item.generos.join(", ") : ''}
                            diretor={item.diretor || ''}
                            avaliacao={item.avaliacao || ''}
                            duracao={item.duracao || ''}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Resultado;
