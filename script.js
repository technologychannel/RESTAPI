// Add active class to current page in sidebar
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle
    const menuButton = document.createElement('button');
    menuButton.className = 'md:hidden fixed top-4 right-4 bg-gray-800 text-white p-2 rounded';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(menuButton);

    const sidebar = document.querySelector('.sidebar');
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });

    // Code copy functionality
    document.querySelectorAll('pre').forEach((pre) => {
        const copyButton = document.createElement('button');
        copyButton.className = 'absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm';
        copyButton.textContent = 'Copy';
        pre.style.position = 'relative';
        pre.appendChild(copyButton);

        copyButton.addEventListener('click', () => {
            const code = pre.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            });
        });
    });
});

// Quiz answer checking function for day2.html
function checkAnswers() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'day2.html') {
        const answers = {
            q1: 'A', // GET is idempotent
            q2: 'B', // 201 Created
            q3: 'False', // GET requests typically don't have a body
            q4: 'False', // POST requests are not safe methods
            q5a: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', // Title of post 1
            q5b: '201' // Status code for successful POST
        };

        let score = 0;
        const totalQuestions = 5;

        // Check multiple choice and true/false
        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const answer = selected.parentElement.textContent.trim();
                if (answer.startsWith(answers[`q${i}`])) {
                    score++;
                    selected.parentElement.classList.add('text-green-600');
                } else {
                    selected.parentElement.classList.add('text-red-600');
                }
            }
        }

        // Check practical exercise
        const postTitle = document.querySelector('input[type="text"]').value;
        const statusCode = document.querySelector('input[type="number"]').value;

        if (postTitle === answers.q5a) {
            score++;
            document.querySelector('input[type="text"]').classList.add('border-green-500');
        } else {
            document.querySelector('input[type="text"]').classList.add('border-red-500');
        }

        if (statusCode === answers.q5b) {
            score++;
            document.querySelector('input[type="number"]').classList.add('border-green-500');
        } else {
            document.querySelector('input[type="number"]').classList.add('border-red-500');
        }

        // Show result
        alert(`You scored ${score} out of ${totalQuestions}!`);
    }
}

// Quiz answer checking function for day3.html
function checkAnswers() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'day3.html') {
        const answers = {
            q1: 'B', // 201 Created
            q2: 'B', // Too Many Requests
            q3: 'False', // 500 is a server-side error
            q4: 'True', // Both are redirects
            q5a: '404', // Not Found
            q5b: '200', // OK
            q5c: '400' // Bad Request
        };

        let score = 0;
        const totalQuestions = 5;

        // Check multiple choice and true/false
        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const answer = selected.parentElement.textContent.trim();
                if (answer.startsWith(answers[`q${i}`])) {
                    score++;
                    selected.parentElement.classList.add('text-green-600');
                } else {
                    selected.parentElement.classList.add('text-red-600');
                }
            }
        }

        // Check practical exercise
        const statusCodes = document.querySelectorAll('input[type="number"]');
        const expectedCodes = ['q5a', 'q5b', 'q5c'];

        statusCodes.forEach((input, index) => {
            if (input.value === answers[expectedCodes[index]]) {
                score++;
                input.classList.add('border-green-500');
            } else {
                input.classList.add('border-red-500');
            }
        });

        // Show result
        alert(`You scored ${score} out of ${totalQuestions}!`);
    }
}

// Quiz answer checking function for day4.html
function checkAnswers() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'day4.html') {
        const answers = {
            q1: 'B', // PUT is used to completely replace a resource
            q2: 'B', // 204 No Content
            q3: 'True', // PUT requests are idempotent
            q4: 'False', // DELETE requests typically don't have a body
            q5a: '200', // PUT request status code
            q5b: '200' // DELETE request status code
        };

        let score = 0;
        const totalQuestions = 5;

        // Check multiple choice and true/false
        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const answer = selected.parentElement.textContent.trim();
                if (answer.startsWith(answers[`q${i}`])) {
                    score++;
                    selected.parentElement.classList.add('text-green-600');
                } else {
                    selected.parentElement.classList.add('text-red-600');
                }
            }
        }

        // Check practical exercise
        const statusCodes = document.querySelectorAll('input[type="number"]');
        const expectedCodes = ['q5a', 'q5b'];

        statusCodes.forEach((input, index) => {
            if (input.value === answers[expectedCodes[index]]) {
                score++;
                input.classList.add('border-green-500');
            } else {
                input.classList.add('border-red-500');
            }
        });

        // Show result
        alert(`You scored ${score} out of ${totalQuestions}!`);
    }
}

