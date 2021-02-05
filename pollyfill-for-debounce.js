function debounce(context,wait){
    let timeout;
    return function(){
        let fn = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn.apply(context,args),wait)
    }
}