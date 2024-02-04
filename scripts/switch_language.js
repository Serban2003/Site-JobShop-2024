switch(localStorage.getItem('language')){
    case 'ro':{
        $('[language]').hide();
        $('[language="ro"]').show();
        document.getElementById("ro_lang").checked = true;
        
        if(document.title == "JobShop® 2024 - Home") document.title = "JobShop® 2024 - Acasă";
        else if(document.title == "JobShop® 2024 - About") document.title = "JobShop® 2024 - Despre";
        console.log("RO");
        break;
    }
       
    case 'en':{
        $('[language]').hide();
        $('[language="en"]').show();
        document.getElementById("en_lang").checked = true;

        if(document.title == "JobShop® 2024 - Acasă") document.title = "JobShop® 2024 - Home";
        else if(document.title == "JobShop® 2024 - Despre") document.title = "JobShop® 2024 - About";

        console.log("EN");
        break;
    }
       
    default:{
        $('[language]').hide();
        $('[language="ro"]').show();
        document.getElementById("ro_lang").checked = true;

        if(document.title == "JobShop® 2024 - Home") document.title = "JobShop® 2024 - Acasă";
        else if(document.title == "JobShop® 2024 - About") document.title = "JobShop® 2024 - Despre";

        console.log("RO");
    }
}

$('input:radio[name="language"]').change(function () {
    if ($(this).val() == 'ro') {
        localStorage.setItem('language', 'ro');

        if(document.title == "JobShop® 2024 - Home") document.title = "JobShop® 2024 - Acasă";
        else if(document.title == "JobShop® 2024 - About") document.title = "JobShop® 2024 - Despre";
        
        $('[language]').hide();
        $('[language="ro"]').show();
        console.log("RO");
    } else if ($(this).val() == 'en') {
        localStorage.setItem('language', 'en');

        if(document.title == "JobShop® 2024 - Acasă") document.title = "JobShop® 2024 - Home";
        else if(document.title == "JobShop® 2024 - Despre") document.title = "JobShop® 2024 - About";

        $('[language]').hide();
        $('[language="en"]').show();
        console.log("EN");
    }
});

