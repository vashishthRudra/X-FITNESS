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
