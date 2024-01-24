export function getStrapiURL(path = "") {
  return `${process.env.BASE_URL}${path}`;
}

export function getStrapiURLWithImage(path = "") {
  return `${process.env.BASE_URL}${path}${"?populate=*"}`;
}

const call = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export async function fetchAPI(path) {
  return call(getStrapiURL(path));
}

export async function fetchAPIWithImage(path) {
  return call(getStrapiURLWithImage(path));
}

export async function getBlogs() {
  return call(getStrapiURL(path));
}

export async function getBlog(path) {
  return call(getStrapiURL(path));
}

export function isValidEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return email.length > 0 && re.test(email);
}

export const getNavData = async () => {
  const res = await fetchAPI(
    `/api/navigation?populate=logo_at_header&populate=Header.LHS_hyperlinks&populate=Header.RHS_hyperlinks&populate=Header.logo_at_menu&populate=Footer.Solutions&populate=Footer.Technologies&populate=Footer.People&populate=Footer.Quick_Links&populate=Footer.footer_bottom_1&populate=Footer.footer_bottom_2&populate=Footer.LHS_Fields&populate=Footer.Social_Links.icon&populate=Footer.Social_Links.icon_color&publicationState=${process.env.PUBLICATION_STATE}`
  );
  return (res.data || {}).attributes;
};

export const getHomePageData = async () => {
  const res = await fetchAPI(
    `/api/home?populate=Main.button&populate=Careers.button&populate=Culture.videoThumbnail&populate=Technologies.cards.icon_white&populate=Careers.video&populate=Careers.videoThumbnail&populate=Culture.video&populate=Solutions.nodes&populate=Technologies.cards.icon&populate=Technologies.RHS_image&populate=Experience.employees_graph&populate=Experience.tech_image&populate=Experience.support_image&populate=Experience.location_image&populate=Experience.hyperlink&populate=Featured.Cards.image&populate=Testimonials.reviews.profile_pic&populate=Testimonials.reviews.company_logo&populate=Locations.locations.pic&populate=seo.metaImage&populate=seo.metaSocial.image&populate=seo.favicon&publicationState=${process.env.PUBLICATION_STATE}`
  );
  return (res.data || {}).attributes;
};

export const getAboutUsPageData = async () => {
  const res = await fetchAPI(
    `/api/about-us?populate=Main.background&populate=Main.Awards&populate=Gallery&populate=Our_Story.teamImage&populate=Journey.Cards&populate=Values.Sections.image&populate=Featured_Section.image&populate=Counts&populate=Vibes.Sections.Image&populate=Our_Values.Cards.Image&populate=Our_Principles.Cards.Image&populate=Recognitions.Cards.logo&populate=Get_in_Touch.LHS_link&populate=Get_in_Touch.Social_Links.icon&populate=Get_in_Touch.RHS_button&populate=seo.metaImage&populate=seo.favicon&populate=seo.metaSocial.image&previewState==${process.env.PUBLICATION_STATE}`
  );
  return (res.data || {}).attributes;
};

export const getContactUsPageData = async () => {
  const res = await fetchAPI(
    `/api/contact-us?populate=Background&populate=dynamicFields&populate=Button&populate=Locations.locations.pic&populate=seo.metaImage&populate=seo.metaSocial.image&populate=seo.favicon&publicationState=${process.env.PUBLICATION_STATE}`
  );
  return (res.data || {}).attributes;
};

export const getTeamsPageData = async (payload) => {
  payload = payload ? payload : "Leadership";
  const res = await fetchAPI(
    `/api/teams?filters[Category][$eq]=${payload}&populate=Image`
  );
  return res.data || [];
};

export const getTeamsPageDataSeo = async () => {
  const res = await fetchAPI(
    `/api/teams-page?populate=seo.metaImage&populate=seo.metaSocial.image&populate=seo.favicon&publicationState=preview`
  );

  return (res.data || {}).attributes;
};

export const getServicePageData = async (payload) => {
  const servicePageURL = "/api/services";
  const serviceList = await fetchAPI(servicePageURL);
  payload = payload ? payload : serviceList.data[0].attributes.slug;
  const serviceDetailsQueryParams = `?filters[slug][$eq]=${payload}&populate=Main.LHS_Button&populate=featured.button&populate=Main.RHS_Cards.icon&populate=Features.icon&populate=Technologies.Tech_stacks.icon&populate=Technologies.Tech_stacks.icon_pink&populate=Success_stories.Stories.banner&populate=Success_stories.Stories.compony_logo&populate=Recognitions.Cards.logo&populate=Trusted_by.Companies.compony_logo&populate=Book_a_session.button&populate=Address.LHS_link&populate=Address.RHS_button&populate=Address.Social_Links.icon&populate=seo.metaImage&populate=seo.favicon&populate=Main.RHS_Cards.icon_white&populate=seo.metaSocial.image&previewState==${process.env.PUBLICATION_STATE}`;
  const details = await fetchAPI(servicePageURL + serviceDetailsQueryParams);
  return { list: serviceList.data, details: details.data } || [];
};

export const postApi = (data) => {
  return fetch(process.env.BACKEND_API + "/contact-us", {
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
