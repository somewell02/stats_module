export type statsValue = [number, number];

export interface StatsItem {
  id: number;
  name: string;
  data: statsValue[];
}

export interface StatsData {
  has_data: boolean;
  data: StatsItem[];
}
