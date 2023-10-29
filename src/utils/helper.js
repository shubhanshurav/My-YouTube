var nameList = [
  "Aarav",
  "Riya",
  "Ishaan",
  "Devansh",
  "Mukesh",
  "Sanjana",
  "Soham",
  "Sarita",
  "Pranav",
  "Shubhanshu",
  "Falak",
  "Jagan",
  "Kirti",
  "Malika",
  "Ranjit",
  "Rohan",
  "Neelam",
  "Lakshmi",
  "Gopal",
  "Devika",
  "Dilip",
  "Anika",
  "Kartik",
  "Meera",
  "Kiran",
  "Anaya",
  "Vikram",
  "Rajat",
  "Shubhanshu",
  "Amit",
  "Abhinav",
  "Harsha",
  "Veer",
  "Harini",
  "Shreya",
  "Neha",
  "Mayank",
  "Yash",
  "Anushka",
  "Abhishek",
  "Rajesh",
  "Varun",
  "Priya",
  "Vibha",
  "Deepak",
  "Divya",
  "Shankar",
  "Shiva",
  "Parth",
  "Krishna",
  "Arya",
  "Lavanya",
  "Arjun",
  "Vinayak",
  "Vijay",
  "Aarush",
  "Arnav",
  "Amrita",
  "Manju",
  "Devi",
  "Devanshi",
  "Nehal",
  "Urvi",
  "Roshan",
  "Siddharth",
  "Shreya",
  "Anuradha",
  "Mukund",
  "Chaitra",
  "Aarushi",
  "Hari",
  "Vrinda",
  "Indira",
  "Shruti",
  "Krish",
  "Pranjal",
  "Sakshi",
  "Aashish",
  "Neeraj",
  "Kiran",
  "Alok",
  "Aman",
  "Jyoti",
  "Laxman",
  "Gita",
  "Deepti",
  "Ravinder",
  "Kusum",
  "Jyotsna",
  "Kamala",
  "Kushal",
  "Bimal",
  "Neerja",
  "Chandan",
  "Roop",
  "Sadashiv",
  "Mohini",
  "Vivek",
  "Rahul",
  "Hemant",
  "Sundar",
  "Mukul",
  "Mukta",
  "Malti",
  "Ritika",
  "Akshay",
  "Simran",
  "Anil",
  "Nikhil",
  "Poonam",
  "Krishan",
  "Sarla",
  "Saroj",
  "Nakul",
  "Ishita",
  "Chetan",
  "Bhagwan",
  "Dinesh",
  "Pradeep",
  "Mukul",
  "Hina",
  "Chandan",
  "Manisha",
  "Poonam",
  "Nandini",
  "Vikas",
  "Alok",
  "Ashwin",
  "Seema",
  "Kumud",
  "Deepika",
  "Shubham",
  "Saksham",
  "Maya",
  "Virat",
  "Rahul",
  "Ritu",
  "Suman",
  "Samarth",
  "Amita",
  "Ramesh",
  "Vandana",
  "Anjali",
  "Manju",
  "Ajay",
  "Yogesh",
  "Kamal",
  "Abha",
  "Amruta",
  "Naina",
  "Uday",
  "Priyanka",
  "Vijaya",
  "Girish",
  "Sachin",
  "Pankaj",
  "Vikram",
];

  export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
  }
  
  export function makeRandomSentence(length) {
    const words = [
      "Algorithm", "Data", "Database", "Programming", "Software", "Hardware", "Network",
      "Security", "Encryption", "Framework", "Artificial", "Intelligence", "Machine", "Learning",
      "Web", "Server", "Client", "Authentication", "API", "Cybersecurity"
    ];
  
    let result = "";
    let counter = 0;
    while (counter < length) {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      result += randomWord + " ";
      counter += 1;
    }
    return result.trim(); // Remove extra space at the end
  }
  
  
  // export const findPrime = (num) => {
  //   let i,
  //     primes = [2, 3],
  //     n = 5;
  //   const isPrime = (n) => {
  //     let i = 1,
  //       p = primes[i],
  //       limit = Math.ceil(Math.sqrt(n));
  //     while (p <= limit) {
  //       if (n % p === 0) {
  //         return false;
  //       }
  //       i += 1;
  //       p = primes[i];
  //     }
  //     return true;
  //   };
  //   for (i = 2; i <= num; i += 1) {
  //     while (!isPrime(n)) {
  //       n += 2;
  //     }
  //     primes.push(n);
  //     n += 2;
  //   }
  //   return primes[num - 1];
  // };

