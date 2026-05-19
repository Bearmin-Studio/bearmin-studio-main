export type FlowStep = {
  index: string;
  title: string;
  description: string;
};

export const FLOW_STEPS: FlowStep[] = [
  {
    index: '01',
    title: 'Chatwork でお問い合わせ',
    description:
      'お問い合わせフォームまたは Chatwork ID 宛に「相談したい」と一行送るだけ。"ふんわりした相談" でも大丈夫、内容を整理しながらお返事します。',
  },
  {
    index: '02',
    title: 'ヒアリング',
    description:
      'ヒアリング項目を Chatwork でお送りしますので、お時間のあるときにご回答をお願いいたします。',
  },
  {
    index: '03',
    title: '電子契約',
    description:
      '契約書を Chatwork 上で共有。電子契約なので、押印・郵送・対面でのご捺印は不要です。',
  },
  {
    index: '04',
    title: '専用グループで、制作・公開・運用',
    description:
      'ご契約後、Chatwork に 専用グループ をお作りします。進捗共有・修正依頼・改善提案、すべてここで完結できます。',
  },
];

export const FLOW_NOTES = [
  'Chatwork のアカウントをお持ちでない場合は、無料アカウントの取得を最初にご案内します（数分で完了）。',
  'LINE WORKS、Slack、メールでのやり取りも対応可能です。お申し付けください。',
];
