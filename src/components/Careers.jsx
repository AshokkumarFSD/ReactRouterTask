import TabData from "./PopulateTabData"

//For careers blog
export default function CareersBlog() {

    const careerBlog = [
        {
            id: 1,
            title: "Is Switching Careers From Non-Tech To Tech Challenging?",
            author: "Archana",
            date: "04 Apr, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2021/10/Non-tech-to-Tech-How-difficult-is-that.png",
            alt: "Is Switching Careers From Non-Tech To Tech Challenging?"
        },
        {
            id: 2,
            title: "Top 5 Tech Careers of the Future [2024]",
            author: "Tarun Singh",
            date: "02 Apr, 2024",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/01/Top-5-Tech-Careers-in-2023-1.png",
            alt: "Top 5 Tech Careers of the Future [2024]"
        },
        {
            id: 3,
            title: "The Future and Scope of Machine Learning Careers in the New Era",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-The-Future-and-Scope-of-Machine-Learning-Careers-in-the-New-Era.webp",
            alt: "The Future and Scope of Machine Learning Careers in the New Era"
        },
        {
            id: 4,
            title: "10 Best Software Engineering Careers in 2024",
            author: "Saakshi Priyadarshini",
            date: "25 Mar, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/03/Top-Software-Engineering-Careers.jpg",
            alt: "10 Best Software Engineering Careers in 2024"
        }
    ]

    return (
        <TabData activeTab={5} displayData={careerBlog}></TabData>
    )
}