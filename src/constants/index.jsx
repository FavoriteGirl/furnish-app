import { Handshake, ShieldCheck } from "lucide-react";

const K = {
    NAVLINKS: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about-us"
        },
        {
            name: "Collection",
            path: "/collection"
        },
        {
            name: "Contact",
            path: "/contact-us"
        }

    ],

    SERVICES: [
        {
            title: "AMazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <Handshake />,
            bgColor: "#21A56F",
            iconBg: "#CB9696",
        },
        {
            title: "Quality Furniture",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
          icon: <ShieldCheck />,
            bgColor: "#C2F261",
            iconBg: "#CB9696",
        },
        {
            title: "Modern Design",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
        icon: <Handshake/>,
            bgColor: "#D1B490",
            iconBg: "#CB9696",
        },
        {
            title: "Best Support",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <Handshake />,
            bgColor: "#21A56F",
            iconBg: "#CB9696",
        },
    ]
}

export default K;