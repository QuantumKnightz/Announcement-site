var studentTitle;
var studentDescription;
var studentDate;
var studentClub;
var studentCategory;
var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;

function searchAnnouncement(addAnnForm) {

    // Title
    studentTitle = addAnnForm.titleS.value.trim();

    // Description
    studentDescription = addAnnForm.descriptionS.value.trim();

    // Date
    studentDate = addAnnForm.dateS.value.trim();

    // Grade checkboxes (9-12)
    studentGrade9 = addAnnForm.grade9S.checked;
    studentGrade10 = addAnnForm.grade10S.checked;
    studentGrade11 = addAnnForm.grade11S.checked;
    studentGrade12 = addAnnForm.grade12S.checked;

    // Club selection
    studentClub = addAnnForm.clubS.value;

    // Category selection
    studentCategory = addAnnForm.categoriesS.value;

    // Save to localStorage
    localStorage.setItem("studentTitleKey", studentTitle);
    localStorage.setItem("studentDescriptionKey", studentDescription);
    localStorage.setItem("studentDateKey", studentDate);
    localStorage.setItem("studentClubKey", studentClub);
    localStorage.setItem("studentCategoryKey", studentCategory);
    localStorage.setItem("studentGrade9Key", studentGrade9);
    localStorage.setItem("studentGrade10Key", studentGrade10);
    localStorage.setItem("studentGrade11Key", studentGrade11);
    localStorage.setItem("studentGrade12Key", studentGrade12);

    // Confirmation 
    alert("Search criteria saved successfully!");

}

function cancelSearch() {
    if (confirm("Are you sure you want to cancel? All changes will be lost.")) {
        document.getElementById("studentForm").reset();
    }
}