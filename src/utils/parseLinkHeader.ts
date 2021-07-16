/**
 * Parses the api link header string and returns the current page and total pages parameters as an object
 */
export default function parseLinkHeader(paginationLink: string) {
  if (!paginationLink) return { currentPage: 1, totalPages: 1 };

  const linksObject = parseLink(paginationLink);
  const { next, last } = linksObject;
  const { page: totalPages } = extractParams(last);
  const currentPage = next ? +extractParams(next).page - 1 : +totalPages;

  return { currentPage, totalPages: +totalPages };
}

/**
 * Parses the pagination header link and returns the pagination links (i.e. first, next and last) as an object.
 * Function source: https://tinyurl.com/4yhhjyyb
 * @param link A pagination link from the api link header.
 */
function parseLink(link: string) {
  const linkHeadersArray = link.split(", ").map((header) => header.split("; "));

  const linkHeadersMap = linkHeadersArray.map((header) => {
    const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
    const thisHeaderUrl = header[0].slice(1, -1);
    return [thisHeaderRel, thisHeaderUrl];
  });

  return Object.fromEntries(linkHeadersMap);
}

/** Extracts query parameters from a url string and returns them as an object.
 * @param {string} urlString A url string containing query parameters.
 */
function extractParams(urlString: string) {
  const paramsObject = urlString
    .split("?_")[1]
    .split("&")
    .reduce<{ [key: string]: string }>((prev, cur) => {
      const [key, value] = cur.split("=");

      prev[key] = value;
      return prev;
    }, {});

  return paramsObject;
}
