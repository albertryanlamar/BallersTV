import { chromium} from "@playwright/test";

export async function lambdaRemoteBrowser(testinfoTitle: string, browsertype: any){
    // Implementation for lambda remote browser
    const capabilities = {
            'browserName': mapBroswer(browsertype), // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
            'browserVersion': 'latest',
            'LT:Options': {
                'platform': mapPlatform(browsertype),
                'build': 'Playwright Sample Build',
                'name': testinfoTitle,
                'user': process.env.LT_USERNAME,
                'accessKey': process.env.LT_ACCESS_KEY,              'accessKey': process.env.LT_ACCESS_KEY,,
                'accessKey': process.env.LT_ACCESS_KEY,
                'network': true,
                'video': true,
                'console': true
            }
    }
    const wsEndpoint = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`;
    return await chromium.connect(wsEndpoint);
}

export function mapBroswer(browsername: string){
    // Implementation for mapping browsers
    switch(browsername) {
        case 'chrome':
        case 'edge':
            return 'Chrome';
        case 'firefox':
            return 'Firefox';
        case 'webkit':
        case 'safari':
            return 'Safari';
        default:
            return 'Chrome';
    }
}

export function mapPlatform(browsername:string){
    // Implementation for mapping platforms

    switch(browsername) {
        case 'chrome':
        case 'edge':
            return 'Windows 10';
        case 'firefox':
            return 'Windows 10';
        case 'webkit':
        case 'safari':
            return 'macOS Big Sur';
        default:
            return 'Windows 10';
    }
}