import TabData from "./PopulateTabData"

//For landing page with all blog
export default function LandingPage() {

    const allData = [
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
        },
        {
            id: 7,
            title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
            author: "Isha Sharma",
            date: "23 Jul, 2024",
            duration: "6 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
            alt: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024"
        },
        {
            id: 8,
            title: "12 Real-World Data Science Examples: Power Of Data Science",
            author: "Lukesh S",
            date: "25 Mar, 2024",
            duration: "7 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp",
            alt: "12 Real-World Data Science Examples: Power Of Data Science"
        },
        {
            id: 9,
            title: " Can A Commerce Student Do Data Science?",
            author: "Saakshi Priyadarshini",
            date: "16 Apr, 2024",
            duration: "3 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science.png",
            alt: " Can A Commerce Student Do Data Science?"
        },
        {
            id: 10,
            title: "Roles and Responsibilities of a Data Scientist",
            author: "Jaishree Tomar",
            date: "26 Apr, 2024",
            duration: "6 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
            alt: "Roles and Responsibilities of a Data Scientist"
        },
        {
            id: 11,
            title: "Top Product-Based Companies for Data Scientists in 2024 ",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
            alt: "Top Product-Based Companies for Data Scientists in 2024"
        },
        {
            id: 12,
            title: "10 Best Data Science Online Courses for Beginners | 2024",
            author: "Srinithi Sankar",
            date: "02 Apr, 2024",
            duration: "7 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
            alt: "10 Best Data Science Online Courses for Beginners | 2024"
        },
        {
            id: 13,
            title: "Is Switching Careers From Non-Tech To Tech Challenging?",
            author: "Archana",
            date: "04 Apr, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2021/10/Non-tech-to-Tech-How-difficult-is-that.png",
            alt: "Is Switching Careers From Non-Tech To Tech Challenging?"
        },
        {
            id: 14,
            title: "Top 5 Tech Careers of the Future [2024]",
            author: "Tarun Singh",
            date: "02 Apr, 2024",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/01/Top-5-Tech-Careers-in-2023-1.png",
            alt: "Top 5 Tech Careers of the Future [2024]"
        },
        {
            id: 15,
            title: "The Future and Scope of Machine Learning Careers in the New Era",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-The-Future-and-Scope-of-Machine-Learning-Careers-in-the-New-Era.webp",
            alt: "The Future and Scope of Machine Learning Careers in the New Era"
        },
        {
            id: 16,
            title: "10 Best Software Engineering Careers in 2024",
            author: "Saakshi Priyadarshini",
            date: "25 Mar, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/03/Top-Software-Engineering-Careers.jpg",
            alt: "10 Best Software Engineering Careers in 2024"
        },
        {
            id: 17,
            title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            author: "Jaishree Tomar",
            date: "26 Mar, 2024",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
            alt: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide"
        },
        {
            id: 18,
            title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            author: "Tushar Vinocha",
            date: "16 Apr, 2024",
            duration: "5 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
            alt: "Cybersecurity Vs Ethical Hacking: Top 10 Differences"
        },
        {
            id: 19,
            title: "What Is Hacking? Types of Hacking & More",
            author: "Meghana D",
            date: "25 Mar, 2024",
            duration: "6 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
            alt: "What Is Hacking? Types of Hacking & More"
        },
        {
            id: 20,
            title: "8 Different Types of Cybersecurity and Threats Involved",
            author: "Tushar Vinocha",
            date: "08 Sep, 2023",
            duration: "4 Min Read",
            imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png",
            alt: "8 Different Types of Cybersecurity and Threats Involved"
        }
    ]

    return (
       <TabData activeTab={1} displayData={allData}></TabData>
    )
}