export const GA_TRACKING_ID = process.env.GA_TRACKING_ID

interface IgtagWindow extends Window {
  gtag?: any
}
function getWindow() {
  if (typeof window !== 'undefined') {
    const w: IgtagWindow = window
    return w
  } else {
    return null
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  const w = getWindow()
  if (w) {
    w.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  const w = getWindow()
  if (w) {
    w.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
