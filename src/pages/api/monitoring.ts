import { Client } from "@elastic/elasticsearch";
const client = new Client({
  node: "https://elasticsearch.dashboard.biscuitech.dev/"
});

const indexName = "biscuitech-profiler";

export default async function(req, res) {
  console.log(`Profiling data received: ${new Date()}`);
  try {
    const { body } = req;
    body.map(async el => {
      await client.index({
        index: indexName,
        body: {
          id: el.id,
          datetime: new Date(),
          phase: el.phase,
          actualDuration: el.actualDuration,
          baseDuration: el.baseDuration,
          startTime: el.startTime,
          commitTime: el.commitTime
          // interactions: el.interactions
        }
      });
    });
    return res.status(200).send("Profile sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    return res.status(400).send("Profile not sent.");
  }
}
