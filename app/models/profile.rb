class Profile < ApplicationRecord

    belongs_to :user
    has_many :followers, :class_name => 'Follower', :foreign_key => 'following_id', dependent: :destroy
    has_many :posts,  dependent: :destroy
    has_many :comments, through: :posts, dependent: :destroy
    has_many :likes, through: :posts, dependent: :destroy
    has_many :dislikes, through: :posts, dependent: :destroy

    validates :firstName, :lastName, :location, presence: true

    def followers_posts
        profile_followers_posts = self.followers

        # profile_followers_posts = profile_followers_posts.map{ |follower| {profile: follower.profile, posts: follower.profile.posts[0],
        # comments: follower.profile.posts[0].comments, likes: follower.profile.posts[0].likes, dislikes: follower.profile.posts[0].likes}}

        profile_followers_posts = profile_followers_posts.map{ |follower| 
    
{
            posts: {
                firstName: follower.profile.firstName,
                lastName: follower.profile.lastName,
                post: follower.profile.posts[0],
                likes: follower.profile.posts[0].likes,
                dislikes: follower.profile.posts[0].dislikes,
                comments: follower.profile.posts[0].comments.map{ |comment| comment.commenter},
                
            }
        }
    }

    # def self.getProfiles
    #     Profile.all
    # end


        # {
        #     posts: {
        #         follower.profile.posts[0],
        #         likes: follower.profile.posts[0].likes,
        #         dislikes: follower.profile.posts[0].likes,
        #         comments: follower.profile.posts[0].comments
        #         firstName: follower.profile.firstName,
        #         lastName: follower.profile.lastName
        #     }
        # }



    end


    def user_profiles
        Profile.all.map{|profile| 

        {
            id: profile.id,
            firstName: profile.firstName,
            lastName: profile.lastName,
            location: profile.location,
            followers: profile.followers.map{|follower| {
                id: follower.id,
                profile_id: follower.profile_id,
                following_id: follower.following_id,
                followers_profile: follower.followers_profiles
            }},
            posts: profile.posts.map{|post| {
                id: post.id,
                content: post.content,
                profile_id: post.profile_id,
                my_likes: post.likes,
                my_dislikes: post.dislikes,
                my_comments: post.comments.map{ |comment| comment.commenter}

            }},
            
        }
    }
    end
    


    # def followers_posts

    #     posts = []
    #     for i in self.followers do
    #         posts << i.profile.posts
    #     end

        
    # end


end
