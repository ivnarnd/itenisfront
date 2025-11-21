
export const getBookingsTime = () => {
    let bookingsTime = [];
    let dateIni = new Date();
    let dateEnd = new Date();

    dateIni.setHours("08");
    dateIni.setMinutes("00");
    dateIni.setSeconds("00");
    dateEnd.setHours("22");
    dateEnd.setMinutes("00");
    dateEnd.setSeconds("00");
    
    
    for (let i = new Date(dateIni); i <= dateEnd; i.setMinutes(i.getMinutes() + 30)) {
        bookingsTime.push(i.toTimeString().slice(0, 8));
    }
    return bookingsTime;
}


