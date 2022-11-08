"use strict";

const swappingForm = document.forms['swapping'];

swappingForm.var2.onblur = function(){
    let temp = swappingForm.var1.value;
    swappingForm.var1.value = swappingForm.var2.value;
    swappingForm.var2.value = temp;
}