// Quiz answer checking function for day5.html
function checkAnswers() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'day5.html') {
        const answers = {
            q1: 'A', // Basic Authentication
            q2: 'C', // OAuth 2.0
            q3: 'True', // Bearer tokens should be kept secret
            q4: 'False', // OAuth 2.0 is for both authentication and authorization
            q5a: 'Authorization', // Header name
            q5b: '401' // Status code for invalid token
        };

        let score = 0;
        const totalQuestions = 5;

        // Check multiple choice and true/false
        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const answer = selected.parentElement.textContent.trim();
                if (answer.startsWith(answers[`q${i}`])) {
                    score++;
                    selected.parentElement.classList.add('text-green-600');
                } else {
                    selected.parentElement.classList.add('text-red-600');
                }
            }
        }

        // Check practical exercise
        const headerInput = document.querySelector('input[type="text"]');
        const statusInput = document.querySelector('input[type="number"]');

        if (headerInput.value.trim().toLowerCase() === answers.q5a.toLowerCase()) {
            score++;
            headerInput.classList.add('border-green-500');
        } else {
            headerInput.classList.add('border-red-500');
        }

        if (statusInput.value === answers.q5b) {
            score++;
            statusInput.classList.add('border-green-500');
        } else {
            statusInput.classList.add('border-red-500');
        }

        // Show result
        alert(`You scored ${score} out of ${totalQuestions}!`);
    }
}

// Quiz answer checking function for day6.html
function checkAnswers() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'day6.html') {
        const answers = {
            q1: 'B', // Content-Type
            q2: 'B', // After a ? symbol
            q3: 'True', // Accept header tells server what client can handle
            q4: 'True', // Query parameters are case-sensitive
            q5a: '5', // Number of comments for postId=1
            q5b: 'application/json; charset=utf-8' // Content-Type header value
        };

        let score = 0;
        const totalQuestions = 5;

        // Check multiple choice and true/false
        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const answer = selected.parentElement.textContent.trim();
                if (answer.startsWith(answers[`q${i}`])) {
                    score++;
                    selected.parentElement.classList.add('text-green-600');
                } else {
                    selected.parentElement.classList.add('text-red-600');
                }
            }
        }

        // Check practical exercise
        const numComments = document.querySelector('input[type="number"]').value;
        const headerValue = document.querySelector('input[type="text"]').value.trim().toLowerCase();

        if (numComments === answers.q5a) {
            score++;
            document.querySelector('input[type="number"]').classList.add('border-green-500');
        } else {
            document.querySelector('input[type="number"]').classList.add('border-red-500');
        }

        if (headerValue === answers.q5b) {
            score++;
            document.querySelector('input[type="text"]').classList.add('border-green-500');
        } else {
            document.querySelector('input[type="text"]').classList.add('border-red-500');
        }

        // Show result
        alert(`You scored ${score} out of ${totalQuestions}!`);
    }
}

// Quiz answer checking function for day7.html
function checkAnswers() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'day7.html') {
        const answers = {
            q1: 'B', // To simulate API responses without a real backend
            q2: 'C', // Both A and B
            q3: 'True', // Mock APIs help frontend devs
            q4: 'False', // Mock APIs do not return real data
            q5a: '200', // Status code for successful GET
            q5b: '{"message": "success"}' // Example JSON response (accept any non-empty)
        };

        let score = 0;
        const totalQuestions = 5;

        // Check multiple choice and true/false
        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const answer = selected.parentElement.textContent.trim();
                if (answer.startsWith(answers[`q${i}`])) {
                    score++;
                    selected.parentElement.classList.add('text-green-600');
                } else {
                    selected.parentElement.classList.add('text-red-600');
                }
            }
        }

        // Check practical exercise
        const statusInput = document.querySelector('input[type="number"]');
        const jsonInput = document.querySelector('input[type="text"]');

        if (statusInput.value === answers.q5a) {
            score++;
            statusInput.classList.add('border-green-500');
        } else {
            statusInput.classList.add('border-red-500');
        }

        if (jsonInput.value.trim().length > 0) {
            score++;
            jsonInput.classList.add('border-green-500');
        } else {
            jsonInput.classList.add('border-red-500');
        }

        // Show result
        alert(`You scored ${score} out of ${totalQuestions}!`);
    }
}

