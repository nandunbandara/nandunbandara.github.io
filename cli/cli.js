window.onload = () => {
    const cli = document.getElementById('cli');
    cli.append(`Hello! I am Nandun Bandara. welcome to my personal website.\n\n> `);
    cli.setSelectionRange(cli.value.length, cli.value.length);
};

// define on key down
const handleInput = (event) => {
    // on the press of enter
    if (event.keyCode === 13) {
        const cli = document.getElementById('cli');
        const {value} = cli;
        const lastInput = value.split('> ').pop();
        console.log(lastInput);

        let out;
        switch(lastInput) {
            case '':
                event.preventDefault();
                return;
            case 'help':
                out = getHelpText();
                break;
            case 'whoami':
                out = getWhoAmI();
                break;
            case 'clear':
                cli.value = '> ';
                return;
            case 'get.github':
                out = 'https://github.com/nandunbandara';
                break;
            case 'get.twitter':
                out = 'https://twitter.com/nandunbandaraa';
                break
            default:
                out = 'command not found'
        }

        cli.value = value + '\n' + out + '\n> ';
        cli.value = cli.value.slice(0, -1) + ' ';
    }

    if (event.keyCode === 8) {
        const cli = document.getElementById('cli');
        console.log(window.getSelection());
        const {value} = cli;
        const tokens = value.split('');
        if (tokens.slice(tokens.length - 2, tokens.length).join('') === '> ') {
            event.preventDefault();
        } else {
            const selection = window.getSelection();
            if (selection.type === 'Range') {
                event.preventDefault();
            }
        }
    }
}


const getWhoAmI = () => `Hello! I am Nandun Bandara. Welcome to my personal website.`
const getHelpText = () => `get.github\t--\tReturns github profile\n` +
    `get.twitter\t--\tReturns twitter handle\n`;
