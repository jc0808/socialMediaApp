class ProfileFollowersPostsController < ApplicationController

     wrap_parameters format: []

    def show
        profile_followers_posts = Profile.find(params[:id]).followers

        profile_followers_posts = profile_followers_posts.map{ |follower| follower.profile.posts[0]}
        # for i in profile_followers_posts do
        #     posts << i.profile.posts
        # end

        # profile_followers_posts.each do |follower|
        #     posts << follower.profile.posts
        # end

        # posts = []

        # profile_followers_posts.each do |post|
        #     posts << post[0]
        # end

        

        # byebug
        

        render json: profile_followers_posts, status: :ok
    end

end
