"use client";

import { FC, useState, useEffect } from "react";

interface Props {
  initHook: number;
}

const Hook: FC<Props> = ({ initHook }) => {
  const [count, setCount] = useState<number>(initHook);
  const [data, setData] = useState<any[] | undefined>();

  useEffect(() => {
    setCount(initHook);
    const url = "https://dataapi.moc.go.th/products?keyword=มะพร้าว";
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [initHook]);

  const inc = (num: number) => num + 1;

  const dec = (num: number) => num - 1;

  return (
    <>
      <p>Hook</p>
      <div>{count}</div>
      <button onClick={() => setCount(inc(count))}>Increase</button>
      <button onClick={() => setCount(dec(count))}>Decrease</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
};

Hook.defaultProps = {
  initHook: 0,
};

export default Hook;
