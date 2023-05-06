class FollowersController < ApplicationController

    def index 
        render json: Follower.all, status: :ok
    end
end
