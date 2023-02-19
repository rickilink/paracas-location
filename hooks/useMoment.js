import { useEffect, useState } from "react";
/* import moment from "moment"; */

const useMoment = (timestamp) => {
  const [elapsedTime, setElapsedTime] = useState(moment().diff(timestamp));
  const [humanizedDuration, setHumanizedDuration] = useState("");

  useEffect(() => {
    const duration = moment.duration(elapsedTime);
    const humanizedDuration = duration.humanize();
    setHumanizedDuration(humanizedDuration);
  }, [elapsedTime]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(moment().diff(timestamp));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timestamp]);

  return humanizedDuration;
};

export default useMoment;

/**
 * Para utilizar en el componente principal
 *   const timestamp = 1645282362000;
  const elapsedTime = useMoment(timestamp);
 */
