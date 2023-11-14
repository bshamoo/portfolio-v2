///// All /////
let listGroupOpen = "<div type=\"button\" class=\"col-xs-auto col-sm-auto my-1\"><div class=\"list-group-item text-center no-click\"><p>";
const listGroupClose = '</p></div></div>';

const listLinkOpen = '<div class="col-xs-auto col-sm-auto my-1"><a href=' 
const listLinkMiddle = ' target="_blank" role="button" title="View this certificate in a new tab" class="btn d-block text-center"><p>'
const listLinkClose = '</p></a></div>'


///// About /////

///// Education
const relevantCoursework = [
    { name: "Algorithms",                                   course: "CS 161",           description: "Design and Analysis of Algorithms" },
    { name: "Data Structures",                              course: "ICS 46",           description: "Data Structure Implementation and Analysis" },
    { name: "Project in Algorithms and Data Structures",    course: "CS 165",           description: "Project in Algorithms and Data Structures" },
    { name: "System Software Design",                       course: "ICS 53/53L",       description: "Principles in System Design/Principles in System Design Library" },
    { name: "Computer Organization",                        course: "ICS 51",           description: "Introductory Computer Organization" },
    { name: "Information Retrieval",                        course: "CS 121",           description: "Information Retrieval" },     
    { name: "Relational Database Management",               course: "CS 122A",          description: "Introduction to Data Management" },
    { name: "Non-Relational Database Management",           course: "CS 122D",          description: "Beyond SQL Data Management" },
    { name: "Concepts in Programming Languages",            course: "CS 141",           description: "Concepts in Programming Languages I" },
    { name: "Programming in Python, C/C++, and Java",       course: "ICS 33/45C/45J",   description: "Intermediate Programming in Python / Programming in C/C++ as a Second Language / Programming in Java as a Second Language" },
    { name: "Human-Computer Interaction",                   course: "INF 131",          description: "Human-Computer Interaction" },
    { name: "User Interaction Software",                    course: "INF 133",          description: "User Interaction Software" },
    { name: "Requirements Analysis and Engineering",        course: "INF 113",          description: "Requirements Analysis and Engineering" },
    { name: "Software Testing and Quality Assurance",       course: "INF 115",          description: "Software Testing, Analysis, and Quality Assurance" },
    { name: "Artificial Intelligence",                      course: "CS 171",           description: "Introduction to Artificial Intelligence" },
    { name: "Machine Learning and Data Mining",             course: "CS 178",           description: "Machine Learning and Data-Mining" },
    { name: "Project in Artificial Intelligence",           course: "CS 175",           description: "Project in Artificial Intelligence (Natural Language Processing)" }
];
const deansHonorList = [
    { name: "Spring 2022" },
    { name: "Winter 2022" },
    { name: "Fall 2021" },
    { name: "Spring 2021" },
    { name: "Winter 2021" },
    { name: "Fall 2020" },
    { name: "Spring 2020" },
    { name: "Winter 2019" }
];

///// Skills
const backEnd = [
    { name: "C" },
    { name: "Java" },
    { name: "Python" },
    { name: "MySQL" },
    { name: "Bash" }
];
const frontEnd = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Angular" },
    { name: "Bootstrap" }
];
const platforms = [
    { name: "Amazon Web Services (EC2 ∙ S3 ∙ EMR ∙ RDS ∙ Route53)" },
    { name: "Apache Kafka" },
    { name: "Apacke Airflow" },
    { name: "Spring Boot" },
    { name: "Grafana" }
];
const developerTools = [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Command-Line" },
    { name: "Postman" },
    { name: "Android Studio" },
    { name: "Jira" },
    { name: "Confluence" },
    { name: "Figma" }
];
const certificates = [
    { name: "IBM Python for Data Science and AI",               link: "https://www.credly.com/badges/c0f56086-1981-46c2-9b6e-e160106935fd?source=linked_in_profile" },
    { name: "IBM AI Foundations For Everyone Specialization",   link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6CT8X79YEBGN" },
    { name: "AT&T Summer Learning Academy Extern",              link: "https://www.youracclaim.com/badges/bb54802a-6076-40f7-b2be-0f14f4365b87?source=linked_in_profile" }
];

// Functions
const relevantCourseworkContainer = document.querySelector('#relevantCoursework');
function addHTMLRelevantCoursework(e) {
    // HTML elements as string
    let html = `
      <div type=\"button\" 
        class=\"col-xs-auto col-sm-auto my-1\">
        <div tabindex=\"0\" 
            class=\"list-group-item text-center\" 
            data-bs-toggle=\"popover\" 
            data-bs-trigger=\"focus\" 
            data-bs-placement=\"auto\" 
            title=\"${e.course}\" 
            data-bs-content=\"${e.description}\">
            <p>
            ${e.name}
            </p>
        </div>
    </div>`;
      
    // Add HTML element before the end of #all_asset
    relevantCourseworkContainer.insertAdjacentHTML('beforeend', html);
}




// Loops
relevantCoursework.forEach(e => {
    addHTMLRelevantCoursework(e);
});
deansHonorList.forEach(e => {
    document.getElementById('deansHonorList').innerHTML += listGroupOpen + e.name + listGroupClose;
});
backEnd.forEach(e => {
    document.getElementById('backEnd').innerHTML += listGroupOpen + e.name + listGroupClose;
});
frontEnd.forEach(e => {
    document.getElementById('frontEnd').innerHTML += listGroupOpen + e.name + listGroupClose;
});
platforms.forEach(e => {
    document.getElementById('platforms').innerHTML += listGroupOpen + e.name + listGroupClose;
});
developerTools.forEach(e => {
    document.getElementById('developerTools').innerHTML += listGroupOpen + e.name + listGroupClose;
});
certificates.forEach(e => {
    document.getElementById('certificates').innerHTML += listLinkOpen + e.link + listLinkMiddle + e.name + listLinkClose;
});