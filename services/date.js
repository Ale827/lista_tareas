export const uniqueDates = (task) => {
    const unique = [];
   
    task.forEach( (task)=> {
        console.log(task.dateFormat);
        if (!unique.includes(task.dateFormat) ){
            unique.push(task.dateFormat);
        };
    });

    return unique;
}

export const orderDates = (dates) => {
    return dates.sort( (a,b) =>{  //sort ordena los elementos de un array
        const firtsDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(a, "DD/MM/YYYY");
        return firtsDate - secondDate;
    })
}