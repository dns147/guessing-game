class GuessingGame {
    constructor(number) {
        this.range = [];
        this.low = null;
        this.high = null;
        this.mid = null;
        this.num = number;
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
        let gues = this.range[this.mid];

        return gues;
    }

    lower() {
        if (this.guess() > this.num) {
            this.high = this.mid;
        }
    }

    greater() {
        if (this.guess() < this.num) {
            this.low = this.mid;
        }
    }
}

module.exports = GuessingGame;