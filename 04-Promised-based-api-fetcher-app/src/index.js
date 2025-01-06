const url1 = "https://jsonplaceholder.typicode.com/todos/"

const getDataFromAPIUsingPromises = async (url, todoId) => {
    return new Promise((resolve, reject) => {
        fetch(`${url}${todoId}`).then((res)=>{
            res.json().then((data)=>{
                document.getElementById("result-title").innerHTML = data.title;
                document.getElementById("result-completed").innerHTML = data.completed;
                console.log(data);
            })
        })
    })
}

const getDataFromApi = async (url, todoId) => {
    const response = await fetch(`${url}${todoId}`);
    const data = await response.json();
    document.getElementById("result-title").innerText = data.title;
    document.getElementById("result-completed").innerText = data.completed;
    console.log(data);
}






