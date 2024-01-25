import { USPopulationDataApiUrl, catApiUrl } from "./data-sources/APIs.js";
import { getCatFact } from "./typescript/classic-promises/classicPromises.js";
import { getUSPopulationData } from "./typescript/new-promises/newPromises.js";

getCatFact(catApiUrl).then((res) => console.log(res)).catch((err) => console.error(err));

const res = await getUSPopulationData(USPopulationDataApiUrl);
res.data.forEach((item) => console.log(item));