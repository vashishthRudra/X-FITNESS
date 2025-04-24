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
