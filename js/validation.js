$(document).ready(function () {
    $("#sub_form").validate({
        rules: {
            mail1: {
                required: true,
                email:true
                
            },
            Name1:{
                required:true,
                minlength:3,    
                
            },
            Number1:{
                required:true,
                minlength:10
                
            },
            Message1:{
                required:true,
                minlength:3  
                
            }
        }
    })
})