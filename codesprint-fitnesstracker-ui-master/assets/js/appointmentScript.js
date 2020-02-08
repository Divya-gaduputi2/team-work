const APPOINTMENT_KEY = "appointments";

myFunction=(group3)=>{
    document.getElementById("pkg").value=group3;
}

myFunction1=(group1)=>{
    document.getElementById("tpref").value=group1;
}
getAppointmentsFromLocalStorage=()=>{
    let appointments=[];

    if(localStorage.getItem(APPOINTMENT_KEY)){
        appointments=JSON.parse(localStorage.getItem(APPOINTMENT_KEY));
    }
    return appointments;

}
addAppointmentFormSubmit = ()=>{
    let appointments =getAppointmentsFromLocalStorage();

    let itemNameTextBox =document.querySelector("#name");
    let itemAddressTextBox = document.querySelector("#address");
    let itemCityTextBox=document.querySelector("#city");
    let itemPackageTextBox =document.querySelector("#pkg");
    let itemTrainer_PreferenceTextBox =document.querySelector("#tpref");
    let itemPhoneTextBox =document.querySelector("#phone");
    
    let appointment={
        name:itemNameTextBox.value,
        address:itemAddressTextBox.value,
        city:itemCityTextBox.value,
        pkg:parseFloat(itemPackageTextBox.value),
        tpref:itemTrainer_PreferenceTextBox.value,
        phone:parseInt(itemPhoneTextBox.value),
      
    };
    appointments.push(appointment);
    localStorage.setItem(APPOINTMENT_KEY,JSON.stringify(appointments));

}
loadAppointments=()=>{
    let appointments=getAppointmentsFromLocalStorage();
    let tableBody=document.querySelector("#prdData");

    for(let appointment of appointments){
        let prdRow=createAppointmentRow(appointment);
        tableBody.append(prdRow);
    }
}
createAppointmentRow =(appointment)=>{

    let nameCol=document.createElement("td");
    nameCol.textContent=appointment.name;

    let addressCol=document.createElement("td");
    addressCol.textContent=appointment.address;

    let cityCol=document.createElement("td");
    cityCol.textContent=appointment.city;

    let pkgCol=document.createElement("td");
    pkgCol.textContent=appointment.pkg;

    let tprefCol=document.createElement("td");
    tprefCol.textContent=appointment.tpref;

    let phoneCol=document.createElement("td");
    phoneCol.textContent=appointment.phone;

    let prdRow=document.createElement("tr");
    
    prdRow.append(nameCol);
    prdRow.append(addressCol);
    prdRow.append(cityCol);
    prdRow.append(pkgCol);
    prdRow.append(tprefCol);
    prdRow.append(phoneCol);

    return prdRow;

}