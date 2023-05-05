export function _setRoute(route) {
    history.pushState(null, null, route);
}

export function _getRoute(route) {
    return location.hash
}