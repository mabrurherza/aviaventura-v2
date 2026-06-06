import { homepageType } from "./homepage";
import { careerType } from "./career";
import aboutPage from "./aboutPage";
import contactPage from "./contactPage";
import news from "./news";
import studyCase from "./studyCase";
import policies from "./policies";
import page, { whySection, testimonialsSection, genericTextSection, testimonial } from "./pageType";

export const schema = {
  types: [homepageType, careerType, aboutPage, contactPage, news, studyCase, policies, page, whySection, testimonialsSection, genericTextSection, testimonial],
};
