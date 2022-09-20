function daysLeft(date){
    const dateNewYear = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
        
    const secs = 1000,
        mins = secs * 60,
        hours = mins * 60,
        days = hours * 24;
    
    console.log("Time left before New Year: " + Math.floor((dateNewYear.getTime() - date.getTime()) / (days)) + " days "
        + Math.floor((dateNewYear.getTime() - date.getTime()) % (days) / (hours)) + " hours "
        + Math.floor((dateNewYear.getTime() - date.getTime()) % (days) % (hours) / (mins)) + " minutes "
        + Math.floor((dateNewYear.getTime() - date.getTime()) % (days) % (hours) % (mins) / (secs)) + " seconds");
}

daysLeft(new Date());