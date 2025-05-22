document.addEventListener("DOMContentLoaded", function () {
    const previousEducationSelect = document.getElementById("previousEducation");
    const categoryDiv = document.getElementById("categorySelection");
    const categorySelect = document.getElementById("category");
    const courseSelectDiv = document.getElementById("courseSelection");
    const courseSelect = document.getElementById("course");

    // Categories based on previous education
    const categories = {
        "10+2": ["PCM", "PCB", "Others"],
        "Undergraduate": [
            "Bachelor's in Science/ComputerScience/IT or related fields",
            "B.E. or B.Tech",
            "Bachelor's in Bio/Life Sciences/ Medical/ Pharmacy",
            "Bachelor's in Commerce",
            "Bachelor's in Fashion/Interior Design or related fields",
            "Bachelor's in Education / Psychology / Physical Education",
            "Bachelor's in Others"
        ],
        "Postgraduate": ["Master's in Any Subject", "Master's in Science Field"]
    };

    // Courses based on categories
    const categoryCourses = {
        //PCM
        "PCM": ["B.Sc. Honours in Applied Statistics and Analytics","B.Sc. in Honours Physics","B.Sc. Honours in Mathematics","B.Sc. Honours in Agriculture","Diploma in Pharmacy(D.Pharma)", "Bachelor in Pharmacy(B.Pharma)","Diploma in Digital Marketing","Diploma in Fitness Nutrition","Diploma in Import and Export","Diploma in Logistics and Supply (Cargo Management)",
"B.Voc. in Landscape Design","B.Sc. in Yogic Science", "B.A. in Yogic Science","B.Voc. in Nutrition & Dietetics", "B.Voc. in Software Development","Diploma in Interior Designing","B.Voc. in Fashion Technology",
"B.Voc. in Interior Design","Certificate Course in Agriculture Communication","Certificate Course in Digital Media","Certificate Course in Film Appreciation","Certificate Course in Sport Journalism",
   "Diploma in Script Writing","Diploma in Photography",   "BA in Journalism & Mass Communication",  "BA in Journalism", "Certification Course in French/German/Spanish",
"Bachelor of Physical Education and Sports","Diploma in Sindhi Language & Literature","Certificate Course in Sindhi Language",
],


        //PCB
        "PCB": ["B.Sc. Honours in Agriculture","Diploma in Digital Marketing", "Diploma in Pharmacy(D.Pharma)", "Bachelor in Pharmacy(B.Pharma)","Diploma in Fitness Nutrition","Diploma in Import and Export","Diploma in Logistics and Supply (Cargo Management)",
"B.Voc. in Landscape Design","B.Sc. in Yogic Science", "B.A. in Yogic Science","B.Voc. in Nutrition & Dietetics", "B.Voc. in Software Development","Diploma in Interior Designing","B.Voc. in Fashion Technology",
"B.Voc. in Interior Design","Certificate Course in Agriculture Communication","Certificate Course in Digital Media","Certificate Course in Film Appreciation","Certificate Course in Sport Journalism",
"Diploma in Script Writing","Diploma in Photography", "BA in Journalism & Mass Communication","BA in Journalism","Certification Course in French/German/Spanish",
    "Bachelor of Physical Education and Sports","Diploma in Sindhi Language & Literature","Certificate Course in Sindhi Language",    ],

        //commerce and arts or any other degree

        "Others": [ "Diploma in Digital Marketing", "Diploma in Fitness Nutrition","Diploma in Import and Export","Diploma in Logistics and Supply (Cargo Management)",
"B.Voc. in Landscape Design","B.Sc. in Yogic Science","B.Voc. in Nutrition & Dietetics", "B.A. in Yogic Science", "B.Voc. in Software Development","Diploma in Interior Designing","B.Voc. in Fashion Technology",
"B.Voc. in Interior Design","Certificate Course in Agriculture Communication","Certificate Course in Digital Media","Certificate Course in Film Appreciation","Certificate Course in Sport Journalism",
"Diploma in Script Writing","Diploma in Photography", "BA in Journalism & Mass Communication","BA in Journalism","Certification Course in French/German/Spanish",
     "Bachelor of Physical Education and Sports", "Diploma in Sindhi Language & Literature","Certificate Course in Sindhi Language",  ],

        //Science,ENG/IT/CS

        "Bachelor's in Science/ComputerScience/IT or related fields": ["MCA (Open and Distance Learning)","Certificate course in Knowledge Participation and Development",  "Certificate course in Environmental Ethics","M.Sc. in Statistics","M.Sc. in Data Science for Logistics","M.Sc. in Applied Mathematics with specialization in Computing and Informatics",
            "Short term course in Embedded Systems and Internet of Things","M.Sc. in Chemistry","M.Com in Accounting & Financial Control","MBA Executive","M.Com in Bank Management",
"M.Sc. in Information Technology","M.Sc. in Computer Science","PGDCA","M.Sc. in Data Science and Analytics","MA in Economics","B.Sc. in Electronics, Computer Science and Mathematics",
"M.Sc. in Electronics and Communication","M.Tech in Embedded Systems","MA in Health Communication","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature",
"M.Sc. in Industrial Microbiology","M.Sc. in Life Sciences","M.Sc. in Mathematics", "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "PG Diploma in Functional Hindi Translation","Bachelor of Library and Information Science",
    "M.Sc. in Physics","M.Sc. in Physics-Material Science","MBA (Open and Distance Learning)", "M.A. in Yoga", "M.Sc. in Yoga","PG Diploma in Yoga Therapy", "M.A. in Sindhi","M.A. in Tribal Studies",  ],

        //engineering
        "B.E. or B.Tech" : ["MCA (Open and Distance Learning)","Certificate course in Knowledge Participation and Development","Certificate course in Environmental Ethics", "M.Sc. in Data Science for Logistics","M.Tech in Laser Science and Applications", "M.Tech in Logistics and Supply Chain Management", "M.Tech in Computer Engineering with Specialization In Software Engineering",
            "M.Tech in Electronics with specialization in Digital Instrumentation","M.Tech in Electronics with Specialization In Digital Communication",
            "M.Tech in Industrial Engineering & Management","M.Tech in Mechanical Engineering with specialization in Design and Thermal","M.Tech in Information Technology with specialization in Information Security",
            "M.Tech in Microelectronics & VLSI Design","M.Sc. in Applied Mathematics with specialization in Computing and Informatics","Short term course in Embedded Systems and Internet of Things",
"MBA Executive","M.Tech in Computer Science","M.Tech in Information Architecture & Software Engineering","M.Tech in Network Management & Information Security",
"M.Tech in Computer Science Executive","PGDCA","M.Sc. in Data Science and Analytics","M.Tech in Embedded Systems Executive", "M.Tech in Data Science","M.Tech in Big Data Analytics","M.Tech in Data Science (Executive)",
"MA in Economics","PG Diploma in Climate Action and Sustainability","M.Tech in Energy Management","M.Tech in Energy Management (Executive)","M.Tech in Instrumentation",
"M.Tech in Instrumentation Executive","M.Tech in Internet of Things","MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication",
"M.A. in Functional Hindi Translation and Literature", "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "PG Diploma in Functional Hindi Translation","Bachelor of Library and Information Science",
"M.A. in Yoga", "M.Sc. in Yoga","PG Diploma in Yoga Therapy","M.A. in Sindhi","M.A. in Tribal Studies","MBA (Open and Distance Learning)",
        ],
        //BIO/LIFE SCIENCE

        "Bachelor's in Bio/Life Sciences/ Medical/ Pharmacy": ["Certificate course in Knowledge Participation and Development","Certificate course in Environmental Ethics","M.Sc. in Biochemistry","M.Sc. in Biotechnology","M.Sc. in Genetic Engineering","M.Sc. in Bioinformatics",
            "MBA Executive",  "PGDCA", "MA in Economics","MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication",
   "M.A. in Functional Hindi Translation and Literature",    "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "PG Diploma in Functional Hindi Translation","Bachelor of Library and Information Science",
   "M.A. in Yoga", "M.Sc. in Yoga","PG Diploma in Yoga Therapy","M.A. in Sindhi","M.A. in Tribal Studies","MBA (Open and Distance Learning)",
  ],


        //COMMERCE/SCIENCE

        "Bachelor's in Commerce": ["Certificate course in Knowledge Participation and Development","Certificate course in Environmental Ethics", "M.Com in Accounting & Financial Control","M.Com in Bank Management", "MBA Executive", "PGDCA","MA in Economics",
            "MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature",
            "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "PG Diploma in Functional Hindi Translation","Bachelor of Library and Information Science",
        "M.A. in Yoga", "M.Sc. in Yoga","PG Diploma in Yoga Therapy","M.A. in Sindhi","M.A. in Tribal Studies","MBA (Open and Distance Learning)", ],

        //FASHION/INTERIOR

        "Bachelor's in Fashion/Interior Design or related fields": ["Certificate course in Knowledge Participation and Development","Certificate course in Environmental Ethics", "M.Voc. in Fashion Technology","MBA Executive","PGDCA","MA in Economics","MA in Health Communication",
"MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature", "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "PG Diploma in Functional Hindi Translation","Bachelor of Library and Information Science",
"M.A. in Yoga", "M.Sc. in Yoga","PG Diploma in Yoga Therapy","M.A. in Sindhi","M.A. in Tribal Studies","MBA (Open and Distance Learning)",
        ],

        //Bachelor's Degree in Education / Psychology / Physical Education

        "Bachelor's in Education / Psychology / Physical Education": ["Certificate course in Knowledge Participation and Development","Certificate course in Environmental Ethics","MBA Executive","PGDCA","MA in Economics","MA in Health Communication",
"MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature", "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "PG Diploma in Functional Hindi Translation","Bachelor of Library and Information Science",
"M.A. in Yoga", "M.Sc. in Yoga","PG Diploma in Yoga Therapy","M.A. in Sindhi","M.A. in Tribal Studies","MBA (Open and Distance Learning)",
        ],

        // Bachelor's in OTHERS
        "Bachelor's in Others" : ["Certificate course in Knowledge Participation and Development","Certificate course in Environmental Ethics","M.Voc. in Nutrition & Dietetics","MBA Executive","PGDCA", "MA in Economics","MA in Health Communication",
            "MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature","Master of Library and Information Science",
            "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "PG Diploma in Functional Hindi Translation","Bachelor of Library and Information Science",
        "M.A. in Sports Psychology", "M.A. in Yoga", "M.Sc. in Yoga","MBA (Open and Distance Learning)","PG Diploma in Yoga Therapy","M.A. in Sindhi","M.A. in Tribal Studies",
        ],

        //PG DIPLOMA
        "Master's in Science Field" : ["M.Tech in Information Architecture & Software Engineering","M.Tech in Logistics and Supply Chain Management","MTech in Microelectronics & VLSI Design","MBA Executive","M.Tech in Computer Science",
            "M.Tech in Network Management & Information Security","M.Tech in Computer Science Executive", "M.Tech in Data Science","M.Tech in Big Data Analytics","M.Tech in Data Science (Executive)",
        "M.Tech in Embedded Systems","PG Diploma in Climate Action and Sustainability","M.Tech in Energy Management","M.Tech in Energy Management (Executive)","M.Tech in Instrumentation",
        "M.Tech in Instrumentation Executive","M.Tech in Internet of Things","M.Tech in Laser Science and Applications","M.Tech in Embedded Systems Executive",
        ],
         "Master's in Any Subject" : ["MBA Executive",]
    };

    // Hide category & course selection initially
    categoryDiv.style.display = "none";
    courseSelectDiv.style.display = "none";

    // Show categories based on education selection
    previousEducationSelect.addEventListener("change", function () {
        categorySelect.innerHTML = ""; // Clear previous options
        courseSelect.innerHTML = ""; // Clear course options
        categoryDiv.style.display = "none";
        courseSelectDiv.style.display = "none";

        const selectedEducation = previousEducationSelect.value;

        if (selectedEducation && categories[selectedEducation]) {
            let defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "-- Select Category --";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            categorySelect.appendChild(defaultOption);

            categories[selectedEducation].forEach(category => {
                let option = document.createElement("option");
                option.value = category;
                option.name = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });

            categoryDiv.style.display = "block"; // Show category selection
        }
    }); 

    // Show courses based on selected category
    categorySelect.addEventListener("change", function () {
        courseSelect.innerHTML = ""; // Clear previous options
        courseSelectDiv.style.display = "none";

        const selectedCategory = categorySelect.value;

        if (selectedCategory && categoryCourses[selectedCategory]) {
            let defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "-- Select Course --";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            courseSelect.appendChild(defaultOption);

            categoryCourses[selectedCategory].forEach(course => {
                 let option = document.createElement("option");
                 option.value = course;     
                 option.name = course;  
                 option.textContent = course;    
                 courseSelect.appendChild(option);
            });

            courseSelectDiv.style.display = "block"; // Show course selection
        }
    });

        // Handle course selection changes to ignore the disabled option
    courseSelect.addEventListener('mousedown', function(event) {
        if (event.button !== 0) return;
        const option = event.target;
        if (option.tagName === 'OPTION' && !option.disabled) {
            event.preventDefault();
            option.selected = !option.selected;
            
            // Update the selected courses display
            const selectedCoursesList = document.querySelector('#selectedCourses ul');
            if (option.selected && !selectedCoursesList.querySelector(`li[data-value="${option.value}"]`)) {
                const li = document.createElement('li');
                li.setAttribute('data-value', option.value);
                li.innerHTML = `
                    ${option.text}
                    <button type="button" onclick="removeCourse('${option.value}')">×</button>
                `;
                selectedCoursesList.appendChild(li);
            }
        }
    });

    // Function to remove a course
    window.removeCourse = function(courseValue) {
        const option = courseSelect.querySelector(`option[value="${courseValue}"]`);
        const selectedCoursesList = document.querySelector('#selectedCourses ul');
        const courseElement = selectedCoursesList.querySelector(`li[data-value="${courseValue}"]`);
        
        if (option) {
            option.selected = false;
        }
        if (courseElement) {
            courseElement.remove();
        }
    };

    // Handle form submission
    // form.addEventListener("submit", function (event) {
    //     event.preventDefault();

    //     const selectedCourse = courseSelect.value;

    //     if (!selectedCourse) {
    //         alert("Please select a valid course.");
    //         return;
    //     }

    //     alert("Your application has been submitted! We will share eligible courses via email.");
    //     // window.location.href = "pdf.html"; // Redirect to PDF page
    // });
});
