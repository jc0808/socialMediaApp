class Post < ApplicationRecord

    after_create_commit {broadcast_post}

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

    private 

    def broadcast_post
        ActionCable.server.broadcast("PostsChannel", {
            id: self.id,
            profile_id: self.profile_id,
            content: self.content,
            image: self.image,
            my_likes: self.likes,
            my_comments: self.comments,
            my_dislikes: self.dislikes
        })
    end




end
