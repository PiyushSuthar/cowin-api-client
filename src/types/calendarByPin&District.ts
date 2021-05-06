export interface Root {
  centers: Center[]
}

export interface Center {
  center_id: number
  name: string
  state_name: string
  district_name: string
  block_name: string
  pincode: number
  lat: number
  long: number
  from: string
  to: string
  fee_type: string
  sessions: Session[]
}

export interface Session {
  session_id: string
  date: string
  available_capacity: number
  min_age_limit: number
  vaccine: string
  slots: string[]
}
