export type GiftTheme = 'pink' | 'merah' | 'kuning' | 'biru' | 'putih' | 'campur';

export interface Gift {
  id: string;
  slug: string;
  edit_token: string;
  recipient_name: string;
  sender_name?: string | null;
  theme: GiftTheme;
  lock_question?: string | null;
  lock_answer?: string | null;
  greeting?: string | null;
  letter?: string | null;
  photos?: string[] | null;
  music_url?: string | null;
  expires_at?: string | null;
  created_at?: string;
}

export interface Reaction {
  id: string;
  gift_id: string;
  message: string;
  created_at?: string;
}
