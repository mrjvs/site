import { DateTime } from 'luxon';

export type DateProps = {
  date: Date;
};

function formatDate(date: Date) {
  const d = DateTime.fromJSDate(date);
  const now = DateTime.now();
  const diff = now.diff(d);
  if (diff.as('seconds') < 30) return 'Just now';
  if (diff.as('days') < 14) return d.toRelative();
  if (d.year !== now.year) return d.toFormat('DDD');
  return d.toFormat('d LLLL');
}

export function NiceDate(props: DateProps) {
  const formattedDate = () => formatDate(props.date);
  return <span class="text-xs text-shade-500">{formattedDate()}</span>;
}
