class individual {
    constructor() {
        this.msg = [];
    }
    add(literal) {
        this.msg.push(literal);
        $('#test-zone').append('<p>' + literal + '</p>');
    }
}

export let myindividual = new individual();