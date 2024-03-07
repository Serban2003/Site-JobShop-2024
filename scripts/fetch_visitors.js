function fetchData() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://192.168.0.108/visitors.txt', true); // Replace with your server URL and file path
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('visitors').innerHTML = xhr.responseText;
                localStorage.setItem("visitors", xhr.responseText);
                console.log(xhr.responseText);
            } else {
                console.error('Failed to fetch data. Status:', xhr.status);
                document.getElementById('visitors').innerHTML = localStorage.getItem("visitors");
            }
        }
    };
    xhr.send();
}

fetchData();
setInterval(fetchData, 1000); //every minute