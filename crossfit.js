// Hover and click effect on plan cards
  const plans = document.querySelectorAll('.plan');
  plans.forEach(plan => {
    plan.addEventListener('mouseenter', () => {
      plan.style.backgroundColor = '#ffe6e6';
      plan.style.transform = 'scale(1.02)';
      plan.style.transition = '0.3s ease-in-out';
    });
    plan.addEventListener('mouseleave', () => {
      plan.style.backgroundColor = '#fff0f0';
      plan.style.transform = 'scale(1)';
    });
    plan.addEventListener('click', () => {
      const planName = plan.querySelector('h3').innerText;
      alert(You clicked on "${planName}". Enrollments coming soon!);
    });
  });
