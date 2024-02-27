export interface InitialUserState {
  user: {
    uid?: string,
    photo?: string,
    email?: string,
    displayName?: string
  }
}

export interface InitialChannelState {
  channelId: string | null,
  channelName: string | null
}