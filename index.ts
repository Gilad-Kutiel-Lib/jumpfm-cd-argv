import { JumpFm } from 'jumpfm-api'

import * as minimist from 'minimist'

export const load = (jumpFm: JumpFm) => {
    const argv = minimist(jumpFm.argv)
    setImmediate(() => {
        ['l', 'r'].forEach((pwd, i) => {
            console.log('pwd', pwd, argv[pwd])
            if (argv[pwd]) jumpFm.panels[i].cd(argv[pwd])
        })
    })
}