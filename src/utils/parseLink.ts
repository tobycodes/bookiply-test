const parseLink = (paginationLink: string) => {
  const linkFragments = paginationLink.split("link:")[0].split(",");
  const linksObject: { [key: string]: any } = {};

  for (const d of linkFragments) {
    const linkInfo = /<([^>]+)>;\s+rel="([^"]+)"/gi.exec(d)!;
    linksObject[linkInfo[2]] = linkInfo[1];
  }

  const { next, last } = linksObject;
  const totalPages = +last.split("=")[1];
  const currentPage = next ? +next.split("=")[1] - 1 : totalPages;

  return { currentPage, totalPages };
};

export default parseLink;
