javascript
const form = document.getElementById('job-posting-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const jobTitle = document.getElementById('job-title').value;
    const jobDescription = document.getElementById('job-description').value;
    const location = document.getElementById('location').value;
    const jobType = document.getElementById('job-type').value;
    const category = document.getElementById('category').value;
    const experience = document.getElementById('experience').value;
    const salary = document.getElementById('salary').value;

    const response = await fetch('/api/job-postings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jobTitle,
            jobDescription,
            location,
            jobType,
            category,
            experience,
            salary,
        }),
    });

    const data = await response.json();

    if (data.success) {
        console.log('Job posted successfully!');
    } else {
        console.error('Error posting job:', data.error);
    }
});
