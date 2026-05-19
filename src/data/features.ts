import type { MascotPose } from '../types/mascot';

export type Feature = {
  index: string;
  title: string;
  description: string;
  mascot: MascotPose;
  points: string[];
};

export const FEATURES: Feature[] = [
  {
    index: '01',
    title: '月額制で継続的に改善',
    description:
      '毎月決まった件数まで制作を行います。一度きりの開発ではなく、業務の変化に合わせて改善を積み重ねていけます。',
    mascot: 'cheer',
    points: [
      '月1〜5件まで継続的に制作',
      '業務に合わせて優先順位を相談',
      'プラン変更は月単位で可能',
    ],
  },
  {
    index: '02',
    title: '制作後の保守もセット',
    description:
      '作って終わりではなく、制作したツールや仕組みの保守も月額内に含まれます。運用しながら出てくる改善相談にも対応します。',
    mascot: 'think',
    points: [
      '軽微な修正・調整',
      '操作方法のサポート',
      '不具合確認・改善相談',
    ],
  },
  {
    index: '03',
    title: '作業時間・人件費の削減',
    description:
      '転記・集計・確認などの定型作業を自動化することで、人が手作業にかけている時間を削減。正社員1人を雇うより低コストで業務を回せます。',
    mascot: 'thumbsup',
    points: [
      '月10〜30時間の作業時間削減',
      '人件費・外注費の負担軽減',
      '属人化の解消',
    ],
  },
];
