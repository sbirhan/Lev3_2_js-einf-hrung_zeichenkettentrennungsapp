function work(){
    var txt = TextInputBox.value;
    var indexOfPart = txt.indexOf(CutPointInputBox.value);
    var lengthOfCutPoint = CutPointInputBox.value.length;
    if (CutPointAfter.checked == true){
        indexOfPart = indexOfPart + lengthOfCutPoint;
    }
    document.getElementById("frontPart").innerHTML = "Vorderer Teil : " + "<i>" + txt.slice(0,indexOfPart) + "<i/>";
    document.getElementById("backPart").innerHTML = "Hinterer Teil : " + "<i>" + txt.slice(indexOfPart,) + "<i/>";
}