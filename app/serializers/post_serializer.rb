class PostSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :content, :image

  has_many :likes
  has_many :dislikes
  has_many :comments
end
