switch(localStorage.getItem('language')){
    case 'ro':{
        $('[language]').hide();
        $('[language="ro"]').show();
        document.getElementById("ro_lang").checked = true;
        
        if(document.title == "JobShop® 2024 - Home") document.title = "JobShop® 2024 - Acasă";
        else if(document.title == "JobShop® 2024 - About") document.title = "JobShop® 2024 - Despre";
        else if(document.title == "JobShop® 2024 - Team") document.title = "JobShop® 2024 - Echipă";
        console.log("RO");
        break;
    }
       
    case 'en':{
        $('[language]').hide();
        $('[language="en"]').show();
        document.getElementById("en_lang").checked = true;

        if(document.title == "JobShop® 2024 - Acasă") document.title = "JobShop® 2024 - Home";
        else if(document.title == "JobShop® 2024 - Despre") document.title = "JobShop® 2024 - About";
        else if(document.title == "JobShop® 2024 - Echipă") document.title = "JobShop® 2024 - Team";
        console.log("EN");
        break;
    }
       
    default:{
        $('[language]').hide();
        $('[language="ro"]').show();
        document.getElementById("ro_lang").checked = true;

        if(document.title == "JobShop® 2024 - Home") document.title = "JobShop® 2024 - Acasă";
        else if(document.title == "JobShop® 2024 - About") document.title = "JobShop® 2024 - Despre";
        else if(document.title == "JobShop® 2024 - Team") document.title = "JobShop® 2024 - Echipă";
        console.log("RO");
    }
}

$('input:radio[name="language"]').change(function () {
    if ($(this).val() == 'ro') {
        localStorage.setItem('language', 'ro');

        if(document.title == "JobShop® 2024 - Home") document.title = "JobShop® 2024 - Acasă";
        else if(document.title == "JobShop® 2024 - About") document.title = "JobShop® 2024 - Despre";
        else if(document.title == "JobShop® 2024 - Team") document.title = "JobShop® 2024 - Echipă";
        
        $('[language]').hide();
        $('[language="ro"]').show();
        console.log("RO");
    } else if ($(this).val() == 'en') {
        localStorage.setItem('language', 'en');

        if(document.title == "JobShop® 2024 - Acasă") document.title = "JobShop® 2024 - Home";
        else if(document.title == "JobShop® 2024 - Despre") document.title = "JobShop® 2024 - About";
        else if(document.title == "JobShop® 2024 - Echipă") document.title = "JobShop® 2024 - Team";

        $('[language]').hide();
        $('[language="en"]').show();
        console.log("EN");
    }
});

