class Post < ApplicationRecord

    belongs_to :profile
    has_many :comments, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :dislikes, dependent: :destroy
end
