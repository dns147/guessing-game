class GuessingGame {
    constructor() {
        this.range = [];
        this.low = null;
        this.high = null;
        this.mid = null;
    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.range.push(i);
        }

        this.low = 0;
        this.high = this.range.length - 1;
    }

    guess() {
        this.mid = Math.round((this.low + this.high) / 2);

        return this.range[this.mid];
    }

    lower() {
        this.high = this.mid;
    }

    greater() {
        this.low = this.mid;
    }
}

module.exports = GuessingGame;