export type Review = {
  headline: string;
  comment: string;
  author: string;
  score: number;
  channel: string;
  publishedAt: string;
  positiveFeedback: string | null;
  negativeFeedback: string | null;
};
