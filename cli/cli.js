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

        cli.value = value + '\n> ';
    }

    if (event.keyCode === 8) {
        const {value} = document.getElementById('cli');
        const tokens = value.split('');
        if (tokens.slice(tokens.length - 2, tokens.length).join('') === '> ') {
            event.preventDefault();
        }
    }
}
