import Category from './Category';

interface Content {
    id: number;
    name: string;
    slug: string;
    picture: string;
    video_link: string;
    audio_link: string;
    blague: string;
    devinette: string;
    reponse: string;

}

let CONTENT: Content[] = [
    {
        id: 1,
        name: "Blague 1",
        slug: "blague-1",
        picture: null,
        video_link: null,
        audio_link: null,
        blague: "Dans la rue, un homme joue de la trompette. Un policier s’approche et lui dit : – Vous avez un permis pour jouer dans la rue ? Le musicien lui répond que non. – Très bien, accompagnez moi, dit le policier. – Sur quel morceau de musique ? répond le trompettiste.",
        devinette: null,
        reponse: null,
    },
];

export { CONTENT };
