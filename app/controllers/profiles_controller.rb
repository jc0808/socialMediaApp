class ProfilesController < ApplicationController

    def index
        render json: Profile.all, status: :ok
    end

    def show
        render json: Profile.find(params[:id]), status: :ok
    end
end
