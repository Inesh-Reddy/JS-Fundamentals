const url1 = "https://jsonplaceholder.typicode.com/todos/"

const getDataFromAPIUsingPromises = async (url, todoId) => {
    return new Promise((resolve, reject) => {
        fetch(`${url}${todoId}`).then((res)=>{
            res.json().then((data)=>{
                console.log(data);
            })
        })
    })
}

const getDataFromApi = async (url, todoId) => {
    const response = await fetch(`${url}${todoId}`);
    const data = await response.json();
    console.log(data);
}

getDataFromApi(url1,1);
getDataFromAPIUsingPromises(url1,1);
