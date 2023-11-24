"use strict";
//Proxy leecher app using nodejs
// First we setup a puppeteer browser in a function named BrowserSetup
// We take the Browser we created and leech proxies from different sites
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
//Source1: https://proxyscrape.com/share/7h8si53
const Source1 = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch();
    const page = yield browser.newPage();
    yield page.goto('https://proxyscrape.com/share/7h8si53');
    //await page.setViewport({width: 1080, height:1024});
    yield new Promise(r => setTimeout(r, 4000));
    let text = yield page.$x('/html/body/main/div/div/div[2]/div/textarea/text()');
    let proxies = yield text[0].evaluate(el => el.nodeValue);
    yield browser.close();
    return proxies;
});
//Source2 coming in soon...
const _main_ = () => __awaiter(void 0, void 0, void 0, function* () {
    //Selecting proxies from Source1 to put in an array of proxies
    let proxies = Promise.resolve(yield Source1());
    proxies.then((proxies) => {
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
            i = i.replace('\\', ""); //Big oops check it a$ap
            i = i.replace("r", "");
        }
        console.log(proxies);
    });
    console.log(proxies);
    /*  .then((proxies:Array<string>) => {
         
     }); */
});
_main_();
