///// All /////
const listGroupOpen = '<div class="col-xs-auto col-sm-auto my-1"><div class="list-group-item text-center"><p>';
const listGroupClose = '</p></div></div>';

const listLinkOpen = '<div class="col-xs-auto col-sm-auto my-1"><a href=' 
const listLinkMiddle = ' target="_blank" role="button" title="View this certificate in a new tab" class="btn d-block text-center"><p>'
const listLinkClose = '</p></a></div>'

///// About /////

///// Education
const relevantCoursework = [
    "Algorithms", 
    "Data Structures", 
    "Machine Learning and Data Mining", 
    "Information Retrieval",       
    "Artificial Intelligence",
    "Relational Database Management",
    "Non-Relational Database Management",
    "Computer Organization",
    "System Software Design",
    "User-Interaction Software",
    "Human-Computer Interaction Software",
    "Software Testing & Quality Assurance",
    "Requirements Analysis & Engineering",
    "Concepts in Programming Languages", 
    "Programming in C, C++, Python, & Java", 
    "Project in Artificial Intelligence (Natural Language Processing)", 
    "Project in Algorithms and Data Structures"
];
const deansHonorList = [
    "Spring 2022",
    "Winter 2022",
    "Fall 2021", 
    "Spring 2021", 
    "Winter 2021", 
    "Fall 2020", 
    "Spring 2020", 
    "Winter 2019"
];          

relevantCoursework.forEach(e => {
    document.getElementById('relevantCoursework').innerHTML += listGroupOpen + e + listGroupClose;
});
deansHonorList.forEach(e => {
    document.getElementById('deansHonorList').innerHTML += listGroupOpen + e + listGroupClose;
});

///// Skills
const languagesAndFrameworks = [
    "Python",
    "C",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "SQL",
    "MQL",
    "Bash"
];
const developerTools = [
    "Git",
    "GitHub",
    "MySQL",
    "MongoDB",
    "Docker",
    "Airflow",
    "Command-Line",
    "Visual Studio Code",
    "Android Studio",
    "IntelliJ IDEA",
    "Jira",
    "Confluence",
    "Figma"
];
const certificates = [
    {name: "IBM Python for Data Science and AI", 
    link: "https://www.credly.com/badges/c0f56086-1981-46c2-9b6e-e160106935fd?source=linked_in_profile"},
    {name: "IBM AI Foundations For Everyone Specialization", 
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6CT8X79YEBGN"},
    {name: "AT&T Summer Learning Academy Extern", 
    link: "https://www.youracclaim.com/badges/bb54802a-6076-40f7-b2be-0f14f4365b87?source=linked_in_profile"}
];

languagesAndFrameworks.forEach(e => {
    document.getElementById('languagesAndFrameworks').innerHTML += listGroupOpen + e + listGroupClose;
});
developerTools.forEach(e => {
    document.getElementById('developerTools').innerHTML += listGroupOpen + e + listGroupClose;
});
certificates.forEach(e => {
    document.getElementById('certificates').innerHTML += listLinkOpen + e.link + listLinkMiddle + e.name + listLinkClose;
});