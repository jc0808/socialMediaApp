class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :user_id, :location

  has_many :followers
  # has_many :posts
  has_many :posts, through: :followers
end
