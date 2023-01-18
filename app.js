

function checkGrade() {

    let totalMarks = document.querySelector("#inpNum1").value;
    console.log("totalMarks", totalMarks)

    let obtainMarks = document.querySelector("#inpNum2").value;
    console.log("obtainMarks", obtainMarks)

    totalMarks = Number(totalMarks);
    obtainMarks = Number(obtainMarks);

    let validate = "";
    let result = "";

    if (isNaN(totalMarks)) {
        validate = "! Please Enter a Valid Total Marks";
        document.querySelector("#result").innerText = "";

    }

    if (isNaN(obtainMarks)) {
        validate = "! Please Enter a Valid Obtain Marks";
        document.querySelector("#result").innerText = "";

    }


    if (totalMarks < 1) {
        validate = "! Please Enter a Positive value for Total Marks";
        document.querySelector("#result").innerText = "";

    }

    if (totalMarks < 0) {
        validate = "! Please Enter a Positive value for Obtain Marks";
        document.querySelector("#result").innerText = "";

    }

    if (totalMarks < obtainMarks) {
        validate = "! Obtain marks can not be greater than tha total marks";
        document.querySelector("#result").innerText = "";

    }

    if (validate) {
        document.querySelector("#validation").innerText = validate;
        document.querySelector("#inpNum1").value = "";
        document.querySelector("#inpNum2").value = "";
        return;
    } else {
        document.querySelector("#validation").innerText = "";
        document.querySelector("#result").innerText = "";
    }

    let percentage = obtainMarks / totalMarks * 100;
    // percentage = Math.round(percentage)
    // percentage = percentage.toString().slice(0,5)
    percentage = percentage.toFixed(3)
    console.log("percentage", percentage)

    if (percentage < 50) {
        result = "Ops You are fail"
    } else if (percentage > 50 && percentage < 59) {
        result = " Good You have achieved Grade C"
    } else if (percentage > 59 && percentage < 69) {
        result = " Very Good You have achieved Grade B"
    } else if (percentage > 69 && percentage < 79) {
        result = " Marvellous You have achieved Grade A"
    }
    else {
        result = "Excellent You have achieved A+1"
    }

    if (result) {
        document.querySelector("#result").innerText = `${result} and percentage is ${percentage} %`;
        document.querySelector("#inpNum1").value = "";
        document.querySelector("#inpNum2").value = "";
    } else {
        document.querySelector("#result").innerText = "";
        document.querySelector("#validation").innerText = "";
    }
}

