function responseNotOkay (response, errorName) {
    if (!response.ok) {
        throw new Error (errorName);
    };
};

/* Сделать запрос на https://jsonplaceholder.typicode.com/posts/1.
Вывести в консоль заголовок поста (title).
Если запрос завершился ошибкой, вывести "Ошибка запроса". */

const requestGet = fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "GET"
});

requestGet
    .then((response) => {
        responseNotOkay(response, "Ошибка запроса");
        return response.json();
    })
    .then((json) => {
        console.log(json.title);
    })
    .catch((error) => {
        console.log("Ошибка: " + error.message);
});

// ----------------------------------------------------------------------------

/* Отправить запрос POST на https://jsonplaceholder.typicode.com/posts с телом:
{
"title": "My homework post",
"body": "This is a test post",
"userId": 1
}
Получить ответ и вывести в консоль id созданного поста.
Если сервер вернул ошибку (!response.ok), вывести "Ошибка создания поста". */

const requestPost = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "My homework post",
        body: "This is a test post",
        userId: 1
    })
});

requestPost
    .then((response) => {
        responseNotOkay(response, "Ошибка создания поста");
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log("Ошибка: " + error.message);
});

// ---------------------------------------------------------------------------------------

/* Обновить пост с id=1 (адрес: https://jsonplaceholder.typicode.com/posts/1) методом PUT.
Тело запроса:
{
"id": 1,
"title": "Updated title",
"body": "Updated body",
"userId": 1
}
Вывести в консоль обновлённый заголовок (title).
Если запрос неудачный, вывести "Ошибка обновления поста". */

const upDatedTitle = "Updated title";
const requestPut = fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
        id: 1,
        title: upDatedTitle,
        body: "Updated body",
        userId: 1
    })
});

requestPut
    .then((response) => {
        responseNotOkay(response, "Ошибка обновления поста");
        return response.json();
    })
    .then((json) => {
        console.log(json);
        console.log("Обновленный заголовок: " + upDatedTitle);
    })
    .catch((error) => {
        console.log("Ошибка: " + error.message);
});

// --------------------------------------------------------

/* Изменить только поле title у поста с id=1 методом PATCH.
Запрос:
{
"title": "Patched title"
}
Вывести в консоль новый title.
В случае ошибки — вывести "Ошибка изменения поста". */

const patchedTitle = "Patched title";
const requestPatch = fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
        title: patchedTitle
    })
});

requestPatch
    .then((response) => {
        responseNotOkay(response, "Ошибка измнения поста");
        return Promise.resolve();
    })
    .then(() => {
        return fetch("https://jsonplaceholder.typicode.com/posts/1");
    })
    .then((response) => {
        responseNotOkay(response, "Ошибка при получении изменненого поста");
        return response.json();
    })
    .then((json) => {
        console.log(json);
        console.log("Новый заголовок: " + patchedTitle);
        if (json.title === patchedTitle) {
            console.log("Заголовок успешно измене");
        } else {
            console.log("Произошла ошибка при изменении заголовка");
        };
    })
    .catch((error) => {
        console.log("Ошибка: " + error.message);
});

// --------------------------------------------------------------------------

/* Удалить пост с id=1 (адрес: https://jsonplaceholder.typicode.com/posts/1).
Если ответ успешный (status === 200), вывести "Пост удалён".
Если нет — вывести "Ошибка удаления поста". */

const requestDelete = fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
});

requestDelete
    .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
            console.log("Пост удален");
        } else {
            console.log("Ошибка удаления поста");
        }
    })
    .catch((error) => {
        console.log("Ошибка: " + error.message);
});