function start() {
    console.log("Request handler start was called");
    function sleep(mill) {
        var begTime = new Date().getTime();
        while (new Date().getTime() < begTime + mill);
    }
    
    sleep(10000);
    return "Hello start";
}

function upload() {
    console.log("Request handler upload was called");
    return "Hello upload";
}

exports.start = start;
exports.upload = upload;