var DPCI = document.getElementById("DPCIinput").value
var i;
var sliced = false
var DPCIarr = []
var currentDPCI = 0
var lastSpace = 0

function onSubmit() {
    DPCI = document.getElementById("DPCIinput").value.trim() //added .trim to remove whitespace
    DPCI = DPCI.replace(/[^0-9-# ]/g, '')
    DPCI = DPCI.replace(/\s+/g,' ').trim();
    for (i = 0; i <= DPCI.length; i++) {
        DPCIs = DPCI.charAt(i)
        // console.log("DPCI char = " + DPCIs)
        if ((DPCIs == " ") || (i == (DPCI.length))) {
            DPCIarr.push(DPCI.substring(lastSpace, i))
            lastSpace = i + 1
        } 
    //   console.log("i = " + i)
    //   console.log(DPCI)
    }
    console.log(DPCIarr)
    for (i = 0; i < DPCIarr.length; i++) {
        currentDPCI = DPCIarr[i]
        // console.log(currentDPCI + " DPCI " + DPCIarr[i])
        if (currentDPCI.length == 9) {
            console.log("replaced " + (currentDPCI.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3")));
            DPCIarr[i] = DPCIarr[i].replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3")
        } else if (currentDPCI.length == 11) {

        } else {
            DPCIarr.splice(i, 1)
            i--
        }
        // DPCIarr[i] = currentDPCI.substr(0,3) + '-' + currentDPCI.substr(3, 6) + '-' + currentDPCI.substr(6);
    }

    document.getElementById("appendDPCI").value = DPCIarr
    console.log(DPCI)
    console.log(DPCIarr)
}