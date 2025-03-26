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
            "Bachelor's in Science/Engineering/ComputerScience/IT or related fields",
            "Bachelor's in Bio/Life Sciences/ Medical/ Pharmacy",
            "Bachelor's in Commerce",
            "Bachelor's in Fashion/Interior Design or related fields",
            "Bachelor's in Education / Psychology / Physical Education",
            "Bachelor's in Others"
        ],
        "Postgraduate": ["Master's in Psychology","Master's in Others"]
    };

    // Courses based on categories
    const categoryCourses = {
        //PCM
        "PCM": ["Diploma in Fitness Nutrition", "Diploma in Logistics & Supply (Cargo Management)",
            "Diploma in Import and Export", "Diploma in Digital Marketing", "Diploma in Interior Designing",
            "Diploma in Photography", "Diploma in Screenplay Writing", "Diploma in Sindhi Language & Literature",
            "Diploma in Pharmacy", 
            "Certificate Course in Agriculture Communication",
            "Certificate Course in Digital Media", "Certificate Course in Film Appreciation",
            "Certificate Course in Sport Journalism", "Certificate Course in Knowledge Participation and Development",
            "Certificate Course in Sindhi Language",
             "B.Voc in Nutrition & Dietetics", "B.Voc in Software Development", "B.Voc in Landscape Design",
            "B.Voc in Interior Design ","B.Voc in Fashion Technology",
            "BA in Yogic Science", "BSW", "BA in Journalism & Mass Communication",
            "B.Sc. in Applied Statistics & Analytics", "B.Sc. in Yogic Science", "B.Sc. in Agriculture", "B.Sc. in Electronics, Computer Science and Mathematics",
            "B.Sc. Honours in Physics", "B.Sc. Honours in Applied Statistics and Analytics"
        ],


        //PCB
        "PCB": ["Diploma in Fitness Nutrition", "Diploma in Logistics & Supply (Cargo Management)",
            "Diploma in Import and Export", "Diploma in Digital Marketing", "Diploma in Interior Designing",
            "Diploma in Photography", "Diploma in Screenplay Writing", "Diploma in Sindhi Language & Literature",
            "Diploma in Pharmacy", 
            "Certificate Course in Agriculture Communication",
            "Certificate Course in Digital Media", "Certificate Course in Film Appreciation",
            "Certificate Course in Sport Journalism", "Certificate Course in Knowledge Participation and Development",
            "Certificate Course in Sindhi Language",
            "B.Voc in Nutrition & Dietetics", "B.Voc in Software Development", "B.Voc in Landscape Design",
            "B.Voc in Interior Design ","B.Voc in Fashion Technology",
            "BA in Yogic Science", "BSW", "BA in Journalism & Mass Communication", "B.Sc. in Yogic Science", "B.Sc. in Agriculture",
        ],

        //commerce and arts or any other degree

        "Others": ["Diploma in Fitness Nutrition", "Diploma in Logistics & Supply (Cargo Management)",
            "Diploma in Import and Export", "Diploma in Digital Marketing", "Diploma in Interior Designing",
            "Diploma in Photography", "Diploma in Screenplay Writing", "Diploma in Sindhi Language & Literature",
            "Diploma in Pharmacy", 
            "Certificate Course in Agriculture Communication",
            "Certificate Course in Digital Media", "Certificate Course in Film Appreciation",
            "Certificate Course in Sport Journalism", "Certificate Course in Knowledge Participation and Development",
            "Certificate Course in Sindhi Language",
            "B.Voc in Nutrition & Dietetics", "B.Voc in Software Development", "B.Voc in Landscape Design",
            "B.Voc in Interior Design ","B.Voc in Fashion Technology",
            "BA in Yogic Science", "BSW", "BA in Journalism & Mass Communication"],

        //Science,ENG/IT/CS

        "Bachelor's in Science/Engineering/ComputerScience/IT or related fields": ["M.Sc. in Data Science and Analytics","M.Sc. in Data Science for Logistics", "M.Tech in Logistics and Supply Chain Management", "M.Sc. in Chemistry",
                                                                                   "M.Sc. in Computer Science", "M.Sc. in Information Technology", "M.Sc. in Electronics and Communication", "MSc. in Applied Mathematics",
                                                                                   "M.Com in Accounting & Financial Control","M.Com in Bank Management","Diploma in Consumer Psychology & Advertising","PG Diploma in Guidance & Counselling", "PG Diploma in Labour Law & Personnel Management",
                                                                                   "PG Diploma in Human Rights","MA in Economics", "MA in Political Science", "MA in Sociology" ,"MA in Clinical Psychology " ,"MA in Journalism & Mass Communication",  
                                                                                   "MA in Health Communication" ,"MA in Film Studies"  ,"MBA in Rural Development" ,"MBA in Public Administration & Policy"
        ],

        //BIO/LIFE SCIENCE

        "Bachelor's in Bio/Life Sciences/ Medical/ Pharmacy": ["M.Sc. in Biochemistry","M.Sc. in Biotechnology",  "M.Sc. in Genetic Engineering","M.Sc. in Chemistry",
                                                               "M.Sc. in Bioinformatics" ,"M.Sc. in Industrial Microbiology" ,"M.Sc. in Life Sciences","Diploma in Consumer Psychology & Advertising","PG Diploma in Guidance & Counselling", "PG Diploma in Labour Law & Personnel Management",
                                  "PG Diploma in Human Rights","MA in Economics", "MA in Political Science", "MA in Sociology" ,"MA in Clinical Psychology " ,"MA in Journalism & Mass Communication",  
                                  "MA in Health Communication" ,"MA in Film Studies"  ,"MBA in Rural Development" ,"MBA in Public Administration & Policy"],


        //COMMERCE/SCIENCE

        "Bachelor's in Commerce": ["M.Com in Accounting & Financial Control","M.Com in Bank Management","Diploma in Consumer Psychology & Advertising","PG Diploma in Guidance & Counselling", "PG Diploma in Labour Law & Personnel Management",
                                  "PG Diploma in Human Rights","MA in Economics", "MA in Political Science", "MA in Sociology" ,"MA in Clinical Psychology " ,"MA in Journalism & Mass Communication",  
                                  "MA in Health Communication" ,"MA in Film Studies"  ,"MBA in Rural Development" ,"MBA in Public Administration & Policy"],

        //FASHION/INTERIOR

        "Bachelor's in Fashion/Interior Design or related fields": ["M.Voc in Fashion Technology", "M.Voc in Interior Design","M.Voc in Nutrition & Dietetics","M.Voc. in Software Development","Diploma in Consumer Psychology & Advertising","PG Diploma in Guidance & Counselling", "PG Diploma in Labour Law & Personnel Management",
                                  "PG Diploma in Human Rights","MA in Economics", "MA in Political Science", "MA in Sociology" ,"MA in Clinical Psychology " ,"MA in Journalism & Mass Communication",  
                                  "MA in Health Communication" ,"MA in Film Studies"  ,"MBA in Rural Development" ,"MBA in Public Administration & Policy"],

        //Bachelor's Degree in Education / Psychology / Physical Education

        "Bachelor's in Education / Psychology / Physical Education": ["MA in Sports Psychology","Master of Education","Master of Physical Education","Diploma in Consumer Psychology & Advertising","PG Diploma in Guidance & Counselling", "PG Diploma in Labour Law & Personnel Management",
                                  "PG Diploma in Human Rights","MA in Economics", "MA in Political Science", "MA in Sociology" ,"MA in Clinical Psychology " ,"MA in Journalism & Mass Communication",  
                                  "MA in Health Communication" ,"MA in Film Studies"  ,"MBA in Rural Development" ,"MBA in Public Administration & Policy"],

        // Bachelor's in OTHERS
        "Bachelor's in Others" : ["Diploma in Consumer Psychology & Advertising","PG Diploma in Guidance & Counselling", "PG Diploma in Labour Law & Personnel Management", "M.Voc. in Software Development",
                                  "PG Diploma in Human Rights","MA in Economics", "MA in Political Science", "MA in Sociology" ,"MA in Clinical Psychology " ,"MA in Journalism & Mass Communication",  
                                  "MA in Health Communication" ,"MA in Film Studies"  ,"MBA in Rural Development" ,"MBA in Public Administration & Policy","MA in Yoga"],

        //PG DIPLOMA

        "Master's in Psychology": ["PG Diploma Guidance & Counselling","PG Diploma in Labour Law & Personnel Management", "PG Diploma in Human Rights"],
        "Master's in Others" : ["PG Diploma in Labour Law & Personnel Management", "PG Diploma in Human Rights"]
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
