import TabData from "./PopulateTabData"

//For full stack blog
export default function FullStackBlog() {

    const fullStackData = [
        {
            id: 1,
            title: "BestBest Full-Stack Development Project Ideas in 2024",
            author: "Isha Sharma",
            date: "23 Jul, 2024",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
            alt: "BestBest Full-Stack Development Project Ideas in 2024"
        },
        {
            id: 2,
            title: "How Long Would It Take to Be a Full Stack Developer?",
            author: "Meghana D",
            date: "26 Mar, 2024",
            duration: "3 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
            alt: "How Long Would It Take to Be a Full Stack Developer?"
        },
        {
            id: 3,
            title: "7 Unique Web Development Project Ideas for Beginners",
            author: "Lukesh S",
            date: "02 Apr, 2024",
            duration: "6 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
            alt: "7 Unique Web Development Project Ideas for Beginners"
        },
        {
            id: 4,
            title: "10 Best Database Management Systems For Software Developers",
            author: "Isha Sharma",
            date: "22 Mar, 2024",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
            alt: "10 Best Database Management Systems For Software Developers"
        },
        {
            id: 5,
            title: "10 Best React Project Ideas for Developers [with Source Code] ",
            author: "Isha Sharma",
            date: "25 Apr, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2024/04/10-Best-React-Project-Ideas-for-Developers-with-Source-Code.png",
            alt: "10 Best React Project Ideas for Developers [with Source Code] "
        },
        {
            id: 6,
            title: "How does Apache work? A detailed introduction to  Apache",
            author: "Tushar Vinocha",
            date: "26 Mar, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
            alt: "How does Apache work? A detailed introduction to  Apache"
        }
    ]

    return (
        <TabData activeTab={2} displayData={fullStackData}></TabData>
    )
}