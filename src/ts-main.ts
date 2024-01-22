import { getCatFact } from "./typescript/classic-promises/classicPromises.js";

const catApiUrl = 'https://catfact.ninja/fact';

console.log(new Date().toString());
getCatFact(catApiUrl).then((res) => console.log(res)).catch((err) => console.error(err));
