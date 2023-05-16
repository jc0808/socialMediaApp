class ProfilesController < ApplicationController
    wrap_parameters format: []

    skip_before_action :authorized, only: [:show, :index]

    def index
        render json: Profile.all, status: :ok
    end

    def show
        render json: Profile.find(params[:id]), status: :ok
    end
end
