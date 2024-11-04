export interface Payload {
  sub: string;
  username: string;
}

export function createPayload(id: string, username: string): Payload {
  return {
    sub: id,
    username,
  };
}
