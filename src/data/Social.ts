interface Social {
    id: number;
    slug: string;
    name: string;
    logo: string;
    link: string;
}

let SOCIAL: Social[] = [
    {
        id: 1,
        slug: "facebook",
        name: "Facebook",
        logo: "fa-brands fa-facebook",
        link: "https://www.facebook.com/zone2rire",
    },
    {
        id: 3,
        slug: "instagram",
        name: "Instagram",
        logo: "fa-brands fa-instagram",
        link: "https://www.instagram.com/zone2rire_officiel/",
    },
    {
        id: 4,
        slug: "youtube",
        name: "Youtube",
        logo: "fa-brands fa-youtube",
        link: "https://www.youtube.com/channel/UCg-96DBzMhEMBU71LR4N0xA",
    },
    {
        id: 5,
        slug: "tiktok",
        name: "Tiktok",
        logo: "fa-brands fa-tiktok",
        link: "https://www.tiktok.com/@zone2rire_officiel",
    },
];

export {SOCIAL};
