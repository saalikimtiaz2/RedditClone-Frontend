export interface postInterface {
  _id: string
  postType: string
  imageUrl?: string
  title: string
  overview?: string
  category?: string
  categoryImage?: string
  postedBy: string
  postTime: string
  likes: number
  disLikes: number
}
