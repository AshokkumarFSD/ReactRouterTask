import TabData from "./PopulateTabData"
import Cyber1 from '../assets/cyber_1.webp';
import Cyber2 from '../assets/cyber_2.webp';
import Cyber3 from '../assets/cyber_3.webp';
import Cyber4 from '../assets/cyber_4.webp';

//For cyber security blog
export default function CyberSecurityBlog() {

    const cyberSecurityBlog = [
        {
            id: 1,
            title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "4 Min Read",
            imageUrl: Cyber1,
            alt: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide"
        },
        {
            id: 2,
            title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            author: "Tushar Vinocha",
            date: "16 Apr, 2024",
            duration: "5 Min Read",
            imageUrl:Cyber2,
            alt: "Cybersecurity Vs Ethical Hacking: Top 10 Differences"
        },
        {
            id: 3,
            title: "What Is Hacking? Types of Hacking & More",
            author: "Meghana D",
            date: "25 Mar, 2024",
            duration: "6 Min Read",
            imageUrl: Cyber3,
            alt: "What Is Hacking? Types of Hacking & More"
        },
        {
            id: 4,
            title: "8 Different Types of Cybersecurity and Threats Involved",
            author: "Tushar Vinocha",
            date: "08 Sep, 2023",
            duration: "4 Min Read",
            imageUrl: Cyber4,
            alt: "8 Different Types of Cybersecurity and Threats Involved"
        }
    ]

    return (
        <TabData activeTab={4} displayData={cyberSecurityBlog}></TabData>
    )
}