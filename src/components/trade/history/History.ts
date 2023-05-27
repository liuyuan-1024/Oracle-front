export enum Trend {
  rise,
  fall,
}

export interface IHistoryItemProps {
  date: string;
  price: number;
  trend: Trend;
  // 交易序列号
  serialNumber: string;
}

// export {Trend }
// export type {IHistoryItemProps}
