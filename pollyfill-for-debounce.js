function debounce(fn,wait){
    let timeout;
    return function(){
        let context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn.apply(context,args),wait)
    }
}



const sayHi = (args)=> console.log(`Hi I am ${args}`)


const debouncedHi = debounce(sayHi,3000);

debouncedHi("Ankit");