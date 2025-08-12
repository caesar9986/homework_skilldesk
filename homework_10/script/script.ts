// Задача 1:
// Создайте объект profile с полями name (строка), age (число), isStudent (boolean).
// Сохраните этот объект в localStorage в виде строки JSON.
// Затем получите его обратно из localStorage, распарсьте и выведите в консоль имя пользователя.

type Profile = {
    name: string,
    age: number,
    isStudent: boolean
};

const profile: Profile = {
    name: "John Doe",
    age: 25,
    isStudent: true
};

const profileSettingsJson = JSON.stringify(profile);

window.localStorage.setItem("profile-settings", profileSettingsJson);

const profileNameJson = JSON.parse(profileSettingsJson);

console.log(profileNameJson.name);

// Напишите функцию saveSessionData, которая принимает объект с произвольными данными,
// преобразует его в JSON и сохраняет в sessionStorage под ключом "session-data".
// Затем напишите функцию loadSessionData, которая получает эти данные из sessionStorage и возвращает распарсенный объект.

type Product = {
    id: number,
    title: string,
    price: number
};

const product: Product = {
    id: 1,
    title: "Laptop",
    price: 1500
};

function saveSessionData (product: Product) {
    const productSettingsJson = JSON.stringify(product);
    window.sessionStorage.setItem("session-data", productSettingsJson)
}

saveSessionData(product);

function loadSessionData () {
    const sessionStorageSetting = window.sessionStorage.getItem("session-data")
    if (sessionStorageSetting !== null) {
        const productSettingsJson = JSON.parse(sessionStorageSetting)
        console.log(productSettingsJson)
    }
};

loadSessionData();