export const GA_TRACKING_ID = process.env.GA_TRACKING_ID

interface IgtagWindow extends Window {
  gtag?: any
}

const gtagWindow: IgtagWindow = window

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  gtagWindow.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  gtagWindow.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
