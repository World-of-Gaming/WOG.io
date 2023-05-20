"use strict";

var d, win;

d = document;
win = window;

win.onload = function()
{
    ad(/* put your ad number here */);
}

function ad(ad_type)
{
    switch(ad_type)
    {
        case 1:
            d.querySelector(".ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/1.html' style='height:200px;width:500px;border:none'></iframe>";
            d.querySelector("#ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/1.html' style='height:200px;width:500px;border:none'></iframe>";
        break;
        case 2:
            d.querySelector(".ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/2.html' style='height:200px;width:500px;border:none'></iframe>";
            d.querySelector("#ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/2.html' style='height:200px;width:500px;border:none'></iframe>";
        break;
        case 3:
            d.querySelector(".ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/3.html' style='height:200px;width:500px;border:none'></iframe>";
            d.querySelector("#ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/3.html' style='height:200px;width:500px;border:none'></iframe>";
        break;
        case 4:
            d.querySelector(".ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/4.html' style='height:200px;width:500px;border:none'></iframe>";
            d.querySelector("#ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/4.html' style='height:200px;width:500px;border:none'></iframe>";
        break;
        case 5:
            d.querySelector(".ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/5.html' style='height:200px;width:500px;border:none'></iframe>";
            d.querySelector("#ad").innerHTML = "<iframe src='https://world-of-gaming.github.io/ads/5.html' style='height:200px;width:500px;border:none'></iframe>";
        break;
        default:
            d.querySelector(".ad").innerHTML = "<h3>Could not load ad there was wrong code added please try again</h3>";
        break;
    }
}