/**
 * 日付フォーマッタ。Asia/Tokyo (JST) 固定で出力する。
 * microCMSなどUTC基準のISO文字列を受け取り、JSTでローカライズした表示文字列を返す。
 */
const JST_FORMATTER = new Intl.DateTimeFormat('ja-JP', {
  timeZone: 'Asia/Tokyo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const JST_FORMATTER_LONG = new Intl.DateTimeFormat('ja-JP', {
  timeZone: 'Asia/Tokyo',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

/**
 * 'YYYY.MM.DD' 形式で日付を返す (JST)。
 */
export function formatDate(iso: string): string {
  return JST_FORMATTER.format(new Date(iso)).replace(/\//g, '.');
}

/**
 * 'YYYY年M月D日' 形式で日付を返す (JST)。
 */
export function formatDateLong(iso: string): string {
  return JST_FORMATTER_LONG.format(new Date(iso));
}
