import type { ServiceId } from './services';

export type CaseStudy = {
  id: string;
  service: ServiceId;
  serviceLabel: string;
  industry: string;
  title: string;
  summary: string;
  before: string;
  after: string;
  metric: string;
  metricDetail: string;
};

export const CASES: CaseStudy[] = [
  {
    id: 'monthly-report',
    service: 'excel',
    serviceLabel: 'Excel / GAS',
    industry: '小売・EC',
    title: '月次レポート作成の自動化',
    summary:
      '複数の販売チャネルから手作業で集計していた月次レポートを、GASで自動集計・PDF出力する仕組みに置き換え。',
    before: '担当者が3日かけて集計・転記・グラフ化していた',
    after: 'ボタン1つで集計・整形が完了し、確認だけで提出可能に',
    metric: '月 15時間 削減',
    metricDetail: '担当者の作業時間ベース',
  },
  {
    id: 'sales-sheet',
    service: 'excel',
    serviceLabel: 'Excel',
    industry: '卸売',
    title: '売上管理表の集計・転記',
    summary:
      '日次の売上入力から各取引先別シート・月次集計シートまでを連動。関数とマクロで二重入力を排除。',
    before: '日次データを取引先別シートに手作業で転記していた',
    after: '1箇所に入力するだけで全シートが自動更新',
    metric: '月 8時間 削減',
    metricDetail: '入力ミス起因の差し戻しも解消',
  },
  {
    id: 'morning-fetch',
    service: 'rpa',
    serviceLabel: 'RPA',
    industry: '広告・マーケ',
    title: '毎朝のデータ収集',
    summary:
      '複数の管理画面・分析ツールからデータを自動取得し、Slack に当日分のダッシュボードを通知。',
    before: '担当者が毎朝1時間かけて各種ツールから抽出',
    after: '出社時にはダッシュボードが揃っており、即分析へ',
    metric: '月 20時間 削減',
    metricDetail: '朝のルーティン作業がゼロに',
  },
  {
    id: 'invoice',
    service: 'rpa',
    serviceLabel: 'RPA',
    industry: '士業・バックオフィス',
    title: '請求書・帳票作成の補助',
    summary:
      '会計ソフトと販売管理データを突き合わせ、請求書の発行・送付までを自動化。',
    before: '月初に2〜3日かかっていた請求業務',
    after: '内容チェックだけで月内に処理完了',
    metric: '月 10時間 削減',
    metricDetail: '差し戻し・誤送付のリスクも低減',
  },
  {
    id: 'customer-db',
    service: 'system',
    serviceLabel: '業務システム',
    industry: 'BtoBサービス',
    title: '顧客・案件管理システム',
    summary:
      '複数のExcelに分散していた顧客情報・案件情報を1つの管理システムに統合。検索・通知・履歴を一括管理。',
    before: '担当者ごとに違うExcelで管理、引き継ぎが大変',
    after: '検索1分以内で必要情報に到達。属人化を解消',
    metric: '検索 1分以内',
    metricDetail: '情報共有のストレスから解放',
  },
  {
    id: 'reservation',
    service: 'system',
    serviceLabel: '業務システム',
    industry: 'サロン・教室',
    title: '予約・問い合わせ管理',
    summary:
      'フォーム受付から予約管理・通知・対応履歴までを1つのシステムに集約。',
    before: 'メール・電話・LINEで散らばっていた予約対応',
    after: '一覧と通知で抜け漏れゼロ、対応工数を半減',
    metric: '対応工数 50% 削減',
    metricDetail: 'お客様への返信スピードも向上',
  },
];
