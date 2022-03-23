

    jQuery("#signup").validate({

        rules: {
            fname: {
                required:true,
                minLength:4
            },
            sname: {
                required:true,
                minLength:2
            },
            ename: {
                required:true,
            email:true
            },
            pname: {
                required:true,
            minlength:8
            }
            }

    })

 
