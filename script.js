const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");

function generateQr() {
    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.style.display = "block";
    }
    else {
        alert("Please give input")
    }
}