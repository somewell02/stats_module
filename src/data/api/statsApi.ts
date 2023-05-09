import { StatsData } from "@/types/stats";

import data from "./stats.json";

export const getAllStats = async (): Promise<StatsData | undefined> => {
  try {
    await fetch(`${process.env.VUE_APP_API_URL}/test_task_mock.json`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // нет доступа к файлу по url, ошибка cors, поэтому скопировал данные к себе
    // return await res.json();
    return data as StatsData;
  } catch (e) {
    console.error("Fetch error: " + (e as Error).message);
    return undefined;
  }
};
