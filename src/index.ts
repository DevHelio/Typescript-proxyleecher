//Proxy leecher app using nodejs
// First we setup a puppeteer browser in a function named BrowserSetup
// We take the Browser we created and leech proxies from different sites

import puppeteer from 'puppeteer';



//Source1: https://proxyscrape.com/share/7h8si53
const Source1 = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://proxyscrape.com/share/7h8si53');
    //await page.setViewport({width: 1080, height:1024});
    
    await new Promise(r => setTimeout(r, 4000));
    let text = await page.$x('/html/body/main/div/div/div[2]/div/textarea/text()');

    let proxies = await text[0].evaluate(el => el.nodeValue);
    await browser.close();


    return proxies
}

//Source2 coming in soon...


const _main_ = async () => {
    //Selecting proxies from Source1 to put in an array of proxies

    let proxies:any = Promise.resolve(await Source1());
    proxies.then((proxies:any) => {
        proxies = proxies.split("\n");
        for (let i of proxies) {
            i = i.trim();
            if (i == "") {
                continue;
            }
            i = i.replace("http://", "");
            i = i.replace("https://", "");
            i = i.replace("socks4://", "");
            i = i.replace("socks4a://", "");
            i = i.replace("socks5://", "");
            i = i.replace("socks5h://", "");
            i = i.replace("socks5s://", "");
            i = i.replace(/(\r\n|\n|\r)/gm, "");
            i = i.replace('\\', "");                  //Big oops check it a$ap
            i = i.replace("r", "");
        }
        console.log(proxies);
    });

    console.log(proxies);
   /*  .then((proxies:Array<string>) => {
        
    }); */
}

_main_();

