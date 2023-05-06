class Profile < ApplicationRecord

    belongs_to :user
    has_many :followers, :class_name => 'Follower', :foreign_key => 'following_id', dependent: :destroy
    has_many :posts,  dependent: :destroy
    has_many :comments, through: :posts, dependent: :destroy
    has_many :likes, through: :posts, dependent: :destroy
    has_many :dislikes, through: :posts, dependent: :destroy


    # def followers_posts

    #     posts = []
    #     for i in self.followers do
    #         posts << i.profile.posts
    #     end

        
    # end


end
