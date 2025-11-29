function calculatePremium() {
    let age = document.getElementById("age").value;
    let cover = document.getElementById("cover").value;

    if (age < 18 || age > 65) {
        document.getElementById("result").innerText = "Eligible age: 18 to 65";
        return;
    }

    let base = cover * 0.001; 
    let ageFactor = age * 2;

    let premium = base + ageFactor;

    document.getElementById("result").innerText = 
        "Estimated Monthly Premium: ₹" + premium.toFixed(2);
}
