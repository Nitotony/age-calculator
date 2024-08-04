


const button=document.getElementById('cal');

button.addEventListener('click',()=>{
    const birth=document.getElementById('birth').value;
    const today=document.getElementById('dte').value;
    const age=document.getElementById('result');


    age.innerText=`${calculateAge(birth,today)}`;
    

})









const calculateAge= (birthDate, todayDate)=> {
    birthDate = new Date(birthDate);
    todayDate = new Date(todayDate);

    var years = (todayDate.getFullYear() - birthDate.getFullYear());

    if (todayDate.getMonth() < birthDate.getMonth() || 
        todayDate.getMonth() == birthDate.getMonth() && todayDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}