import { tweetsData } from "./data.js";

// for (let tweet of tweetsData) {
//   for (let tweetObeject in tweet) {
//     console.log(tweetObeject);
//   }
//   console.log(tweet);
// }


const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

const totalGrades = grades.reduce((total, currentGrades) =>{
    return total + currentGrades
})


console.log(`${Math.round(totalGrades/grades.length)}`)

const studentsArr = [
    {
        name: 'Mike',
        grade: 75
    },
    {
        name: 'Emma',
        grade: 83
    },
    {
        name: 'Seth',
        grade: 66
    }
]


