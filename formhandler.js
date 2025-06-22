import '../styles/base.scss';
import { checkForURL } from './checkForURL';

function handleSubmit(event) {
  event.preventDefault();
  const url = document.getElementById('url').value;

  if (!checkForURL(url)) {
    alert("Invalid URL");
    return;
  }

  fetch('http://localhost:8081/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('results').innerHTML = `
        <p><strong>Sentiment:</strong> ${data.score_tag}</p>
        <p><strong>Text:</strong> ${data.sentence_list?.[0]?.text || 'N/A'}</p>
      `;
    });
}

document.getElementById('urlForm').addEventListener('submit', handleSubmit);
export { handleSubmit };
