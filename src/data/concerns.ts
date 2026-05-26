import type { ServiceId } from './services';

export type Concern = {
  text: string;
  service: ServiceId;
};

export const CONCERNS: Concern[] = [
  { text: '毎月、同じ集計作業を繰り返している', service: 'excel' },
  { text: 'コピペ・転記作業が多すぎる', service: 'excel' },
  { text: '“特定の人にしかわからないExcel”になっている', service: 'excel' },
  { text: '人を増やす前に、業務を効率化したい', service: 'rpa' },
  { text: '複数のExcelやSaaSに情報が散らばっている', service: 'system' },
  { text: 'IT担当がいなくて、改善が進まない', service: 'system' },
];
