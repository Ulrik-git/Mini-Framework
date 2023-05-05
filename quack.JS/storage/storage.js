export function setLocalStorage(name, element) {
    localStorage.setItem(name, element)
}

export function getLocalStorage(name) {
    return localStorage.getItem(name)
}