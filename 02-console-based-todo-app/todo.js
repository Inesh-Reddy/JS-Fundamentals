let tasks = []
let id = 0;
const task = {
    id: 1,
    title: "Learn JavaScript",
    completed: false,
    createdAt: "2025-01-03",
    completedAt: null
}

const addTask = (taskName) => {
    tasks.push({
        id:generateUniqueID(),
        title: taskName,
        completed: false,
        createdAt: formatDates(),
        completedAt: null
    })
}

const deleteTask = (id) => {
    console.log(`entered delete function with id: ${id}`)
    let taskToDelete = tasks.find(task  => task.id == id);
    console.log(`Deleting... `, taskToDelete);
    tasks = tasks.filter(task => task.id != id);
    return tasks;
}

const toggleComplete = (id) => {
    console.log(`entered toggle function with id: ${id}`)
    tasks.forEach(task => {
        if(task.id == id){
            task.completed = !task.completed;
        }
    })
    
    return tasks;
    
}

const listAllTasks = () => {
    console.log(tasks);
}

const listCompletedTasks = () => {
    return tasks.map(task => task.completed == "true");
}

const listPendingTasks = () => {
    return tasks.map(task => task.completed == "false");
}

const generateUniqueID = ()=> {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const formatDates = () => {
    let date = Date();
    return date.split(" ",5).join('_');
}

const validateInputs = () => {

}


addTask("Learn JavaScript Arrays");
listAllTasks();
console.log(toggleComplete(tasks[0].id));
console.log(deleteTask(tasks[0].id));