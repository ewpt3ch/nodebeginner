function route(handle, pathname) {
    console.log("About to route request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
        return handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
        return "404 Not Found";
    }
}

exports.route = route;