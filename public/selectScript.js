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
        "Postgraduate": ["Master's in Any Subject"]
    };

    // Courses based on categories
    const categoryCourses = {
        //PCM
        "PCM": ["Diploma in Sindhi Language & Literature","Diploma in Digital Marketing","Diploma in Fitness Nutrition","Diploma in Import and Export","Diploma in Logistics and Supply (Cargo Management)","Diploma in Interior Designing",
                "B.Voc in Landscape Design","B.Voc in Nutrition & Dietetics","B.Voc in Software Development","B.Voc in Fashion Technology","B.Voc in Interior Design","Certificate Course in Agriculture Communication",
               "Certificate Course in Sindhi Language", "Certificate Course in Digital Media","Certificate Course in Film Appreciation","Certificate Course in Sport Journalism","Diploma in Screenplay Writing","Diploma in Photography",
                "BA in Journalism & Mass Communication","Certification Course in French/German","B.Sc. Honours in Agriculture","M.Sc. in Mathematics","B.Sc. in Electronics, Computer Science and Mathematics","B.Sc. Honours in Mathematics","Diploma in Pharmacy(D.Pharma)",
                "Bachelor of Physical Education and Sports", "B.Sc. in Honours Physics", "B.Sc. Honours in Applied Statistics and Analytics","B.A. in Yogic Science","B.Sc. in Yogic Science",
        ],


        //PCB
        "PCB": [ "Diploma in Sindhi Language & Literature","Diploma in Digital Marketing","Diploma in Fitness Nutrition","Diploma in Import and Export","Diploma in Logistics and Supply (Cargo Management)","Diploma in Interior Designing",
                 "B.Voc in Landscape Design","B.Voc in Nutrition & Dietetics","B.Voc in Software Development","B.Voc in Fashion Technology","B.Voc in Interior Design","Certificate Course in Agriculture Communication",
                 "Certificate Course in Sindhi Language","Certificate Course in Digital Media","Certificate Course in Film Appreciation","Certificate Course in Sport Journalism","Diploma in Screenplay Writing","Diploma in Photography",
                 "BA in Journalism & Mass Communication","Certification Course in French/German","B.Sc. Honours in Agriculture","Diploma in Pharmacy(D.Pharma)","Bachelor of Physical Education and Sports","B.A. in Yogic Science",
                 "B.Sc. in Yogic Science",

        ],

        //commerce and arts or any other degree

        "Others": ["Diploma in Sindhi Language & Literature","Diploma in Digital Marketing","Diploma in Fitness Nutrition","Diploma in Import and Export","Diploma in Logistics and Supply (Cargo Management)","Diploma in Interior Designing",
                   "B.Voc in Landscape Design","B.Voc in Nutrition & Dietetics","B.Voc in Software Development","B.Voc in Fashion Technology","B.Voc in Interior Design","Certificate Course in Agriculture Communication",
                   "Certificate Course in Sindhi Language","Certificate Course in Digital Media","Certificate Course in Film Appreciation","Certificate Course in Sport Journalism","Diploma in Screenplay Writing","Diploma in Photography",
                   "BA in Journalism & Mass Communication","Certification Course in French/German","Bachelor of Physical Education and Sports","B.A. in Yogic Science","B.Sc. in Yogic Science",

        ],

        //Science,ENG/IT/CS

        "Bachelor's in Science/ComputerScience/IT or related fields": ["M.Sc. in Data Science for Logistics","M.Tech in Logistics and Supply Chain Management", "MSc. in Applied Mathematics",
            "M.Sc. in Chemistry","M.Com in Accounting & Financial Control","M.Sc. in Physics","M.Sc. in Physics-Material Science",
            "M.Com in Bank Management", "M.Sc. in Information Technology", "M.Sc. in Computer Science","M.Sc. in Data Science and Analytics",
            "M.Sc. in Electronics and Communication","M.Sc. in Industrial Microbiology","M.Sc. in Life Sciences","M.Sc. in Statistics","PG Diploma in Yoga Therapy","MBA Executive","M.A. in Women Empowerment & Lifelong Learning","Certificate Course in Knowledge Participation and Development",
            "PGDCA","MA in Economics","BA in Journalism","MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature",
            "M.A. in Sanskrit−Jyotish","M.A. in English Literature","Bachelor of Library and Information Science","M.A. in Yoga","M.A. in Sindhi","M.A. in Tribal Studies",
       
        ],

        //engineering
        "B.E. or B.Tech" : ["M.E. in Computer Engineering","M.E. in Electronics with specialization in Digital Instrumentation", "M.E. in Electronics with Specialization In Digital Communication","M.E. in Industrial Engineering & Management",
            "M.E. in Mechanical Engineering","MTech in Microelectronics & VLSI Design","PG Diploma in Climate Action and Sustainability","M.Sc. in Data Science for Logistics","M.Tech in Logistics and Supply Chain Management", "MSc. in Applied Mathematics",
            "M.Sc. in Chemistry","M.Com in Accounting & Financial Control","M.Sc. in Physics","M.Sc. in Physics-Material Science",
            "M.Com in Bank Management", 
            "M.Sc. in Electronics and Communication","M.Sc. in Industrial Microbiology","M.Sc. in Life Sciences","M.Sc. in Statistics","PG Diploma in Yoga Therapy","MBA Executive","M.A. in Women Empowerment & Lifelong Learning","Certificate Course in Knowledge Participation and Development",
            "PGDCA","MA in Economics","BA in Journalism","MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature",
            "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "Bachelor of Library and Information Science","M.A. in Yoga","M.A. in Sindhi","M.A. in Tribal Studies",
        ],
        //BIO/LIFE SCIENCE

        "Bachelor's in Bio/Life Sciences/ Medical/ Pharmacy": ["M.Sc. in Biochemistry","M.Sc. in Biotechnology","M.Sc. in Genetic Engineering","M.Sc. in Bioinformatics","PG Diploma in Yoga Therapy","MBA Executive","M.A. in Women Empowerment & Lifelong Learning","Certificate Course in Knowledge Participation and Development",
            "PGDCA","MA in Economics","BA in Journalism","MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature",
            "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "Bachelor of Library and Information Science","M.A. in Yoga","M.A. in Sindhi","M.A. in Tribal Studies",
       ],


        //COMMERCE/SCIENCE

        "Bachelor's in Commerce": ["M.Com in Accounting & Financial Control","M.Com in Bank Management","PG Diploma in Yoga Therapy","MBA Executive","M.A. in Women Empowerment & Lifelong Learning","Certificate Course in Knowledge Participation and Development",
            "PGDCA","MA in Economics","BA in Journalism","MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature",
            "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "Bachelor of Library and Information Science","M.A. in Yoga","M.A. in Sindhi","M.A. in Tribal Studies",
       ],

        //FASHION/INTERIOR

        "Bachelor's in Fashion/Interior Design or related fields": ["M.Voc in Fashion Technology","PG Diploma in Yoga Therapy","MBA Executive","M.A. in Women Empowerment & Lifelong Learning","Certificate Course in Knowledge Participation and Development",
            "PGDCA","MA in Economics","BA in Journalism","MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature",
            "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "Bachelor of Library and Information Science","M.A. in Yoga","M.A. in Sindhi","M.A. in Tribal Studies",
       ],

        //Bachelor's Degree in Education / Psychology / Physical Education

        "Bachelor's in Education / Psychology / Physical Education": ["M.A. in Sports Psychology","Master of Physical Education","PG Diploma in Yoga Therapy","MBA Executive","M.Voc. in Software Development","M.A. in Women Empowerment & Lifelong Learning","Certificate Course in Knowledge Participation and Development",
            "PGDCA","MA in Economics","BA in Journalism","MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature",
            "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "Bachelor of Library and Information Science","M.A. in Yoga","M.A. in Sindhi","M.A. in Tribal Studies",
       ],

        // Bachelor's in OTHERS
        "Bachelor's in Others" : ["PG Diploma in Yoga Therapy","MBA Executive","M.Voc. in Software Development","M.Voc in Nutrition & Dietetics","M.A. in Women Empowerment & Lifelong Learning","Certificate Course in Knowledge Participation and Development",
            "PGDCA","MA in Economics","BA in Journalism","MA in Health Communication","MA in Film Studies","MA in Journalism & Mass Communication","M.A. in Functional Hindi Translation and Literature",
            "M.A. in Sanskrit−Jyotish","M.A. in English Literature", "Master of Library and Information Science","Bachelor of Library and Information Science","M.A. in Yoga","M.A. in Sindhi","M.A. in Tribal Studies",
        ],

        //PG DIPLOMA
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
