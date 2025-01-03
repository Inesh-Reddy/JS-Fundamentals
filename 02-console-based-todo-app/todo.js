let tasks = []

// Sample data
const task = {
    id: 1,
    title: "Learn JavaScript",
    completed: false,
    createdAt: "Fri_Jan_03_2025_17:10:58",
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
    console.log();
    console.log(`-------------------------------------`);
    console.log(`### Deleting Tasks with id : ${id} ###`);
    console.log(`-------------------------------------`);
    let taskToDelete = tasks.find(task  => task.id == id);
    console.log(`Deleting... `, taskToDelete);
    tasks = tasks.filter(task => task.id != id);
}

const toggleComplete = (id) => {
    console.log();
    console.log(`-------------------------------------`);
    console.log(`### Toggled Tasks with id : ${id} ###`);
    console.log(`-------------------------------------`);
    tasks.forEach(task => {
        if(task.id == id){
            task.completed = !task.completed;
            task.completedAt = formatDates();
            console.log(`1. [ 📝 ] ${task.title} (completed: ${task.completed}) (created: ${task.createdAt})`);
        }
    });
}

const listAllTasks = () => {
    console.log(`-------------------------------------`);
    console.log(`### AllTasks ###`);
    console.log(`-------------------------------------`);
    let id =1;
    return tasks.map(task => {
        return `${id++}. [ 📝 ] ${task.title} (create: ${task.createdAt})`
    })
}

const listCompletedTasks = () => {
    console.log(`-------------------------------------`);
    console.log(`### Completed Tasks ###`);
    console.log(`-------------------------------------`);
    const completedTasks = tasks.filter(task => task.completed === true);
    let id =1;
    return completedTasks.map(task => {
        return`${id++}. [✅] ${task.title} (completed: ${task.completedAt})`;
    });
}

const listPendingTasks = () => {
    console.log();
    console.log(`-------------------------------------`);
    console.log(`### Pending Tasks ###`);
    console.log(`-------------------------------------`);
    const pendingTasks = tasks.filter(task => task.completed === false);
    let id =1;
    return pendingTasks.map(task => {
        return `${id++}. [❌] ${task.title} (create: ${task.createdAt})`
    })
}

const generateUniqueID = ()=> {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const formatDates = () => {
    let date = Date();
    return date.split(" ",5).join('_');
}



addTask("Learn JavaScript Arrays");
addTask("Learn Solidity");
addTask("Learn Python");
addTask("Build Java e-commerce app");
addTask("Learn Data Structures and Algorithms");
addTask("Learn JavaScript Arrays");
console.log(listAllTasks());
toggleComplete(tasks[0].id);
toggleComplete(tasks[1].id);
deleteTask(tasks[0].id);
console.log(listCompletedTasks());
console.log(listPendingTasks())