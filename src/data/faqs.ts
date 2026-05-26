export type FaqCategory = 'contract' | 'service' | 'plan' | 'other';

export type Faq = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
};

export const FAQ_CATEGORY_LABEL: Record<FaqCategory, string> = {
  contract: 'ご契約・お支払い',
  service: 'サービス内容',
  plan: 'プラン',
  other: 'その他',
};

export const FAQS: Faq[] = [
  {
    id: 'min-contract',
    category: 'contract',
    question: '最低契約期間はありますか？',
    answer:
      '最低契約期間は6ヶ月です。継続的に業務改善を進めていくサービス特性上、最低期間以降も6ヶ月単位での継続・解約をお願いしています。',
  },
  {
    id: 'plan-change',
    category: 'plan',
    question: 'プランの変更はできますか？',
    answer:
      '月単位でプランの変更が可能です。業務の状況に応じてライト・スタンダード・プレミアムを柔軟に切り替えていただけます。',
  },
  {
    id: 'carry-over',
    category: 'plan',
    question: '月の制作件数を使い切らなかった場合、翌月に繰り越せますか？',
    answer:
      '原則として、未使用分の翌月への繰り越しはありません。毎月決まった件数の中で着実に改善を進める設計のため、月内でのご利用をおすすめしています。',
  },
  {
    id: 'no-it',
    category: 'service',
    question: 'ITに詳しくないのですが、相談だけでも大丈夫ですか？',
    answer:
      '大丈夫です。むしろ「何を自動化できるかわからない」段階からのご相談を歓迎しています。現状の業務をヒアリングし、改善できそうな箇所からご提案します。',
  },
  {
    id: 'existing',
    category: 'service',
    question: '既存のExcelやシステムの改善も依頼できますか？',
    answer:
      '可能です。すでにお使いの管理表や業務システムを引き継いで、整理・自動化・機能追加を行うご依頼も多くいただいています。',
  },
  {
    id: 'industry',
    category: 'service',
    question: 'どんな業種・業務に対応していますか？',
    answer:
      '業種は問いません。Excel/スプレッドシートでの管理や、PC上での定型作業がある業務であれば幅広く対応可能です。',
  },
  {
    id: 'not-included',
    category: 'other',
    question: '月額に含まれないものはありますか？',
    answer:
      '外部ツール・サービスの利用料（クラウドサービスのサブスクリプション等）、大規模システム開発は月額に含まれません。必要に応じて別途お見積りいたします。',
  },
  {
    id: 'payment',
    category: 'contract',
    question: 'お支払い方法は？',
    answer:
      '銀行振込のみ（振込手数料はお客様負担）でお願いしております。月末締め／翌月末日払いで、請求書は毎月末日にChatworkまたはメールでお送りします。',
  },
  {
    id: 'post-contract-deliverables',
    category: 'contract',
    question: '契約終了後、制作物（Excel・スプレッドシート・システム・RPA等）はもらえますか？',
    answer:
      '申し訳ございませんが、契約終了後に制作物をお渡しすることはできません。本サービスは月額制で制作物の利用・保守・改修を継続的にご提供する形態のため、ご契約期間中のみご利用いただけます。ご契約継続中は制限なくご利用・改修依頼が可能です。',
  },
];
