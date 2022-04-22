function calculate() {
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value / 100
    const result = document.getElementById('result')

    const BMIcalc = weight / (height * height)
    BMI = BMIcalc.toFixed(1)

    if (weight && height) {
      result.innerHTML = `BMI = ${BMI} kg/m²`
    } else {
      result.innerHTML = 'Please, insert the values!'
    }
}