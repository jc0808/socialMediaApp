class UsersController < ApplicationController

    def index
    render json: User.all, status: :ok
    end

    def show
        render json: User.find(params[:id])
    end
end
