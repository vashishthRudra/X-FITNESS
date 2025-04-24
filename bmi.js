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
