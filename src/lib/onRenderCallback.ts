let queue = [];

// sendProfileQueue every 5 seconds

setInterval(sendProfileQueue, 5000);

interface IRenderCallback {
  id: string;
  phase: string;
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
  interactions: [];
}

export function onRenderCallback<IRenderCallback>(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  queue.push({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  });
}

async function sendProfileQueue() {
  if (!queue.length) {
    return Promise.resolve();
  }
  const queueToSend = [...queue];
  queue = [];

  // here's where we'd actually make the server call to send the queueToSend
  // data to our backend...
  console.info("sending profile queue", queueToSend);
  const result = await fetch("/api/monitoring", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(queueToSend)
  });
  console.log("user-land result", result);
  return Promise.resolve();
}
