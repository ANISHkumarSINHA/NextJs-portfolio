const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'VIT Vellore',
                degree: 'Btech, Computer System Engineering',
                detail: "8.5 CGPA(till 5th sem) ",
                year: '2021-2025'
            },
            {
                id: 1,
                title: 'Public park mount school',
                degree: '12th class',
                detail: "Completed 12th with 83%",
                year: '2019-2020'
            },
            {
                id: 2,
                title: 'Kendriya Vidyalaya',
                degree: '10th class',
                detail: "Completed 10th with 88% ",
                year: '2017-2018'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Jio',
                role: 'Frontend Developer',
                
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '01/12/23-01/1/24',
                location: 'remote'
            },
            {
                id: 2,
                title: 'CodeClause',
                role: 'FullStack Webdevelopemnt',
                desc: 'expanding into full-stack development involves mastering Node.js, Express, MongoDB/PostgreSQL, API handling, and authentication',
                year: '09/2023 - 11/2023',
                location: 'remote'
            },
            {
                id: 3,
                title: 'octanet',
                role: 'AI/ML',
                desc: " explore TensorFlow.js in the frontend, Python with TensorFlow/PyTorch for backend, and leverage cloud-based ML APIs",
                year: '09/2023 - 12/2023',
                location: 'remote'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
