let menu = document.querySelector(".menuBtn")
let navitems = document.querySelector(".nav-items")
let dropDownProduct = document.querySelector(".product")
let productList = document.querySelector(".product-list")
let dropDownCompany = document.querySelector(".company")
let companyList = document.querySelector(".company-list")
let dropDownConnect = document.querySelector(".connect")
let connectList = document.querySelector(".connect-list")

menu.addEventListener('click', ()=> {
    if (navitems.style.scale === "0"){
        navitems.style.scale = "1"
        menu.src = "./images/icon-close.svg"
    }
    else {
        navitems.style.scale = "0"
        menu.src = "./images/icon-hamburger.svg"
        navitems.style.bottom = "-21rem"

        productList.style.display = "none"
        companyList.style.display = "none"
        connectList.style.display = "none"

        document.querySelector(".product-dropdown").style.transform = "inherit"
        document.querySelector(".company-dropdown").style.transform = "inherit"
        document.querySelector(".connect-dropdown").style.transform = "inherit"
    }
})


dropDownProduct.addEventListener('click', ()=> {
    if (productList.style.display === "none"){
        navitems.style.bottom = "-42.35rem"

        document.querySelector(".product-dropdown").style.transform = "rotate(180deg)"
        document.querySelector(".company-dropdown").style.transform = "inherit"
        document.querySelector(".connect-dropdown").style.transform = "inherit"
        
        productList.style.display = "block"
        companyList.style.display = "none"
        connectList.style.display = "none"
    }
    else {
        navitems.style.bottom = "-21rem"
        document.querySelector(".product-dropdown").style.transform = "rotate(0deg)"
        
        productList.style.display = "none"
        companyList.style.display = "none"
        connectList.style.display = "none"
    }
})

dropDownCompany.addEventListener('click', ()=> {
    if (companyList.style.display === "none"){
        navitems.style.bottom = "-39.75rem"
        
        document.querySelector(".company-dropdown").style.transform = "rotate(180deg)"
        document.querySelector(".product-dropdown").style.transform = "inherit"
        document.querySelector(".connect-dropdown").style.transform = "inherit"
        
        companyList.style.display = "block"
        productList.style.display = "none"
        connectList.style.display = "none"
    }
    else {
        navitems.style.bottom = "-21rem"
        document.querySelector(".company-dropdown").style.transform = "rotate(0deg)"

        companyList.style.display = "none"
        productList.style.display = "none"
        connectList.style.display = "none"
    }
})

dropDownConnect.addEventListener('click', ()=> {
    if (connectList.style.display === "none"){
        navitems.style.bottom = "-37.1rem"

        document.querySelector(".connect-dropdown").style.transform = "rotate(180deg)"
        document.querySelector(".product-dropdown").style.transform = "inherit"
        document.querySelector(".company-dropdown").style.transform = "inherit"
        
        connectList.style.display = "block"
        productList.style.display = "none"
        companyList.style.display = "none"
    }
    else {
        navitems.style.bottom = "-21rem"
        document.querySelector(".connect-dropdown").style.transform = "rotate(0deg)"

        connectList.style.display = "none"
        productList.style.display = "none"
        companyList.style.display = "none"
    }
})

