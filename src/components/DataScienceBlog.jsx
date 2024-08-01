import TabData from "./PopulateTabData"

//For data science blog
export default function DataScienceBlog() {

    const dataScienceBlog = [
        {
            id: 1,
            title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
            author: "Isha Sharma",
            date: "23 Jul, 2024",
            duration: "6 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
            alt: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024"
        },
        {
            id: 2,
            title: "12 Real-World Data Science Examples: Power Of Data Science",
            author: "Lukesh S",
            date: "25 Mar, 2024",
            duration: "7 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp",
            alt: "12 Real-World Data Science Examples: Power Of Data Science"
        },
        {
            id: 3,
            title: " Can A Commerce Student Do Data Science?",
            author: "Saakshi Priyadarshini",
            date: "16 Apr, 2024",
            duration: "3 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science.png",
            alt: " Can A Commerce Student Do Data Science?"
        },
        {
            id: 4,
            title: "Roles and Responsibilities of a Data Scientist",
            author: "Jaishree Tomar",
            date: "26 Apr, 2024",
            duration: "6 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
            alt: "Roles and Responsibilities of a Data Scientist"
        },
        {
            id: 5,
            title: "Top Product-Based Companies for Data Scientists in 2024 ",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
            alt: "Top Product-Based Companies for Data Scientists in 2024"
        },
        {
            id: 6,
            title: "10 Best Data Science Online Courses for Beginners | 2024",
            author: "Srinithi Sankar",
            date: "02 Apr, 2024",
            duration: "7 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
            alt: "10 Best Data Science Online Courses for Beginners | 2024"
        }
    ]

    return (
        <TabData activeTab={3} displayData={dataScienceBlog}></TabData>
    )
}