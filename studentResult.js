// Initialize arrays and variables to hold teacher and student announcement data
let teacherTitle = [];
let studentTitle;

let teacherDescription = [];
let studentDescription;

let teacherDate = [];
let studentDate;

let teacherCategory = [];
let studentCategory;

let teacherClub = [];
let studentClub;

let teacherGrade9 = [];
let studentGrade9;

let teacherGrade10 = [];
let studentGrade10;

let teacherGrade11 = [];
let studentGrade11;

let teacherGrade12 = [];
let studentGrade12;

// Variable to store results that match search criteria
let searchResultsHolder = "";

// Function to display matching results based on student search inputs
function displayResults() {

    // Retrieve values from localStorage and parse them from JSON if needed
    teacherTitle = JSON.parse(localStorage.getItem("teacherTitleKey"));
    studentTitle = localStorage.getItem("studentTitleKey");

    teacherDescription = JSON.parse(localStorage.getItem("teacherDescriptionKey"));
    studentDescription = localStorage.getItem("studentDescriptionKey");

    teacherDate = JSON.parse(localStorage.getItem("teacherDateKey"));
    studentDate = localStorage.getItem("studentDateKey");

    teacherCategory = JSON.parse(localStorage.getItem("teacherCategoryKey"));
    studentCategory = localStorage.getItem("studentCategoryKey");

    teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
    studentClub = localStorage.getItem("studentClubKey");

    teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"));
    studentGrade9 = JSON.parse(localStorage.getItem("studentGrade9Key"));

    teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
    studentGrade10 = JSON.parse(localStorage.getItem("studentGrade10Key"));

    teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
    studentGrade11 = JSON.parse(localStorage.getItem("studentGrade11Key"));

    teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
    studentGrade12 = JSON.parse(localStorage.getItem("studentGrade12Key"));

    // Loop through each teacher announcement to compare with student inputs
    for (var i = 0; i < teacherTitle.length; i++) {
        if (
            // Check if any search fields match (case-insensitive)
            (studentTitle.trim().toUpperCase() === teacherTitle[i]?.trim().toUpperCase()) ||
            (studentDescription.trim().toUpperCase() === teacherDescription[i]?.trim().toUpperCase()) ||
            (studentDate.trim().toUpperCase() === teacherDate[i]?.trim().toUpperCase()) ||
            (studentCategory.trim() !== "" && studentCategory.trim().toUpperCase() === teacherCategory[i]?.trim().toUpperCase()) ||
            (studentClub.trim() !== "" && studentClub.trim().toUpperCase() === teacherClub[i]?.trim().toUpperCase()) ||
            (studentGrade9 && teacherGrade9[i] === true) ||
            (studentGrade10 && teacherGrade10[i] === true) ||
            (studentGrade11 && teacherGrade11[i] === true) ||
            (studentGrade12 && teacherGrade12[i] === true)
        ) {
            // If match found, build and append to results string
            searchResultsHolder +=
            
                "Title: " + (teacherTitle[i] || "No Title") + "\n" + 
                "Description: " + (teacherDescription[i] || "N/A") + "\n" +
                "Date: " + (teacherDate[i] || "N/A") + "\n" +
                "Club: " + (teacherClub[i] || "N/A") + "\n" +
                "Category: " + (teacherCategory[i] || "N/A") + "\n" +
                "Grades: " +
                (teacherGrade9[i] ? "9 " : "") +
                // the teachergrade is the condition and after? if its true it prints 9 if not after :
                (teacherGrade10[i] ? "10 " : "") +
                (teacherGrade11[i] ? "11 " : "") +
                (teacherGrade12[i] ? "12 " : "") +
                "\n\n";
        }
    }

    // Display the results in the appropriate HTML elements
    if (searchResultsHolder !== "") {
        // If results found, display them and clear individual detail fields
        document.getElementById("displayAnnT").innerText = searchResultsHolder;
        document.getElementById("displayAnnD").innerText = "";
        document.getElementById("displayAnnDa").innerText = "";
        document.getElementById("displayAnnCl").innerText = "";
        document.getElementById("displayAnnCa").innerText = "";
        document.getElementById("displayAnnG9").innerText = "";
        document.getElementById("displayAnnG10").innerText = "";
        document.getElementById("displayAnnG11").innerText = "";
        document.getElementById("displayAnnG12").innerText = "";
    } else {
        // If no matches, display message
        document.getElementById("displayAnnT").innerText = "Your search did not match with any of the existing announcements. Please try again 🙂";
    }
}
