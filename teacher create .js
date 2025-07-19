// Arrays to store announcement data
var teacherTitle = [];
var teacherDescription = [];
var teacherDate = [];
var teacherClub = [];
var teacherCategory = [];
var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];

// Counter to track number of announcements
var counter = 0;

// Function to add a new announcement
function addNewAnnouncement(addAnnForm) {

    // If there is already saved data in localStorage, retrieve and parse it
    if (JSON.parse(localStorage.getItem("teacherTitleKey")) != null) {
        // Load previously saved data from localStorage into arrays
        teacherTitle = JSON.parse(localStorage.getItem("teacherTitleKey"));
        teacherDate = JSON.parse(localStorage.getItem("teacherDateKey"));
        teacherDescription = JSON.parse(localStorage.getItem("teacherDescriptionKey"));
        teacherCategory = JSON.parse(localStorage.getItem("teacherCategoryKey"));
        teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
        teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"));
        teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
        teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
        teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
        
        // Update counter to match number of existing announcements
        counter = teacherTitle.length;
    }

    // Get form input values and save them into arrays at the current counter index

    // Title
    teacherTitle[counter] = addAnnForm.titleT.value;

    // Description
    teacherDescription[counter] = addAnnForm.descriptionT.value;

    // Date
    teacherDate[counter] = addAnnForm.dateT.value;

    // Club
    teacherClub[counter] = addAnnForm.clubT.value;

    // Category
    teacherCategory[counter] = addAnnForm.categoriesT.value;

    // Grade checkboxes (true if checked, false if not)
    teacherGrade9[counter] = addAnnForm.grade9.checked;
    teacherGrade10[counter] = addAnnForm.grade10.checked;
    teacherGrade11[counter] = addAnnForm.grade11.checked;
    teacherGrade12[counter] = addAnnForm.grade12.checked;

    // Save updated arrays to localStorage
    localStorage.setItem("teacherTitleKey", JSON.stringify(teacherTitle));
    localStorage.setItem("teacherDescriptionKey", JSON.stringify(teacherDescription));
    localStorage.setItem("teacherDateKey", JSON.stringify(teacherDate));
    localStorage.setItem("teacherClubKey", JSON.stringify(teacherClub));
    localStorage.setItem("teacherCategoryKey", JSON.stringify(teacherCategory));
    localStorage.setItem("teacherGrade9Key", JSON.stringify(teacherGrade9));
    localStorage.setItem("teacherGrade10Key", JSON.stringify(teacherGrade10));
    localStorage.setItem("teacherGrade11Key", JSON.stringify(teacherGrade11));
    localStorage.setItem("teacherGrade12Key", JSON.stringify(teacherGrade12));

    // Show confirmation message
    alert("Announcement saved successfully!");

    // Move to the next index for the next announcement
    counter++;


}
    function cancelAnnouncement() {
    if (confirm("Are you sure you want to cancel? All changes will be lost.")) {
        // Just clear the form
        document.getElementById("announcementForm").reset();
    }

}
