function flatten(args){
    return args.reduce((memo,el)=>{
        let item = Array.isArray(el) ? flatten(el) : [el]
        return memo.concat(item)
    },[])
}


console.log(flatten([[[2,3,4]],[2,3,4]]))