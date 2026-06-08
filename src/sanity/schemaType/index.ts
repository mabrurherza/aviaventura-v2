import { homepageType } from "./homepage";
import { careerType } from "./career";
import aboutPage from "./aboutPage";
import contactPage from "./contactPage";
import news from "./news";
import studyCase from "./studyCase";
import policies from "./policies";
import partnership from "./partnership";

export const schema = {
  types: [homepageType, careerType, aboutPage, contactPage, partnership, news, studyCase, policies],
};
