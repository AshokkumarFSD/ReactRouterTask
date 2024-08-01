import TabData from "./PopulateTabData"
import Career1 from '../assets/career_1.png';
import Career2 from '../assets/career_2.png';
import Career3 from '../assets/career_3.webp';
import Career4 from '../assets/career_4.jpg';

//For careers blog
export default function CareersBlog() {

    const careerBlog = [
        {
            id: 1,
            title: "Is Switching Careers From Non-Tech To Tech Challenging?",
            author: "Archana",
            date: "04 Apr, 2024",
            duration: "5 Min Read",
            imageUrl: Career1,
            alt: "Is Switching Careers From Non-Tech To Tech Challenging?"
        },
        {
            id: 2,
            title: "Top 5 Tech Careers of the Future [2024]",
            author: "Tarun Singh",
            date: "02 Apr, 2024",
            duration: "4 Min Read",
            imageUrl: Career2,
            alt: "Top 5 Tech Careers of the Future [2024]"
        },
        {
            id: 3,
            title: "The Future and Scope of Machine Learning Careers in the New Era",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "5 Min Read",
            imageUrl: Career3,
            alt: "The Future and Scope of Machine Learning Careers in the New Era"
        },
        {
            id: 4,
            title: "10 Best Software Engineering Careers in 2024",
            author: "Saakshi Priyadarshini",
            date: "25 Mar, 2024",
            duration: "5 Min Read",
            imageUrl: Career4,
            alt: "10 Best Software Engineering Careers in 2024"
        }
    ]

    return (
        <TabData activeTab={5} displayData={careerBlog}></TabData>
    )
}