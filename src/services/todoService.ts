const baseUrl = `http://localhost:8089/todos`;
//ipconfig 192.168.1.123

export const loadTodos = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
}

export const getTodo = (id: any) => {
    return fetch(`${baseUrl}/${id}`).then((response) => response.json());
}

export const createTodo = (todo: any) => {
    return fetch(baseUrl,
        {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: todo.title,
                completed: todo.completed
            })
        }).then(response => response.json);

}

export const updateTodo = (todo: any) => {
    return fetch(`{baseUrl}/${todo.id}`,
        {

            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: todo.id,
                title: todo.title,
                completed: todo.completed
            })
        }).then(response => response.json());

}

export const deleteTodo = (id: any) => {
    return fetch(`{baseUrl}/${id}`,
        {
            method: "DELETE",
        }
    ).then(response => response.json);


}