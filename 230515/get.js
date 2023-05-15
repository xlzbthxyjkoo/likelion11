
// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
};

fetch('https://jsonplaceholder.typicode.com/posts', postOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));