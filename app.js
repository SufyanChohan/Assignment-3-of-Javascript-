function calculation(){
    let purchase =parseFloat (document.getElementById("inp1").value);
    let receive =parseFloat (document.getElementById("inp2").value);
    console.log(purchase+receive);
    if (purchase < receive){
        document.getElementById("para").innerText=`You have RS ${receive-purchase} Profit`
        document.getElementById("inp1").value=""
        document.getElementById("inp2").value=""

    }
    else if (purchase > receive){
        document.getElementById("para").innerText=`Oh no you have RS ${purchase-receive} Loss`
         document.getElementById("inp1").value=""
        document.getElementById("inp2").value=""
    }
    else if (purchase == receive){
        document.getElementById("para").innerHTML=`No Profit No Loss`
         document.getElementById("inp1").value=""
        document.getElementById("inp2").value=""
    }
    else{
        alert("Write Valid Value Here")
    }
}