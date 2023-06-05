class DislikesController < ApplicationController

     wrap_parameters format: []

    # skip_before_action :authorized, only: [:index]


    # def index
    #     render json: Dislike.all, status: :ok
    # end


    def create
        dislike = Dislike.create!(dislike_params)
        render json: dislike, status: :created
    end


    def destroy
        Post.find(params[:id]).dislikes.find_by(profile_id: session[:user_id]).destroy
        head :no_content
    end


    private

    def dislike_params
        params.permit(:post_id, :profile_id)
    end
end
