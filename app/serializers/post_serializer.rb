class PostSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :content, :image, :my_likes, :my_dislikes, :my_comments

  # belongs_to :profile
  # has_many :likes
  # has_many :dislikes
  # has_many :comments
end
