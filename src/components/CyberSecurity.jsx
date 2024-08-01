import TabData from "./PopulateTabData"

//For cyber security blog
export default function CyberSecurityBlog() {

    const cyberSecurityBlog = [
        {
            id: 1,
            title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
            alt: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide"
        },
        {
            id: 2,
            title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            author: "Tushar Vinocha",
            date: "16 Apr, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
            alt: "Cybersecurity Vs Ethical Hacking: Top 10 Differences"
        },
        {
            id: 3,
            title: "What Is Hacking? Types of Hacking & More",
            author: "Meghana D",
            date: "25 Mar, 2024",
            duration: "6 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
            alt: "What Is Hacking? Types of Hacking & More"
        },
        {
            id: 4,
            title: "8 Different Types of Cybersecurity and Threats Involved",
            author: "Tushar Vinocha",
            date: "08 Sep, 2023",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png",
            alt: "8 Different Types of Cybersecurity and Threats Involved"
        }
    ]

    return (
        <TabData activeTab={4} displayData={cyberSecurityBlog}></TabData>
    )
}