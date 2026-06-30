const DEFAULT_BASE_URL = 'https://www.christfellowship.church';

function normalizeUrl(url) {
  if (!url) return url;
  return url.replace(/^(https?):\/(?!\/)/i, '$1://');
}

function isAbsoluteUrl(url) {
  return /^https?:\/\/?/i.test(url);
}

/**
 * note : Added additional check for title. If no title exist in the related node, pass in a separate title
 */
function getUrlFromRelatedNode(relatedNode) {
  if (relatedNode?.url) {
    return normalizeUrl(relatedNode.url);
  }

  if (relatedNode?.routing?.pathname) {
    if (isAbsoluteUrl(relatedNode.routing.pathname)) {
      return normalizeUrl(relatedNode.routing.pathname);
    }
    return `/${relatedNode.routing.pathname}`;
  }

  if (relatedNode?.__typename === 'InformationalContentItem') {
    const { id } = relatedNode;

    return `/items/${id.split(':')[1]}`;
  }

  return '/';
}

function getAbsoluteUrlFromRelatedNode(
  relatedNode,
  baseUrl = DEFAULT_BASE_URL
) {
  const url = getUrlFromRelatedNode(relatedNode);

  if (isAbsoluteUrl(url)) {
    return normalizeUrl(url);
  }

  return `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`;
}

export default getUrlFromRelatedNode;
export { getAbsoluteUrlFromRelatedNode, isAbsoluteUrl, normalizeUrl };
