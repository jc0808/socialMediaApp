class CommentsController < ApplicationController


    wrap_parameters format: []



    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end


    private 

    def comment_params
        params.permit(:profile_id, :post_id, :content)
    end


end
