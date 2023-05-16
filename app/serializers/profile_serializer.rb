class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :user_id, :location, :followers_posts, :user_profiles

  has_many :followers
  # has_many :posts, Serializer: PostSerializer
  has_many :posts, serializer: PostSerializer

  
end
