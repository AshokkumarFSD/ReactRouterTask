import TabData from "./PopulateTabData"
import FullStack1 from '../assets/full_stack_1.jpg';
import FullStack2 from '../assets/full_stack_2.webp';
import FullStack3 from '../assets/full_stack_3.webp';
import FullStack4 from '../assets/full_stack_4.webp';
import FullStack5 from '../assets/full_stack_5.png';
import FullStack6 from '../assets/full_stack_6.webp';
import DataScience1 from '../assets/data_science_1.webp';
import DataScience2 from '../assets/data_science_2.webp';
import DataScience3 from '../assets/data_science_3.webp';
import DataScience4 from '../assets/data_science_4.png';
import DataScience5 from '../assets/data_science_3.webp';
import DataScience6 from '../assets/data_science_6.webp';
import Cyber1 from '../assets/cyber_1.webp';
import Cyber2 from '../assets/cyber_2.webp';
import Cyber3 from '../assets/cyber_3.webp';
import Cyber4 from '../assets/cyber_4.webp';
import Career1 from '../assets/career_1.png';
import Career2 from '../assets/career_2.png';
import Career3 from '../assets/career_3.webp';
import Career4 from '../assets/career_4.jpg';


//For landing page with all blog
export default function LandingPage() {

    const allData = [
        {
            id: 1,
            title: "BestBest Full-Stack Development Project Ideas in 2024",
            author: "Isha Sharma",
            date: "23 Jul, 2024",
            duration: "4 Min Read",
            imageUrl: FullStack1,
            alt: "BestBest Full-Stack Development Project Ideas in 2024"
        },
        {
            id: 2,
            title: "How Long Would It Take to Be a Full Stack Developer?",
            author: "Meghana D",
            date: "26 Mar, 2024",
            duration: "3 Min Read",
            imageUrl: FullStack2,
            alt: "How Long Would It Take to Be a Full Stack Developer?"
        },
        {
            id: 3,
            title: "7 Unique Web Development Project Ideas for Beginners",
            author: "Lukesh S",
            date: "02 Apr, 2024",
            duration: "6 Min Read",
            imageUrl: FullStack3,
            alt: "7 Unique Web Development Project Ideas for Beginners"
        },
        {
            id: 4,
            title: "10 Best Database Management Systems For Software Developers",
            author: "Isha Sharma",
            date: "22 Mar, 2024",
            duration: "4 Min Read",
            imageUrl: FullStack4,
            alt: "10 Best Database Management Systems For Software Developers"
        },
        {
            id: 5,
            title: "10 Best React Project Ideas for Developers [with Source Code] ",
            author: "Isha Sharma",
            date: "25 Apr, 2024",
            duration: "5 Min Read",
            imageUrl:FullStack5,
            alt: "10 Best React Project Ideas for Developers [with Source Code] "
        },
        {
            id: 6,
            title: "How does Apache work? A detailed introduction to  Apache",
            author: "Tushar Vinocha",
            date: "26 Mar, 2024",
            duration: "5 Min Read",
            imageUrl:FullStack6,
            alt: "How does Apache work? A detailed introduction to  Apache"
        },
        {
            id: 7,
            title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
            author: "Isha Sharma",
            date: "23 Jul, 2024",
            duration: "6 Min Read",
            imageUrl: DataScience1,
            alt: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024"
        },
        {
            id: 8,
            title: "12 Real-World Data Science Examples: Power Of Data Science",
            author: "Lukesh S",
            date: "25 Mar, 2024",
            duration: "7 Min Read",
            imageUrl: DataScience2,
            alt: "12 Real-World Data Science Examples: Power Of Data Science"
        },
        {
            id: 9,
            title: " Can A Commerce Student Do Data Science?",
            author: "Saakshi Priyadarshini",
            date: "16 Apr, 2024",
            duration: "3 Min Read",
            imageUrl: DataScience3,
            alt: " Can A Commerce Student Do Data Science?"
        },
        {
            id: 10,
            title: "Roles and Responsibilities of a Data Scientist",
            author: "Jaishree Tomar",
            date: "26 Apr, 2024",
            duration: "6 Min Read",
            imageUrl: DataScience4,
            alt: "Roles and Responsibilities of a Data Scientist"
        },
        {
            id: 11,
            title: "Top Product-Based Companies for Data Scientists in 2024 ",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "4 Min Read",
            imageUrl: DataScience5,
            alt: "Top Product-Based Companies for Data Scientists in 2024"
        },
        {
            id: 12,
            title: "10 Best Data Science Online Courses for Beginners | 2024",
            author: "Srinithi Sankar",
            date: "02 Apr, 2024",
            duration: "7 Min Read",
            imageUrl: DataScience6,
            alt: "10 Best Data Science Online Courses for Beginners | 2024"
        },
        {
            id: 13,
            title: "Is Switching Careers From Non-Tech To Tech Challenging?",
            author: "Archana",
            date: "04 Apr, 2024",
            duration: "5 Min Read",
            imageUrl: Career1,
            alt: "Is Switching Careers From Non-Tech To Tech Challenging?"
        },
        {
            id: 14,
            title: "Top 5 Tech Careers of the Future [2024]",
            author: "Tarun Singh",
            date: "02 Apr, 2024",
            duration: "4 Min Read",
            imageUrl: Career2,
            alt: "Top 5 Tech Careers of the Future [2024]"
        },
        {
            id: 15,
            title: "The Future and Scope of Machine Learning Careers in the New Era",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "5 Min Read",
            imageUrl:Career3,
            alt: "The Future and Scope of Machine Learning Careers in the New Era"
        },
        {
            id: 16,
            title: "10 Best Software Engineering Careers in 2024",
            author: "Saakshi Priyadarshini",
            date: "25 Mar, 2024",
            duration: "5 Min Read",
            imageUrl: Career4,
            alt: "10 Best Software Engineering Careers in 2024"
        },
        {
            id: 17,
            title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "4 Min Read",
            imageUrl: Cyber1,
            alt: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide"
        },
        {
            id: 18,
            title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            author: "Tushar Vinocha",
            date: "16 Apr, 2024",
            duration: "5 Min Read",
            imageUrl: Cyber2,
            alt: "Cybersecurity Vs Ethical Hacking: Top 10 Differences"
        },
        {
            id: 19,
            title: "What Is Hacking? Types of Hacking & More",
            author: "Meghana D",
            date: "25 Mar, 2024",
            duration: "6 Min Read",
            imageUrl: Cyber3,
            alt: "What Is Hacking? Types of Hacking & More"
        },
        {
            id: 20,
            title: "8 Different Types of Cybersecurity and Threats Involved",
            author: "Tushar Vinocha",
            date: "08 Sep, 2023",
            duration: "4 Min Read",
            imageUrl: Cyber4,
            alt: "8 Different Types of Cybersecurity and Threats Involved"
        }
    ]

    return (
       <TabData activeTab={1} displayData={allData}></TabData>
    )
}