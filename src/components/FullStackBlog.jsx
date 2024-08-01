import TabData from "./PopulateTabData"
import FullStack1 from '../assets/full_stack_1.jpg';
import FullStack2 from '../assets/full_stack_2.webp';
import FullStack3 from '../assets/full_stack_3.webp';
import FullStack4 from '../assets/full_stack_4.webp';
import FullStack5 from '../assets/full_stack_5.png';
import FullStack6 from '../assets/full_stack_6.webp';

//For full stack blog
export default function FullStackBlog() {

    const fullStackData = [
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
            imageUrl:FullStack3,
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
            imageUrl: FullStack5,
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
        }
    ]

    return (
        <TabData activeTab={2} displayData={fullStackData}></TabData>
    )
}