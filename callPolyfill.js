Function.prototype.myCall = function (context, ...args) {
    context.fnName = this;
    context.fnName(...args)
}

function showProfileMessage(message) {
    console.log(message, this.name);
}
const obj = {
    name: "Abhinav Nigam"
};

showProfileMessage.myCall(obj, "welcome ");