console.log("cal loaded");

//คำนวณ BMI
function initBMICalculator() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const bmiResult = document.getElementById("bmi-result");

    function calculateBMI() {
        let weight = parseFloat(weightInput.value);
        let height = parseFloat(heightInput.value) / 100;

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            let bmi = weight / (height * height);
            bmiResult.textContent = bmi.toFixed(2);
        } else {
            bmiResult.textContent = "0.00";
        }
    } if (weightInput && heightInput) {
        weightInput.addEventListener("input", calculateBMI);
        heightInput.addEventListener("input", calculateBMI);
    }
}
initBMICalculator();

// เปอร์เซ็นต์เป็นจำนวน
function initPercentToValueCalculator() {
    const percentInput = document.getElementById("percent");
    const totalInput1 = document.getElementById("total-percent");
    const resultDisplay1 = document.getElementById("result-percent");

    function calculateValue() {
        let percent = parseFloat(percentInput.value);
        let total = parseFloat(totalInput1.value);

        if (!isNaN(percent) && !isNaN(total)) {
            let value = (percent / 100) * total;
            resultDisplay1.textContent = value.toFixed(2);
        } else {
            resultDisplay1.textContent = "0.00";
        }
    }

    if (percentInput && totalInput1) {
        percentInput.addEventListener("input", calculateValue);
        totalInput1.addEventListener("input", calculateValue);
    }
}
initPercentToValueCalculator();

// จำนวนเป็นเปอร์เซ็นต์
document.addEventListener("DOMContentLoaded", function () {
    function initValueToPercentCalculator() {
        const partInput = document.getElementById("part");
        const totalInput2 = document.getElementById("total-value");
        const resultDisplay2 = document.getElementById("result-value");

        function calculatePercentage() {
            let part = parseFloat(partInput.value) || 0;
            let total = parseFloat(totalInput2.value) || 0;

            if (total > 0) {
                let percentage = (part / total) * 100;
                resultDisplay2.textContent = percentage.toFixed(2);
            } else {
                resultDisplay2.textContent = "0.00"; 
            }
        }

        if (partInput && totalInput2) {
            partInput.addEventListener("input", calculatePercentage);
            totalInput2.addEventListener("input", calculatePercentage);
        }
    }
    initValueToPercentCalculator();
}
);


// แปลงทศนิยมเวลาเป็นเวลาจริง
function convertDecimalToTime() {
    const decimalTime = parseFloat(document.getElementById("decimal-time").value);
    if (!isNaN(decimalTime)) {
        let hours = Math.floor(decimalTime);
        let minutes = Math.round((decimalTime - hours) * 60);
        if (minutes < 10) minutes = "0" + minutes;  
        document.getElementById("real-time-output").textContent = `${hours}:${minutes}`;
    } else {
        document.getElementById("real-time-output").textContent = "กรุณากรอกค่าทศนิยมที่ถูกต้อง";
    }
}

// แปลงเวลาจริงเป็นทศนิยม
function convertTimeToDecimal() {
    const realTime = document.getElementById("real-time").value;
    const timeParts = realTime.split(":");
    if (timeParts.length === 2) {
        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        if (!isNaN(hours) && !isNaN(minutes) && minutes >= 0 && minutes < 60) {
            const decimalTime = hours + (minutes / 60);
            document.getElementById("decimal-time-output").textContent = decimalTime.toFixed(2);
        } else {
            document.getElementById("decimal-time-output").textContent = "กรุณากรอกเวลาในรูปแบบที่ถูกต้อง (HH:mm)";
        }
    } else {
        document.getElementById("decimal-time-output").textContent = "กรุณากรอกเวลาในรูปแบบที่ถูกต้อง (HH:mm)";
    }
}
document.getElementById("decimal-time").addEventListener("input", convertDecimalToTime);
document.getElementById("real-time").addEventListener("input", convertTimeToDecimal);


// แปลงวันเกิดจาก พ.ศ. เป็น ค.ศ. 
function convertBuddhistToGregorian() {
    const birthdayBuddhist = document.getElementById("birthday-buddhist").value;

    const regex = /^(\d{2})-(\d{2})-(\d{4})$/;
    const match = birthdayBuddhist.match(regex);

    if (match) {
        
        const day = match[1];
        const month = match[2];
        const buddhistYear = parseInt(match[3]);

        const gregorianYear = buddhistYear - 543;

        const gregorianDate = `${gregorianYear}-${month}-${day}`;
        document.getElementById("birthday-gregorian-output").textContent = gregorianDate;

        const birthDate = new Date(gregorianDate);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = currentDate.getMonth() - birthDate.getMonth();
        const dayDiff = currentDate.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        const months = monthDiff < 0 ? 12 + monthDiff : monthDiff;
        const days = (currentDate - new Date(currentDate.getFullYear(), currentDate.getMonth(), birthDate.getDate())) / (1000 * 60 * 60 * 24);

        document.getElementById("age-output").textContent = `${age} ปี ${months} เดือน ${dayDiff < 0 ? (new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() + dayDiff) : dayDiff} วัน`;
    } else {
        document.getElementById("birthday-gregorian-output").textContent = "กรุณากรอกวันเกิดในรูปแบบที่ถูกต้อง (วัน-เดือน-ปี)";
        document.getElementById("age-output").textContent = "";
    }
}