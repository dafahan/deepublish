
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    window.addEventListener("load", function(event) {
    let element = getElementByXpath('//*[@id="footer"]/div[2]/div/div/div[2]');
        element.innerHTML = '©Copyright 2014 - 2024 <a href="">lunastoto.com</a>. All Rights Reserved.';
        
    
    });