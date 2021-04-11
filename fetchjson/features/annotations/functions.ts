const add = (a: number, b: number): number => {
    return a + b
};

const subtract = (a: number, b: number): number => {
    return a - b;
}; // if we don't have type annotation for the return type, 
// and we don't return anything, it'll infer it as void return type
// which we don't want (try it to see what happens)

// we don't get type inference for function arguments
// so write down the type annotation for the arguments 
// we'll get type inference for function return type,
// but for this course we'll write it as a type annotation
// for good practice

function divide(a: number, b: number): number {
    return a / b;
};

const void_func = (): void => {
    // nothing required since void return type
};

const logger = (message: string): void => {
    console.log(message)
    // return 1; // error message
    // return null; // allowed
    return undefined; // allowed 
};
// for void return types you're allowed to return null or undefined,
// but any other return type will result in an error

const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

// Note above that we used the ES6 destructuring technique with date and weather
// instead of writing a variable name such as 'forecast', see the following mockup: 
// const logWeather = (forecast: { date: Date, weather: string }): void

logWeather(todaysWeather);