// Quiz answer checking function for day8.html
function checkAnswers() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'day8.html') {
        const answers = {
            q1: 'C', // Both A and B
            q2: 'A', // Faster feedback and regression testing
            q3: 'True', // Automated API tests can be run in CI/CD
            q4: 'False', // Not only for large projects
            q5a: '200', // Status code for GET /posts/1
            q5b: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' // Title of post 1
        };

        let score = 0;
        const totalQuestions = 5;

        // Check multiple choice and true/false
        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const answer = selected.parentElement.textContent.trim();
                if (answer.startsWith(answers[`q${i}`])) {
                    score++;
                    selected.parentElement.classList.add('text-green-600');
                } else {
                    selected.parentElement.classList.add('text-red-600');
                }
            }
        }

        // Check practical exercise
        const statusInput = document.querySelector('input[type="number"]');
        const titleInput = document.querySelector('input[type="text"]');

        if (statusInput.value === answers.q5a) {
            score++;
            statusInput.classList.add('border-green-500');
        } else {
            statusInput.classList.add('border-red-500');
        }

        if (titleInput.value.trim() === answers.q5b) {
            score++;
            titleInput.classList.add('border-green-500');
        } else {
            titleInput.classList.add('border-red-500');
        }

        // Show result
        alert(`You scored ${score} out of ${totalQuestions}!`);
    }
}

// Quiz answer checking function for day9.html
function checkAnswers() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'day9.html') {
        const answers = {
            q1: 'B', // 401 Unauthorized
            q2: 'A', // Too Many Requests
            q3: 'True', // 404 means not found
            q4: 'False', // APIs should not always return 200 OK
            q5a: '404', // Non-existent endpoint
            q5b: '429' // Rate limit exceeded
        };

        let score = 0;
        const totalQuestions = 5;

        // Check multiple choice and true/false
        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const answer = selected.parentElement.textContent.trim();
                if (answer.startsWith(answers[`q${i}`])) {
                    score++;
                    selected.parentElement.classList.add('text-green-600');
                } else {
                    selected.parentElement.classList.add('text-red-600');
                }
            }
        }

        // Check practical exercise
        const inputs = document.querySelectorAll('input[type="number"]');
        const expectedCodes = ['q5a', 'q5b'];
        inputs.forEach((input, index) => {
            if (input.value === answers[expectedCodes[index]]) {
                score++;
                input.classList.add('border-green-500');
            } else {
                input.classList.add('border-red-500');
            }
        });

        // Show result
        alert(`You scored ${score} out of ${totalQuestions}!`);
    }
}

// Quiz answer checking function for day10.html
function checkAnswers() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'day10.html') {
        const answers = {
            q1: 'B', // PATCH
            q2: 'C', // Both A and B
            q3: 'False', // REST APIs do not have to use XML
            q4: 'True', // 201 means created
            q5a: '/users' // Endpoint for all users
        };

        let score = 0;
        const totalQuestions = 5;

        // Check multiple choice and true/false
        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const answer = selected.parentElement.textContent.trim();
                if (answer.startsWith(answers[`q${i}`])) {
                    score++;
                    selected.parentElement.classList.add('text-green-600');
                } else {
                    selected.parentElement.classList.add('text-red-600');
                }
            }
        }

        // Check practical exercise
        const endpointInput = document.querySelector('input[type="text"]');
        if (endpointInput.value.trim() === answers.q5a || endpointInput.value.trim() === 'https://api.example.com/users') {
            score++;
            endpointInput.classList.add('border-green-500');
        } else {
            endpointInput.classList.add('border-red-500');
        }

        // Show result
        alert(`You scored ${score} out of ${totalQuestions}!`);
    }
} 