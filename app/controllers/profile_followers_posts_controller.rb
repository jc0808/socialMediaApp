class ProfileFollowersPostsController < ApplicationController

    def show
        profile_followers_posts = Profile.find(params[:id]).followers

        posts = []
        # for i in profile_followers_posts do
        #     posts << i.profile.posts
        # end

        profile_followers_posts.each do |follower|
            posts << follower.profile.posts
        end

        byebug
        

        render json: posts , status: :ok
    end

end
