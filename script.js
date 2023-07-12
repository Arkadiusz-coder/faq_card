
const questions = document.querySelectorAll('.QA');

questions.forEach(question => {
  const questionText = question.querySelector('.question');
  const answer = question.querySelector('.answer');
  const arrow = question.querySelector('.arrow-img');

  questionText.addEventListener('click', () => {
    const isActive = question.classList.contains('active');
    questions.forEach(q => {
      q.classList.remove('active');
      q.querySelector('.question').style.fontWeight = 'normal';
      q.querySelector('.arrow-img').style.transform = 'rotate(0)';
      q.querySelector('.answer').style.display = 'none';
    });

    if (!isActive) {
      question.classList.add('active');
      questionText.style.fontWeight = 'bold';
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(180deg)';
    }
  });
});
