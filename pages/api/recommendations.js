// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Abhishek Raj',
    image: "images/Abhishek.jfif",
    designation: 'React JS | NEXT JS | Node | GraphQL',
    view: "Hey everyone! I wanted to take a moment to recommend Anish Sinha for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Anish is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    
  },
  {
    id: 1,
    name: 'Sikher Singh',
    image: "images/sikher.jpeg",
    designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
    view: "I had the privilege of working alongside Anish on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMP Technologies, where Anish's professionalism and attention to detail shone brightly. I wholeheartedly endorse Anish for any opportunity that calls for a highly skilled and dedicated individual.",
    
  },
  {
    id: 2,
    name: 'Nasir Khan',
    image: "images/nasir.jpg",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Anish as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Anish's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
   
  },
  {
    id: 3,
    name: 'Roushan',
    image: "images/Roushan.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Anish Sinha for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
