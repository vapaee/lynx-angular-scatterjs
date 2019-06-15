import { Component } from '@angular/core';

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2'
import ScatterLynx from 'scatterjs-plugin-lynx'
import {JsonRpc, Api} from 'eosjs';

// Scatter imports
// import ScatterJS from '@scatterjs/core';
// import ScatterEOS from '@scatterjs/eosjs2';
// import {JsonRpc, Api} from 'eosjs';
// import ScatterLynx from 'scatterjs-plugin-lynx';

@Component({
    selector: 'app-root',
    template: `
        <div style="text-align:center">
            <h1>
                status: {{status}}!
            </h1>
            <div class="padding" [hidden]="!account">
                <div><button (click)="logout()">Logout</button></div>
                <pre>{{account|json}}</pre>
            </div>
        </div>
    `,
    styles: ["pre {text-align:left} .padding{padding: 20px;} "]
})
export class AppComponent {
    title = 'lynx-angular-scatterjs';
    status = "wallet NOT detected";
    connected = false;
    account = null;

    constructor() {
        this.init();
    }

    async init () {
        ScatterJS.plugins( new ScatterEOS(), new ScatterLynx({Api, JsonRpc}) );

        const network = ScatterJS.Network.fromJson({
            blockchain:'eos',
            chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
            host:'nodes.get-scatter.com',
            port:443,
            protocol:'https'
        });
        const rpc = new JsonRpc(network.fullhost());

        ScatterJS.connect('YourAppName', {network}).then(connected => {
            this.connected = connected;
            if(!connected) return console.error('no scatter');
            this.status = "wallet detected";

            const eos = ScatterJS.eos(network, Api, {rpc});

            ScatterJS.login().then(id => {
                if(!id) return console.error('no identity');
                const account = ScatterJS.account('eos');
                this.status = "Logged as " + account.name;
                this.account = account;
            });
        });
    }


    logout() {
        console.log("ScatterJS.forgetIdentity()");
        ScatterJS.forgetIdentity();
        this.status = "wallet detected";
        this.account = null;
    }    
}
