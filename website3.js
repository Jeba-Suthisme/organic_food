function checkchange(){
    let check=document.getElementById('bar').checked
    console.log('check',check)

    if(check){
        document.body.style.overflow='hidden'
    }
    else{
        document.body.style.overflow='auto'
    }
}