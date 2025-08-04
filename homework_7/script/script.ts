function Fee(originalMethod: any) {
    function replacementMethod(this: any, ...args: any) {
        const result = originalMethod.call(this, ...args);
        return result.reduce((acc: any, args: any) => {
            return acc + args
        }) * 0.75
    }
    return replacementMethod;
}

class Company {
    name: string;

    constructor(name: string) {
    this.name = name;
    }

    @Fee
    earnMoney(...amount: any) {
        console.log(`Company ${this.name} earned $${amount}.`);
        return amount;
    }
}

const myCompany = new Company("Tech Corp");

// const netIncome = myCompany.earnMoney(100);

const netIncome = myCompany.earnMoney(100, 200, 300, 400, 500);

console.log(`Net income: $${netIncome}`);