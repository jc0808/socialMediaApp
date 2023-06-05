class FollowersController < ApplicationController

     wrap_parameters format: []

    # skip_before_action :authorized, only: [ :index]

    # def index 
    #     render json: Follower.all, status: :ok
    # end


    def create
        follower = Follower.create!(follower_params)
        render json: follower, status: :created
    end


    def destroy
        Follower.find(params[:id]).destroy
        head :no_content
    end


    private
    
    def follower_params
        params.permit(:following_id, :profile_id)
    end
end
