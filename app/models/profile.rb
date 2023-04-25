class Profile < ApplicationRecord

    belongs_to :user
    has_many :followers, :class_name => 'Follower', :foreign_key => 'following_id', dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :comments, through: :posts, dependent: :destroy
    has_many :likes, through: :posts, dependent: :destroy
    has_many :dislikes, through: :posts, dependent: :destroy
end
