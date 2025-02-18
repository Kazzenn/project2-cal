// คำนวณพื้นที่ของสามเหลี่ยม
function initTriangleCalculator() {
    const baseInput = document.getElementById("base");
    const heightInput = document.getElementById("height");
    const triangleAreaResult = document.getElementById("triangle-area");

    function calculateTriangleArea() {
        let base = parseFloat(baseInput.value);
        let height = parseFloat(heightInput.value);

        if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
            let area = 0.5 * base * height;
            triangleAreaResult.textContent = area.toFixed(2);
        } else {
            triangleAreaResult.textContent = "0.00";
        }
    }

    if (baseInput && heightInput) {
        baseInput.addEventListener("input", calculateTriangleArea);
        heightInput.addEventListener("input", calculateTriangleArea);
    }
}

// คำนวณพื้นที่ของสี่เหลี่ยม
function initRectangleCalculator() {
    const lengthInput = document.getElementById("length");
    const widthInput = document.getElementById("width");
    const rectangleAreaResult = document.getElementById("rectangle-area");

    function calculateRectangleArea() {
        let length = parseFloat(lengthInput.value);
        let width = parseFloat(widthInput.value);

        if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
            let area = length * width;
            rectangleAreaResult.textContent = area.toFixed(2);
        } else {
            rectangleAreaResult.textContent = "0.00";
        }
    }

    if (lengthInput && widthInput) {
        lengthInput.addEventListener("input", calculateRectangleArea);
        widthInput.addEventListener("input", calculateRectangleArea);
    }
}

// คำนวณพื้นที่ของวงกลม
// คำนวณพื้นที่ของวงกลม
function initCircleCalculator() {
    const radiusInput = document.getElementById("radius");
    const circleAreaResult = document.getElementById("circle-area");
    const circleCircumferenceResult = document.getElementById("circle-circumference");

    function calculateCircle() {
        let radius = parseFloat(radiusInput.value);

        if (!isNaN(radius) && radius > 0) {
            // คำนวณพื้นที่วงกลม
            let area = Math.PI * radius * radius;
            circleAreaResult.textContent = area.toFixed(2);  // พื้นที่วงกลม

            // คำนวณเส้นรอบวง
            let circumference = 2 * Math.PI * radius;
            circleCircumferenceResult.textContent = circumference.toFixed(2);  // เส้นรอบวง
        } else {
            circleAreaResult.textContent = "0.00";
            circleCircumferenceResult.textContent = "0.00";
        }
    }

    if (radiusInput) {
        radiusInput.addEventListener("input", calculateCircle);
    }
}



// Initializing all calculators
initTriangleCalculator();
initRectangleCalculator();
initCircleCalculator();
