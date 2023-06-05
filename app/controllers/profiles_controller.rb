class ProfilesController < ApplicationController
    wrap_parameters format: []

    skip_before_action :authorized, only: [:show, :index]

    def index
        render json: Profile.all, status: :ok
    end

    def show
        render json: Profile.find(params[:id]), status: :ok
    end

    def update
        profile = Profile.find(params[:id])
        profile.update!(params_profile_update)
        render json: profile, status: :accepted
    end


    private

    def params_profile_update
        params.permit(:firstName, :lastName, :location)
    end
end
