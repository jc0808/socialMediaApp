class Post < ApplicationRecord

    belongs_to :profile
    has_many :comments, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :dislikes, dependent: :destroy

    validates :content, presence: true
    # validates :image, presence: true


    def my_likes
        self.likes
    end

    def my_dislikes
        self.dislikes
    end

    def my_comments
        self.comments.map{ |comment| comment.commenter}
    end




end
