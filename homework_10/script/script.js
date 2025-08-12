// Задача 1:
// Создайте объект profile с полями name (строка), age (число), isStudent (boolean).
// Сохраните этот объект в localStorage в виде строки JSON.
// Затем получите его обратно из localStorage, распарсьте и выведите в консоль имя пользователя.
var profile = {
    name: "John Doe",
    age: 25,
    isStudent: true
};
var profileSettingsJson = JSON.stringify(profile);
window.localStorage.setItem("profile-settings", profileSettingsJson);
var profileNameJson = JSON.parse(profileSettingsJson);
console.log(profileNameJson.name);
var product = {
    id: 1,
    title: "Laptop",
    price: 1500
};
function saveSessionData(product) {
    var productSettingsJson = JSON.stringify(product);
    window.sessionStorage.setItem("session-data", productSettingsJson);
}
saveSessionData(product);
function loadSessionData() {
    var sessionStorageSetting = window.sessionStorage.getItem("session-data");
    if (sessionStorageSetting !== null) {
        var productSettingsJson = JSON.parse(sessionStorageSetting);
        console.log(productSettingsJson);
    }
}
;
loadSessionData();
