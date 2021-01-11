









function loadStudents(){


    fetch('http://localhost:8000/getStudent')
    .then(response => response.json())
    .then(data => console.log(data));

  
}


