﻿var submit = document.getElementById("submitbutton");
var iAssignment = parseInt(document.getElementById("assignments").value);
var iGroupProject = parseInt(document.getElementById("groupproject").value);
var iQuizzes = parseInt(document.getElementById("quizzes").value);
var iExams = parseInt(document.getElementById("exams").value);
var iIntex = parseInt(document.getElementById("intex").value);
var iTotalgrade = 0
var sLetterGrade;



function calculateGrade() {
    alert("This is kind of working");
    iAssignment = iAssignment * .5;
    iGroupProject = iGroupProject * .1;
    iQuizzes = iQuizzes * .1;
    iExams = iExams * .2;
    iIntex = iIntex * .1;

    iTotalgrade = iAssignment + iGroupProject + iQuizzes + iExams + iIntex;

    if (iTotalgrade >= 94) {
        sLetterGrade = "A";
    }
    else if (94 > iTotalGrade >= 90){
        sLetterGrade = "A-";
    }
    else if (90 > iTotalGrade >= 87) {
        sLetterGrade = "B+";
    }
    else if (87 > iTotalGrade >= 84) {
        sLetterGrade = "B";
    }
    else if (84 > iTotalGrade >= 80) {
        sLetterGrade = "B-";
    }
    else if (80 > iTotalGrade >= 77) {
        sLetterGrade = "C+";
    }
    else if (77 > iTotalGrade >= 74) {
        sLetterGrade = "C";
    }
    else if (74 > iTotalGrade >= 70) {
        sLetterGrade = "C-";
    }
    else if (70 > iTotalGrade >= 67) {
        sLetterGrade = "D+";
    }
    else if (67 > iTotalGrade >= 64) {
        sLetterGrade = "D";
    }
    else if (64 > iTotalGrade >= 60) {
        sLetterGrade = "D-";
    }
    else {
        sLetterGrade = "E";
    }

    alert(sLetterGrade);
    

};