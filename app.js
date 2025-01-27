function calculation(){
    let purchase =parseFloat (document.getElementById("inp1").value);
    let receive =parseFloat (document.getElementById("inp2").value);
    console.log(purchase+receive);
    if (purchase < receive){
        document.getElementById("para").innerText=`You Have RS ${receive-purchase} Profit`

    }
    else if (purchase > receive){
        document.getElementById("para").innerText=`Oh No you have RS ${purchase-receive} Loss`
    }
    else if (purchase == receive){
        document.getElementById("para").innerHTML=`No profit No Loss`
    }
    else{
        alert("Write Valid Value Here")
    }
}