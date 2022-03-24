import { useState, useEffect, useMemo } from "react";

export interface Details {
  name: string;
  qualification: string;
}

function useFetchData(url: string): {
  data: Details[] | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Details[] | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Details[]) => {
        dataSet(d);
        doneSet(true);
      });
  }, [url]);
  return {
    data,
    done,
  };
}

export default function CustomHookComponent() {
  const { data, done } = useFetchData("/data.json");

  //   const { data } = useFetchData("/data.json");

  const doctor = useMemo(
    () => (data || []).filter((doc) => doc.qualification.includes("Mbbs")),
    [data]
  );

  return (
    <>
      {doctor.length && <p>{doctor![0].name}</p>}
      <>{done && <p>{data![0].name}</p>}</>
    </>
  );
}
