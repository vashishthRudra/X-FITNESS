const bmiModal = document.getElementById('bmiModal');
  const bmiBtn = document.getElementById('bmiBtn');
  const bmiClose = document.getElementById('bmiClose');

  bmiBtn.addEventListener('click', () => {
    bmiModal.style.display = 'block';
  });

  bmiClose.addEventListener('click', () => {
    bmiModal.style.display = 'none';
    resetFields();
  });
window.addEventListener('click', (event) => {
    if (event.target === bmiModal) {
      bmiModal.style.display = 'none';
      resetFields();
    }
  });
function calculateBMI() {
    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;
    const resultDiv = document.getElementById('bmiResult');
    const categoryDiv = document.getElementById('bmiCategory');
    const healthTipDiv = document.getElementById('healthTip');

    if (!weightInput || !heightInput || weightInput <= 0 || heightInput <= 0) {
      resultDiv.textContent = 'Please enter valid weight and height values.';
      categoryDiv.textContent = '';
      healthTipDiv.textContent = '';
      return;
    }
  let weightKg = weightUnit === 'lbs' ? weightInput * 0.453592 : parseFloat(weightInput);
    let heightM = heightUnit === 'in' ? heightInput * 0.0254 : heightInput / 100;

    const bmi = weightKg / (heightM * heightM);
    const bmiRounded = bmi.toFixed(2);

    resultDiv.textContent = `Your BMI is ${bmiRounded}`;

    let category = '';
    let healthTip = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      healthTip = 'Consider a balanced diet to gain weight healthily.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
      healthTip = 'Maintain your healthy lifestyle!';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
      healthTip = 'Consider regular exercise and a healthy diet.';
    } else {
      category = 'Obesity';
      healthTip = 'Consult a healthcare provider for guidance.';
    }
    categoryDiv.textContent = `Category: ${category}`;
    healthTipDiv.textContent = `Health Tip: ${healthTip}`;
  }

  function resetFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weightUnit').value = 'kg';
    document.getElementById('heightUnit').value = 'cm';
    document.getElementById('bmiResult').textContent = '';
    document.getElementById('bmiCategory').textContent = '';
    document.getElementById('healthTip').textContent = '';
  }
