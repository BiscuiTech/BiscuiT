// import { Client } from "@elastic/elasticsearch";
// const client = new Client({
//   node: "https://elasticsearch.dashboard.biscuitech.dev/",
// });

import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

// const indexName = "biscuitech-vitals";

const analytics = Analytics({
  app: "biscui.tech",
  plugins: [
    googleAnalytics({
      trackingId: process.env.GA_TRACKING_ID,
    }),
  ],
});

export default async function (req, res) {
  //console.log(`Profiling data received: ${new Date()}`);
  const { body } = req;
  try {
    analytics.track(body.name, {
      category: `Next.js ${body.label} metric`,
      label: body.id,
      value: Math.round(body.name === "CLS" ? body.value * 1000 : body.value), // values must be integers
      nonInteraction: true, // avoids affecting bounce rate.
    });
    return res.status(200).send("Vitals sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    return res.status(400).send("Vitals not sent.");
  }
}
